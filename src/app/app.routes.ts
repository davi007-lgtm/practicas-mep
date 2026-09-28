import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./paginas/inicio/inicio.page').then((m) => m.InicioPage),
  },
  {
    // El código de la especialidad viaja en la ruta: /examen/3015
    path: 'examen/:codigo',
    loadComponent: () => import('./paginas/examen/examen.page').then((m) => m.ExamenPage),
  },
  {
    path: 'resultado/:codigo',
    loadComponent: () => import('./paginas/resultado/resultado.page').then((m) => m.ResultadoPage),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
