import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrdersComponent } from './pages/page-add-orders/page-add-orders.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  {path: '', component: PageListOrdersComponent},
  {path: 'add', component: PageAddOrdersComponent},
  {path: 'edit/:id', component: PageEditOrdersComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
