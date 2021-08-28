import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../template/template.module';
import { IconsModule } from '../icons/icons.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TemplateModule,
    IconsModule,
    ReactiveFormsModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective
  ]
})
export class SharedModule { }
