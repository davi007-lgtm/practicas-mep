import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { addIcons } from 'ionicons';

// Iconos de Ionicons que usa la aplicación
import {
  bookOutline,
  checkmarkCircleOutline,
  checkmarkDoneOutline,
  chevronBackOutline,
  chevronForwardOutline,
  closeCircleOutline,
  copyOutline,
  helpCircleOutline,
  homeOutline,
  informationCircleOutline,
  listOutline,
  playOutline,
  refreshOutline,
  saveOutline,
  schoolOutline,
  searchOutline,
  shuffleOutline,
  timeOutline,
  timerOutline,
  trashOutline,
  trophyOutline,
} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

addIcons({
  'book-outline': bookOutline,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'checkmark-done-outline': checkmarkDoneOutline,
  'chevron-back-outline': chevronBackOutline,
  'chevron-forward-outline': chevronForwardOutline,
  'close-circle-outline': closeCircleOutline,
  'copy-outline': copyOutline,
  'help-circle-outline': helpCircleOutline,
  'home-outline': homeOutline,
  'information-circle-outline': informationCircleOutline,
  'list-outline': listOutline,
  'play-outline': playOutline,
  'refresh-outline': refreshOutline,
  'save-outline': saveOutline,
  'school-outline': schoolOutline,
  'search-outline': searchOutline,
  'shuffle-outline': shuffleOutline,
  'time-outline': timeOutline,
  'timer-outline': timerOutline,
  'trash-outline': trashOutline,
  'trophy-outline': trophyOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
  ],
});
