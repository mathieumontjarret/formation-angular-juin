import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})

export class PageListClientsComponent implements OnInit, OnDestroy {
  // exemple de behavior pour montrer comment unsubscribe()
  private test = new BehaviorSubject(0);
  // exemple unsubscribe()
  private sub!: Subscription;
  public myTitle = 'List Clients';
  // public collection!: Order[];
  public states = Object.values(StateClient);
  public collection$!: Subject<Client[]>;
  public headers = ['Action', 'Name', 'Total CAHT', 'TVA', 'State'];
  constructor(
    private clientsService: ClientsService,
    private router: Router
    ) {
    this.collection$ = this.clientsService.collection;
    this.clientsService.refreshCollection();
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    }

    ngOnInit(): void {
      //exemple de subscribe to behavior
      this.sub = this.test.subscribe((data) => console.log(data));
    }

    public changeTitle(): void{
      this.myTitle= "My List Clients"
    }

    public changeState(item: Client, event: any): void{
      // console.log(item);
      // console.log(event.target.value);
      const state = event.target.value;
      this.clientsService.changeState(item, state).subscribe((res) => {
        // gérer les codes erreur retournés pour l'API
        Object.assign(item, res);
      })
    }

    public goToEdit(item: Client): void {
      this.router.navigate(['clients', 'edit', item.id]);
    }

    public deleteItem(item: Client): void {
      this.clientsService.delete(item).subscribe();
    }

    ngOnDestroy(): void{
      this.sub.unsubscribe();
    }
}

