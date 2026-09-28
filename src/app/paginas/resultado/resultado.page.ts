import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

import { ItemPreguntaComponent } from '../../componentes/item-pregunta/item-pregunta.component';
import { buscarEspecialidad } from '../../datos/especialidades';
import { Especialidad, Pregunta } from '../../datos/especialidad.modelo';
import { ModoPractica, PracticaService } from '../../servicios/practica.service';
import {
  ResultadoPractica,
  ResultadoService,
  RevisionPregunta,
} from '../../servicios/resultado.service';

type Filtro = 'todas' | 'incorrectas' | 'sinResponder';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonContent,
    IonFooter,
    IonProgressBar,
    IonLabel,
    ItemPreguntaComponent,
  ],
})
export class ResultadoPage implements OnInit {
  // Servicios que usa la página
  private estadoService = inject(PracticaService);
  private resultadoService = inject(ResultadoService);
  private alertController = inject(AlertController);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // La especialidad viene en la ruta: /resultado/3015 o /resultado/2011
  especialidad: Especialidad = buscarEspecialidad('');

  // Resumen de la práctica
  resultado: ResultadoPractica | null = null;

  // Modo con el que se hizo la práctica
  modoPractica: ModoPractica = 'practica';

  // Filtro de la revisión
  filtro: WritableSignal<Filtro> = signal<Filtro>('todas');

  // Aviso de que se acabó el tiempo
  private avisoTiempo = false;

  ngOnInit(): void {
    // La especialidad se lee de la ruta
    this.especialidad = buscarEspecialidad(this.route.snapshot.paramMap.get('codigo') ?? '');

    // Traer el progreso guardado de esta especialidad
    const enMemoria = this.estadoService.estado();
    if (!enMemoria || enMemoria.codigo !== this.especialidad.codigo) {
      this.estadoService.estado.set(this.estadoService.cargar(this.especialidad.codigo));
    }

    const actual = this.estadoService.estado();
    if (!actual || !actual.terminada) {
      // Todavía no se entregó nada
      this.router.navigate(['/inicio']);
      return;
    }

    this.modoPractica = actual.modo;
    this.resultado = this.resultadoService.calcular(this.especialidad, actual);
    this.avisoTiempo = this.route.snapshot.queryParamMap.get('tiempoAgotado') === '1';

    if (this.avisoTiempo) {
      this.mostrarAvisoTiempo();
    }
  }

  // Cambio el filtro de la revisión
  cambiarFiltro(nuevo: Filtro): void {
    this.filtro.set(nuevo);
  }

  // Preguntas que se muestran según el filtro
  get revisiones(): RevisionPregunta[] {
    if (!this.resultado) {
      return [];
    }
    const todas = this.resultado.revisiones;
    if (this.filtro() === 'incorrectas') {
      return todas.filter((r) => r.elegida !== null && !r.correcta);
    }
    if (this.filtro() === 'sinResponder') {
      return todas.filter((r) => r.elegida === null);
    }
    return todas;
  }

  // Orden en que se mostraron las opciones de esa pregunta
  ordenDe(pregunta: Pregunta): number[] {
    const actual = this.estadoService.estado();
    const guardado = actual ? actual.ordenMezclado[pregunta.id] : undefined;
    return guardado ? guardado : [0, 1, 2];
  }

  // Recorta los textos largos de los indicadores
  corto(texto: string, largo: number): string {
    if (texto.length <= largo) {
      return texto;
    }
    return texto.substring(0, largo) + '…';
  }

  // Empieza otra práctica con el mismo modo
  repetir(): void {
    this.estadoService.iniciar(this.especialidad, this.modoPractica);
    // Se salta la pantalla de instrucciones y abre la primera pregunta
    this.estadoService.irA(1);
    this.router.navigate(['/examen', this.especialidad.codigo]);
  }

  // Vuelve al inicio
  volver(): void {
    this.router.navigate(['/inicio']);
  }

  // Avisa que el tiempo se acabó
  private async mostrarAvisoTiempo(): Promise<void> {
    const alerta = await this.alertController.create({
      header: 'Se acabó el tiempo',
      message: 'La práctica se entregó automáticamente al cumplirse el tiempo.',
      buttons: [{ text: 'Entendido' }],
    });
    await alerta.present();
  }
}
