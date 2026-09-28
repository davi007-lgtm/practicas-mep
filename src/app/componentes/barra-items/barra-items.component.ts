import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EstadoItem } from '../../servicios/practica.service';

// Un botón de la barra
interface ItemBarra {
  // Posición a la que lleva
  id: number;
  // Texto que se ve
  etiqueta: string;
}

@Component({
  selector: 'app-barra-items',
  templateUrl: './barra-items.component.html',
  styleUrls: ['./barra-items.component.scss'],
})
export class BarraItemsComponent {
  // Cantidad de preguntas del examen (60)
  @Input({ required: true }) total = 60;

  // Posición actual: 0 = i, 1 a 60 = preguntas, 61 = Fin
  @Input({ required: true }) posicion = 0;

  // Dice el estado de cada pregunta: 'respondida', 'marcada' o 'pendiente'
  @Input({ required: true }) estadoDe!: (id: number) => EstadoItem;

  // Avisa a qué posición se quiere ir
  @Output() irA = new EventEmitter<number>();

  // Botones de la barra: "i", los números 1 a total y "Fin"
  get items(): ItemBarra[] {
    const lista: ItemBarra[] = [{ id: 0, etiqueta: 'i' }];
    for (let numero = 1; numero <= this.total; numero++) {
      lista.push({ id: numero, etiqueta: String(numero) });
    }
    lista.push({ id: this.total + 1, etiqueta: 'Fin' });
    return lista;
  }

  // Estado del botón. La "i" y el "Fin" siempre están pendientes
  estadoDeItem(id: number): EstadoItem {
    if (id < 1 || id > this.total) {
      return 'pendiente';
    }
    return this.estadoDe(id);
  }

  // El botón lleva a esa posición
  elegir(id: number): void {
    this.irA.emit(id);
  }
}
