import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';



@NgModule({
  declarations: [
    IconCloseComponent,
    IconNavComponent,
    IconEditComponent,
    IconDeleteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconCloseComponent,
    IconNavComponent,
    IconEditComponent,
    IconDeleteComponent
  ]
})
export class IconsModule { }
