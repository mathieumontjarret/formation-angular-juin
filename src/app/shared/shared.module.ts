import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../template/template.module';
import { IconsModule } from '../icons/icons.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent,
    TotalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateModule,
    IconsModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe
  ]
})
export class SharedModule { }
