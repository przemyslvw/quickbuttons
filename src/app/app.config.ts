import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"quickbuttons-13d61","appId":"1:990335771542:web:29557eccfc6df5bf4773b7","databaseURL":"https://quickbuttons-13d61-default-rtdb.firebaseio.com","storageBucket":"quickbuttons-13d61.appspot.com","apiKey":"AIzaSyBs6UlFXSGZl0UIu-CH5OPp5iwHJ-IzXw0","authDomain":"quickbuttons-13d61.firebaseapp.com","messagingSenderId":"990335771542"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
