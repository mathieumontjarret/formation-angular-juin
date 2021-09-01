import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-orders',
  templateUrl: './page-edit-orders.component.html',
  styleUrls: ['./page-edit-orders.component.scss']
})
export class PageEditOrdersComponent implements OnInit {
  public item$!: Observable<Order>;
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      // récupérer id dans l'url (ActivatedRoute)
      const id = Number(this.route.snapshot.paramMap.get('id'));
      // appeler this.ordersService.getItemById(id)
      this.item$ = this.ordersService.getItemById(id);
      // dans le subscribe vous initialisez item
      // ATTENTION de ne pas binder init trop tôt dans le html (réponse asynchrone)
      // si possible utilisez le pipe async dans le html sur item$
     }

  ngOnInit(): void {}

  public action(item: Order): void {
    this.ordersService.update(item).subscribe((res) => {
      this.router.navigate(['orders']);
    })
  }

}
