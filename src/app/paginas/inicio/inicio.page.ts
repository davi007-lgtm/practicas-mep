import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonNote,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  SegmentCustomEvent,
} from '@ionic/angular';

import { especialidades } from '../../datos/especialidades';
import { Especialidad } from '../../datos/especialidad.modelo';
import { EstadoPractica, ModoPractica, PracticaService } from '../../servicios/practica.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonFooter,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonNote,
    IonChip,
  ],
})
export class InicioPage {
  // Servicios que usa la página
  private estadoService = inject(PracticaService);
  private alertController = inject(AlertController);
  private router = inject(Router);

  // Todas las especialidades para poder elegirlas
  opciones: Especialidad[] = especialidades;

  // La especialidad elegida (al abrir la página es la primera)
  especialidad: Especialidad = especialidades[0];

  // Modo que eligió el estudiante
  modo: ModoPractica = 'practica';

  // Progreso de la especialidad elegida (puede ser null)
  guardado: EstadoPractica | null = null;

  constructor() {
    this.guardado = this.estadoService.cargar(this.especialidad.codigo);
  }

  // Cambió la especialidad en la lista
  elegir(otra: Especialidad): void {
    this.especialidad = otra;
    this.guardado = this.estadoService.cargar(otra.codigo);
  }

  // ¿Es la especialidad que está elegida?
  esElegida(otra: Especialidad): boolean {
    return otra.codigo === this.especialidad.codigo;
  }

  // Cambió el modo en el segment
  cambiarModo(evento: SegmentCustomEvent): void {
    this.modo = evento.detail.value as ModoPractica;
  }

  // Empieza una práctica desde cero
  comenzar(): void {
    this.estadoService.iniciar(this.especialidad, this.modo);
    // Se salta la pantalla de instrucciones y abre la primera pregunta
    this.estadoService.irA(1);
    this.router.navigate(['/examen', this.especialidad.codigo]);
  }

  // Sigue con el progreso que ya estaba guardado
  continuar(): void {
    this.guardado = this.estadoService.cargar(this.especialidad.codigo);
    this.estadoService.estado.set(this.guardado);
    this.router.navigate(['/examen', this.especialidad.codigo]);
  }

  // Abre la página de resultados
  verResultados(): void {
    this.guardado = this.estadoService.cargar(this.especialidad.codigo);
    this.estadoService.estado.set(this.guardado);
    this.router.navigate(['/resultado', this.especialidad.codigo]);
  }

  // Pregunta antes de borrar el progreso
  async confirmarBorrar(): Promise<void> {
    const alerta = await this.alertController.create({
      header: 'Borrar progreso',
      message: 'Se van a eliminar las respuestas guardadas. ¿Desea continuar?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Borrar',
          role: 'destructive',
          handler: () => {
            this.estadoService.borrar(this.especialidad.codigo);
            this.guardado = null;
          },
        },
      ],
    });
    await alerta.present();
  }

  // Cuántas preguntas ya están respondidas
  get respondidas(): number {
    if (!this.guardado) {
      return 0;
    }
    return Object.keys(this.guardado.respuestas).length;
  }
}
