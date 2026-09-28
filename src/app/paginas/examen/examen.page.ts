import { Component, OnDestroy, OnInit, Signal, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

import { BarraItemsComponent } from '../../componentes/barra-items/barra-items.component';
import { ItemPreguntaComponent } from '../../componentes/item-pregunta/item-pregunta.component';
import { buscarEspecialidad } from '../../datos/especialidades';
import { Especialidad, Pregunta } from '../../datos/especialidad.modelo';
import {
  EstadoItem,
  EstadoPractica,
  PASO_ESCALA,
  POSICION_FIN,
  POSICION_INSTRUCCIONES,
  PracticaService,
} from '../../servicios/practica.service';
import { TemporizadorService } from '../../servicios/temporizador.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonIcon,
    IonContent,
    IonFooter,
    BarraItemsComponent,
    ItemPreguntaComponent,
  ],
})
export class ExamenPage implements OnInit, OnDestroy {
  // Servicios que usa la página
  private estadoService = inject(PracticaService);
  private temporizador = inject(TemporizadorService);
  private alertController = inject(AlertController);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // La especialidad viene en la ruta: /examen/3015 o /examen/2011
  especialidad: Especialidad = buscarEspecialidad('');

  // Posiciones de las pantallas que no son preguntas
  readonly posicionInstrucciones = POSICION_INSTRUCCIONES;
  readonly posicionFin = POSICION_FIN;

  // Para no entregar dos veces
  private entregada = false;

  constructor() {
    // Cuando el tiempo se acaba, se entrega y se abren los resultados
    effect(() => {
      if (this.temporizador.tiempoAgotado()) {
        this.entregar(true);
      }
    });
  }

  ngOnInit(): void {
    // La especialidad se lee de la ruta
    this.especialidad = buscarEspecialidad(this.route.snapshot.paramMap.get('codigo') ?? '');

    // Si el progreso en memoria es de otra especialidad, se busca el de esta
    const enMemoria = this.estadoService.estado();
    if (!enMemoria || enMemoria.codigo !== this.especialidad.codigo) {
      this.estadoService.estado.set(this.estadoService.cargar(this.especialidad.codigo));
    }

    const actual = this.estado();
    if (!actual) {
      // No hay ninguna práctica abierta: volver al inicio
      this.router.navigate(['/inicio']);
      return;
    }
    if (actual.terminada) {
      // Ya se entregó antes
      this.router.navigate(['/resultado', this.especialidad.codigo]);
      return;
    }

    // El reloj corre desde que el estudiante empezó
    this.temporizador.iniciar(actual);
  }

  ngOnDestroy(): void {
    // Al salir de la página se apaga el reloj
    this.temporizador.detener();
  }

  // Estado de la práctica que se está mostrando
  get estado(): Signal<EstadoPractica | null> {
    return this.estadoService.estado;
  }

  // ¿La práctica es en modo examen?
  get esExamen(): boolean {
    const actual = this.estado();
    return actual !== null && actual.modo === 'examen';
  }

  // Posición del examen: 0 = instrucciones, 1 a 60 = preguntas, 61 = fin
  get posicion(): number {
    const actual = this.estado();
    return actual ? actual.posicion : POSICION_INSTRUCCIONES;
  }

  // ¿Está viendo una pregunta? (solo del 1 al 60)
  get enPregunta(): boolean {
    return this.posicion >= 1 && this.posicion <= this.total;
  }

  // Cantidad de preguntas
  get total(): number {
    return this.especialidad.preguntas.length;
  }

  // Pregunta que se está viendo (posición 1 = la primera pregunta)
  get pregunta(): Pregunta {
    const preguntas = this.especialidad.preguntas;
    const indice = this.posicion - 1;
    if (indice >= 0 && indice < preguntas.length) {
      return preguntas[indice];
    }
    return preguntas[0];
  }

  // Opciones ya mezcladas, en el orden que las ve el estudiante
  get ordenActual(): number[] {
    const actual = this.estado();
    const guardado = actual ? actual.ordenMezclado[this.pregunta.id] : undefined;
    return guardado ? guardado : [0, 1, 2];
  }

