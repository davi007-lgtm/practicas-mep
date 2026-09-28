import { Injectable, signal } from '@angular/core';
import { Especialidad } from '../datos/especialidad.modelo';

// Si cambia el formato del estado guardado, sube este número.
// Así el estudiante no lee progreso viejo con el formato anterior.
export const VERSION_ESTADO = 2;

export type ModoPractica = 'practica' | 'examen';

// Cómo se ve una pregunta en la barra del examen
export type EstadoItem = 'respondida' | 'marcada' | 'pendiente';

// Posiciones del examen: 0 = instrucciones, 1 a 60 = preguntas, 61 = fin
export const POSICION_INSTRUCCIONES = 0;
export const POSICION_FIN = 61;

// Zoom del texto: de 0.8 a 1.6
export const ESCALA_MINIMA = 0.8;
export const ESCALA_MAXIMA = 1.6;
export const PASO_ESCALA = 0.1;

// Progreso de una práctica. Se guarda completo en el localStorage.
export interface EstadoPractica {
  version: number;
  codigo: string;
  modo: ModoPractica;
  // Orden mezclado de cada pregunta. Guarda los índices ORIGINALES.
  // Ejemplo: { 1: [2, 0, 1] } = la pregunta 1 se ve C, A, B.
  ordenMezclado: { [id: number]: number[] };
  // Respuesta del estudiante: SIEMPRE el índice original de la opción (0 = A).
  respuestas: { [id: number]: number };
  // Preguntas que el estudiante marcó para revisar después
  marcadas: { [id: number]: boolean };
  // Zoom del texto (1 = tamaño normal)
  escala: number;
  // Dónde está el estudiante: 0 = instrucciones, 1 a 60 = preguntas, 61 = fin
  posicion: number;
  horaInicio: number;       // fecha en que empezó
  terminaEn: number | null; // modo examen: hora en que se acaba (no los segundos)
  terminada: boolean;       // si el estudiante ya entregó
  fechaFin: number | null;  // cuándo entregó
}

@Injectable({ providedIn: 'root' })
export class PracticaService {
  // Estado de la práctica que se está mostrando en este momento
  readonly estado = signal<EstadoPractica | null>(null);

  // Llave del localStorage: practica_3015
  private clave(codigo: string): string {
    return 'practica_' + codigo;
  }

  // Empieza una práctica desde cero. Las opciones se mezclan UNA sola vez aquí.
  iniciar(esp: Especialidad, modo: ModoPractica): EstadoPractica {
    const ordenMezclado: { [id: number]: number[] } = {};
    for (const pregunta of esp.preguntas) {
      ordenMezclado[pregunta.id] = this.mezclar(pregunta.opciones.length);
    }

    const ahora = Date.now();
    const nuevo: EstadoPractica = {
      version: VERSION_ESTADO,
      codigo: esp.codigo,
      modo: modo,
      ordenMezclado: ordenMezclado,
      respuestas: {},
      marcadas: {},
      escala: 1,
      // Al iniciar el estudiante está en las instrucciones
      posicion: POSICION_INSTRUCCIONES,
      horaInicio: ahora,
      // En modo examen guardamos la hora de fin, nunca los segundos que faltan
      terminaEn: modo === 'examen' ? ahora + esp.duracionMinutos * 60000 : null,
      terminada: false,
      fechaFin: null,
    };

    this.estado.set(nuevo);
    this.guardar(nuevo);
    return nuevo;
  }

  // Lee el progreso guardado. Si no hay o la versión es vieja, devuelve null.
  cargar(codigo: string): EstadoPractica | null {
    try {
      const texto = localStorage.getItem(this.clave(codigo));
      if (!texto) {
        return null;
      }
      const guardado = JSON.parse(texto) as EstadoPractica;
      if (guardado.version !== VERSION_ESTADO) {
        this.borrar(codigo);
        return null;
      }
      return guardado;
    } catch (error) {
      // El navegador puede tener bloqueado el almacenamiento
      console.log('No se pudo leer el progreso guardado');
      return null;
    }
  }

