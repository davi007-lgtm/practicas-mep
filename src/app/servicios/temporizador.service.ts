import { Injectable, inject, signal } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { EstadoPractica } from './practica.service';

// Segundos en los que se avisa que se está acabando el tiempo
const AVISO_10_MINUTOS = 600;
const AVISO_5_MINUTOS = 300;
const AVISO_1_MINUTO = 60;

// Cuenta el tiempo del examen y avisa con un ion-toast
@Injectable({ providedIn: 'root' })
export class TemporizadorService {
  private toastController = inject(ToastController);

  // Segundos que lleva el estudiante
  readonly transcurrido = signal(0);

  // Segundos que faltan (solo modo examen)
  readonly restante = signal(0);

  // Cuando el tiempo se acaba y hay que entregar
  readonly tiempoAgotado = signal(false);

  // Hora en que empezó y hora en que acaba (null en modo práctica)
  private horaInicio = 0;
  private horaFin: number | null = null;

  // El reloj de un segundo en un segundo
  private intervalo: ReturnType<typeof setInterval> | null = null;

  // Para no mostrar dos veces el mismo aviso
  private aviso10 = false;
  private aviso5 = false;
  private aviso1 = false;
  private avisoFinal = false;

  // Empieza a contar. Usa la hora de fin guardada, nunca los segundos
  iniciar(estado: EstadoPractica): void {
    this.detener();
    this.horaInicio = estado.horaInicio;
    this.horaFin = estado.terminaEn;
    this.transcurrido.set(0);
    this.restante.set(0);
    this.tiempoAgotado.set(false);
    this.aviso10 = false;
    this.aviso5 = false;
    this.aviso1 = false;
    this.avisoFinal = false;

    this.actualizar();
    this.intervalo = setInterval(() => this.actualizar(), 1000);
  }

  // Apaga el reloj
  detener(): void {
    if (this.intervalo !== null) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }

  // Cuenta un segundo y avisa si se está acabando el tiempo
  private actualizar(): void {
    const ahora = Date.now();
    this.transcurrido.set(Math.max(0, Math.floor((ahora - this.horaInicio) / 1000)));

    // En modo práctica no hay hora de fin
    if (this.horaFin === null) {
      return;
    }

    const segundos = Math.max(0, Math.ceil((this.horaFin - ahora) / 1000));
    this.restante.set(segundos);

    if (segundos === 0) {
      if (!this.avisoFinal) {
        this.avisoFinal = true;
        this.aviso('Se acabó el tiempo. El examen fue enviado.', 'warning');
      }
      this.tiempoAgotado.set(true);
      this.detener();
      return;
    }

    if (segundos <= AVISO_1_MINUTO && !this.aviso1) {
      this.aviso1 = true;
      this.aviso('Falta 1 minuto para terminar el tiempo.', 'danger');
    }
    if (segundos <= AVISO_5_MINUTOS && !this.aviso5) {
      this.aviso5 = true;
      this.aviso('Faltan 5 minutos para terminar el tiempo.', 'danger');
    }
    if (segundos <= AVISO_10_MINUTOS && !this.aviso10) {
      this.aviso10 = true;
      this.aviso('Faltan 10 minutos para terminar el tiempo.', 'danger');
    }
  }

  // Muestra el ion-toast arriba de la pantalla
  async aviso(mensaje: string, color: string): Promise<void> {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 4000,
      position: 'top',
      color: color,
    });
    await toast.present();
  }
}