  // Respuesta guardada del estudiante (índice original) o undefined
  get respuestaActual(): number | undefined {
    const actual = this.estado();
    if (!actual) {
      return undefined;
    }
    return actual.respuestas[this.pregunta.id];
  }

  // Estado de cada pregunta para la barra de numeración
  readonly estadoDe = (idPregunta: number): EstadoItem => this.estadoService.estadoDeItem(idPregunta);

  // ¿La pregunta actual está marcada?
  get marcadaActual(): boolean {
    const actual = this.estado();
    return actual !== null && actual.marcadas[this.pregunta.id] === true;
  }

  // Cuántas van contestadas
  get respondidas(): number {
    return this.estadoService.contarRespondidas();
  }

  // Zoom del texto: 1 es el tamaño normal
  get escala(): number {
    const actual = this.estado();
    return actual ? actual.escala : 1;
  }

  // Horas de duración del examen (180 minutos = 3 horas)
  get horasExamen(): number {
    return this.especialidad.duracionMinutos / 60;
  }

  // Tiempo que lleva el estudiante, en HH:MM:SS
  get relojTranscurrido(): string {
    return this.formato(this.temporizador.transcurrido());
  }

  // Tiempo que falta, en HH:MM:SS
  get relojRestante(): string {
    return this.formato(this.temporizador.restante());
  }

  // Con menos de 10 minutos el tiempo restante se pone rojo
  get pocoTiempo(): boolean {
    return this.esExamen && this.temporizador.restante() < 600;
  }

  // El ítem avisa la opción elegida: se guarda el índice ORIGINAL
  recibirRespuesta(indiceOriginal: number): void {
    this.estadoService.responder(this.pregunta.id, indiceOriginal);
  }

  // La barra de numeración pidió otra posición
  irAPosicion(posicion: number): void {
    this.estadoService.irA(posicion);
  }

  // Botón ANTERIOR
  anterior(): void {
    if (this.posicion > this.posicionInstrucciones) {
      this.estadoService.irA(this.posicion - 1);
    }
  }

  // Botón SIGUIENTE
  siguiente(): void {
    if (this.posicion < this.posicionFin) {
      this.estadoService.irA(this.posicion + 1);
    }
  }

  // Botón MARCAR PREGUNTA
  alternarMarca(): void {
    if (this.enPregunta) {
      this.estadoService.alternarMarca(this.pregunta.id);
    }
  }

  // Acercar el texto
  acercar(): void {
    this.estadoService.cambiarEscala(PASO_ESCALA);
  }

  // Alejar el texto
  alejar(): void {
    this.estadoService.cambiarEscala(-PASO_ESCALA);
  }

  // Botón de restablecer el tamaño del texto
  restablecerZoom(): void {
    this.estadoService.restablecerEscala();
  }

  // Pide la confirmación antes de enviar el examen
  async confirmarEntrega(): Promise<void> {
    const actual = this.estado();
    if (!actual) {
      return;
    }

    const faltantes = this.total - this.respondidas;
    const alerta = await this.alertController.create({
      header: 'Completar sección',
      message:
        faltantes > 0
          ? 'Todavía hay ' +
            faltantes +
            ' preguntas sin responder. Las que falten cuentan como incorrectas. ¿Desea enviar el examen?'
          : 'Todas las preguntas tienen respuesta. ¿Desea enviar el examen?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Aceptar',
          handler: () => {
            this.entregar(false);
          },
        },
      ],
    });
    await alerta.present();
  }

  // Marca la práctica como terminada y abre los resultados
  private entregar(tiempoAgotado: boolean): void {
    if (this.entregada) {
      return;
    }
    this.entregada = true;
    this.temporizador.detener();
    this.estadoService.terminar();
    this.router.navigate(['/resultado', this.especialidad.codigo], {
      queryParams: tiempoAgotado ? { tiempoAgotado: '1' } : {},
    });
  }

  // 3725 -> "01:02:05"
  private formato(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const resto = segundos % 60;
    return this.dosDigitos(horas) + ':' + this.dosDigitos(minutos) + ':' + this.dosDigitos(resto);
  }

  // 5 -> "05"
  private dosDigitos(numero: number): string {
    return numero < 10 ? '0' + numero : String(numero);
  }
}
