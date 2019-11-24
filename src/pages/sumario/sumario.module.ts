import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SumarioPage } from './sumario';

@NgModule({
  declarations: [
    SumarioPage,
  ],
  imports: [
    IonicPageModule.forChild(SumarioPage),
    TranslateModule.forChild()
  ],
  exports: [
    SumarioPage
  ]
})
export class SumarioPageModule { }
