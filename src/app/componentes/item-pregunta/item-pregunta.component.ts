import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pregunta } from '../../datos/especialidad.modelo';

// Modo del ítem: responder (práctica/examen) o revision (resultado)
export type ModoItem = 'responder' | 'revision';

@Component({
  selector: 'app-item-pregunta',
  templateUrl: './item-pregunta.component.html',
  styleUrls: ['./item-pregunta.component.scss'],
})
export class ItemPreguntaComponent {
  // La pregunta que se muestra
  @Input({ required: true }) pregunta!: Pregunta;

  // Número de la pregunta (para el encabezado)
  @Input({ required: true }) numero = 0;

  // Orden en pantalla de las opciones: [2, 0, 1] = se ve C, A, B
  @Input({ required: true }) opcionesOrden: number[] = [];

  // Respuesta del estudiante: índice ORIGINAL de la opción, o undefined
  @Input() respuesta: number | undefined;

  // Qué está haciendo el ítem
  @Input() modo: ModoItem = 'responder';

  // Emite el índice ORIGINAL de la opción elegida
  @Output() respondio = new EventEmitter<number>();

  // ¿Es la revisión de resultados?
  get esRevision(): boolean {
    return this.modo === 'revision';
  }

  // Parte del enunciado que va antes de la pregunta
  get contexto(): string {
    return this.partes().contexto;
  }

  // Parte del enunciado que es la pregunta (desde el "?")
  get textoPregunta(): string {
    return this.partes().texto;
  }

  // Corta el enunciado donde aparece el ". ¿" de la pregunta
  private partes(): { contexto: string; texto: string } {
    const completo = this.pregunta.texto;
    const punto = completo.indexOf('. ¿');
    if (punto > -1) {
      return {
        contexto: completo.substring(0, punto + 1),
        texto: completo.substring(punto + 2),
      };
    }
    // No tiene pregunta aparte: todo es un solo párrafo
    return { contexto: '', texto: completo };
  }

  // Letra de la opción según la posición en pantalla
  letra(posicion: number): string {
    return ['A', 'B', 'C'][posicion];
  }

  // Texto de la opción según la posición en pantalla
  textoOpcion(posicion: number): string {
    return this.pregunta.opciones[this.opcionesOrden[posicion]];
  }

  // El círculo de radio aparece marcado en esta opción
  estaSeleccionada(posicion: number): boolean {
    return this.respuesta === this.opcionesOrden[posicion];
  }

  // Esta opción es la correcta
  esCorrecta(posicion: number): boolean {
    return this.pregunta.correcta === this.opcionesOrden[posicion];
  }

  // El estudiante eligió esta opción
  esElegida(posicion: number): boolean {
    return this.respuesta === this.opcionesOrden[posicion];
  }

  // El estudiante eligió esta opción y está mal
  esIncorrecta(posicion: number): boolean {
    return this.esElegida(posicion) && !this.esCorrecta(posicion);
  }

  // El estudiante tocó una opción: se avisa el índice ORIGINAL
  elegir(posicion: number): void {
    if (this.esRevision) {
      return;
    }
    this.respondio.emit(this.opcionesOrden[posicion]);
  }
}
