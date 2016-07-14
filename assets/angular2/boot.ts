/// <reference path="../../typings.d.ts" />
import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

import {GameComponent} from './game.component';

bootstrap(GameComponent,[
  defaultFirebase({
    apiKey: "AIzaSyDfeeNYOqFPQY5k7QKkuqxNjoEkmyVemTw",
    authDomain: "hotfix-f82fc.firebaseapp.com",
    databaseURL: "https://hotfix-f82fc.firebaseio.com",
    storageBucket: "hotfix-f82fc.appspot.com",
  }), FIREBASE_PROVIDERS
]);