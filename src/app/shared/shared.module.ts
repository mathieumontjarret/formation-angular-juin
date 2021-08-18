import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../template/template.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateModule,
    IconsModule
  ]
})
export class SharedModule { }
