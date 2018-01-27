
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPage } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase'
import 'firebase/firestore';


import { MyApp } from './app.component';

var config = {
  apiKey: "AIzaSyAXGTziAgUfS4laLdAhKlJ7E0c-7Fr4X2s",
  authDomain: "studyweb-17983.firebaseapp.com",
  databaseURL: "https://studyweb-17983.firebaseio.com",
  projectId: "studyweb-17983",
  storageBucket: "studyweb-17983.appspot.com",
  messagingSenderId: "720065315340"
};


firebase.initializeApp(config);
@IonicPage()
@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,

  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
