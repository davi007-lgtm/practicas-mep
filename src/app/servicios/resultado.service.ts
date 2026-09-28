import { Injectable, inject } from '@angular/core';
import { Especialidad, Pregunta } from '../datos/especialidad.modelo';
import { EstadoPractica, PracticaService } from './practica.service';

// Resultado de una pregunta, para la revisión final
export interface RevisionPregunta {
  pregunta: Pregunta;
  elegida: number | null;   // índice original que eligió el estudiante
  correcta: boolean;
}

// Un grupo de preguntas (por ejemplo, todas las de un nivel)
export interface Grupo {
  nombre: string;
  total: number;
  correctas: number;
  respondidas: number;
  porcentaje: number;
}

// Resultado completo de la práctica
export interface ResultadoPractica {
  total: number;
  respondidas: number;
  correctas: number;
  incorrectas: number;
  sinResponder: number;
  porcentaje: number;
  porNivel: Grupo[];
  porSubarea: Grupo[];
  porIndicador: Grupo[];
  revisiones: RevisionPregunta[];
  minutosUsados: number;
  limiteMinutos: number;
}

@Injectable({ providedIn: 'root' })
export class ResultadoService {
  // Para calcular el tiempo que tardó el estudiante
  private practicaService = inject(PracticaService);

  // Revisa todas las respuestas y arma el resumen
  calcular(esp: Especialidad, estado: EstadoPractica): ResultadoPractica {
    const revisiones: RevisionPregunta[] = esp.preguntas.map((pregunta) => {
      const elegida = estado.respuestas[pregunta.id];
      return {
        pregunta: pregunta,
        elegida: elegida === undefined ? null : elegida,
        correcta: elegida === pregunta.correcta,
      };
    });

    const correctas = revisiones.filter((r) => r.correcta).length;
    const respondidas = revisiones.filter((r) => r.elegida !== null).length;
    const total = esp.preguntas.length;

    return {
      total: total,
      respondidas: respondidas,
      correctas: correctas,
      incorrectas: respondidas - correctas,
      sinResponder: total - respondidas,
      porcentaje: total > 0 ? Math.round((correctas / total) * 100) : 0,
      porNivel: this.agrupar(revisiones, (r) => r.pregunta.nivel),
      porSubarea: this.agrupar(revisiones, (r) => r.pregunta.subarea),
      porIndicador: this.agrupar(revisiones, (r) => r.pregunta.indicador),
      revisiones: revisiones,
      minutosUsados: this.minutosUsados(estado),
      limiteMinutos: esp.duracionMinutos,
    };
  }

  // Junta las preguntas que comparten el mismo texto de grupo
  private agrupar(revisiones: RevisionPregunta[], clave: (r: RevisionPregunta) => string): Grupo[] {
    const grupos: Grupo[] = [];
    for (const revision of revisiones) {
      const nombre = clave(revision);
      let grupo = grupos.find((g) => g.nombre === nombre);
      if (!grupo) {
        grupo = { nombre: nombre, total: 0, correctas: 0, respondidas: 0, porcentaje: 0 };
        grupos.push(grupo);
      }
      grupo.total = grupo.total + 1;
      if (revision.elegida !== null) {
        grupo.respondidas = grupo.respondidas + 1;
      }
      if (revision.correcta) {
        grupo.correctas = grupo.correctas + 1;
      }
    }
    for (const grupo of grupos) {
      grupo.porcentaje = grupo.total > 0 ? Math.round((grupo.correctas / grupo.total) * 100) : 0;
    }
    return grupos;
  }

  // Cuánto tiempo tardó el estudiante
  private minutosUsados(estado: EstadoPractica): number {
    return Math.round(this.practicaService.tiempoTranscurrido(estado) / 60000);
  }
}
