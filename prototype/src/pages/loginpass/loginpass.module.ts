import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginpassPage } from './loginpass';

@NgModule({
  declarations: [
    LoginpassPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginpassPage),
  ],
})
export class LoginpassPageModule {}
