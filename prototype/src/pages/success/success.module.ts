import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessPage } from './success';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@NgModule({
  declarations: [
    SuccessPage
  ],
  imports: [
    IonicPageModule.forChild(SuccessPage),
  ],
})
export class SuccessPageModule {}
