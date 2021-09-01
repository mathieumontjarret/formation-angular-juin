import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  // exemple de behavior pour montrer comment unsubscribe()
  private test = new BehaviorSubject(0);
  // exemple unsubscribe()
  private sub!: Subscription;
  public myTitle = 'List Orders';
  // public collection!: Order[];
  public states = Object.values(StateOrder);
  public collection$!: Observable<Order[]>;
  public headers = ['Action', 'Type', 'Client', 'NbJours', 'TjmHT', 'Total HT', 'Total TTC', 'State'];
  constructor(
    private ordersService: OrdersService,
    private router: Router
    ) {
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnInit(): void {
    //exemple de subscribe to behavior
    this.sub = this.test.subscribe((data) => console.log(data));
  }

  public changeTitle(): void{
    this.myTitle= "My List Orders"
  }

  public changeState(item: Order, event: any): void{
    // console.log(item);
    // console.log(event.target.value);
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((res) => {
      // gérer les codes erreur retournés pour l'API
      Object.assign(item, res);
    })
  }

  public goToEdit(item: Order): void {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  // public total (val: number, coef: number, tva?: number): number{
  //   console.log('total called');
  //   if(tva){
  //     return val * coef *(1 + tva /100);
  //   }
  //   return val * coef;
  // }

  //A cette étape décommenter le console.log('total called') du ts et regarder dans la console

}