  // Escribe el estado en el localStorage
  guardar(estado: EstadoPractica): void {
    try {
      localStorage.setItem(this.clave(estado.codigo), JSON.stringify(estado));
    } catch (error) {
      console.log('No se pudo guardar el progreso');
    }
  }

  // Borra el progreso de la especialidad
  borrar(codigo: string): void {
    try {
      localStorage.removeItem(this.clave(codigo));
    } catch (error) {
      console.log('No se pudo borrar el progreso');
    }
    const actual = this.estado();
    if (actual && actual.codigo === codigo) {
      this.estado.set(null);
    }
  }

  // Toma el estado que hay en memoria, le cambia algo y lo vuelve a guardar
  private cambiar(cambios: Partial<EstadoPractica>): void {
    const actual = this.estado();
    if (!actual) {
      return;
    }
    const nuevo: EstadoPractica = { ...actual, ...cambios };
    this.estado.set(nuevo);
    this.guardar(nuevo);
  }

  // Guarda la respuesta del estudiante usando el índice ORIGINAL (0 = A)
  responder(idPregunta: number, indiceOriginal: number): void {
    const actual = this.estado();
    if (!actual) {
      return;
    }
    const respuestas = { ...actual.respuestas };
    respuestas[idPregunta] = indiceOriginal;
    this.cambiar({ respuestas: respuestas });
  }

  // Se mueve a otra posición del examen (0 = instrucciones, 1 a 60, 61 = fin)
  irA(posicion: number): void {
    this.cambiar({ posicion: posicion });
  }

  // Marca o desmarca una pregunta para revisarla después
  alternarMarca(idPregunta: number): void {
    const actual = this.estado();
    if (!actual) {
      return;
    }
    const marcadas = { ...actual.marcadas };
    marcadas[idPregunta] = !marcadas[idPregunta];
    this.cambiar({ marcadas: marcadas });
  }

  // Cómo se ve esa pregunta en la barra del examen
  estadoDeItem(idPregunta: number): EstadoItem {
    const actual = this.estado();
    if (!actual) {
      return 'pendiente';
    }
    // Si está marcada y respondida, gana la marca
    if (actual.marcadas[idPregunta]) {
      return 'marcada';
    }
    if (actual.respuestas[idPregunta] !== undefined) {
      return 'respondida';
    }
    return 'pendiente';
  }

  // Cuántas preguntas tienen respuesta
  contarRespondidas(): number {
    const actual = this.estado();
    if (!actual) {
      return 0;
    }
    return Object.keys(actual.respuestas).length;
  }

  // Cerca o aleja el texto. Los límites son 0.8 y 1.6
  cambiarEscala(delta: number): void {
    const actual = this.estado();
    if (!actual) {
      return;
    }
    // Un solo decimal para que los pasos siempre sean de 0.1
    let nueva = Math.round((actual.escala + delta) * 10) / 10;
    if (nueva < ESCALA_MINIMA) {
      nueva = ESCALA_MINIMA;
    }
    if (nueva > ESCALA_MAXIMA) {
      nueva = ESCALA_MAXIMA;
    }
    this.cambiar({ escala: nueva });
  }

  // Vuelve el texto al tamaño normal
  restablecerEscala(): void {
    this.cambiar({ escala: 1 });
  }

  // Milisegundos que lleva el estudiante (o el total, si ya entregó)
  tiempoTranscurrido(estado?: EstadoPractica): number {
    const actual = estado ? estado : this.estado();
    if (!actual) {
      return 0;
    }
    const fin = actual.fechaFin ? actual.fechaFin : Date.now();
    return Math.max(0, fin - actual.horaInicio);
  }

  // Marca la práctica como entregada
  terminar(): void {
    this.cambiar({ terminada: true, fechaFin: Date.now() });
  }

  // Mezcla los números 0, 1, 2... para que las opciones no siempre salgan igual
  private mezclar(cantidad: number): number[] {
    const orden: number[] = [];
    for (let i = 0; i < cantidad; i++) {
      orden.push(i);
    }
    for (let i = orden.length - 1; i > 0; i--) {
      const alAzar = Math.floor(Math.random() * (i + 1));
      const aux = orden[i];
      orden[i] = orden[alAzar];
      orden[alAzar] = aux;
    }
    return orden;
  }
}
