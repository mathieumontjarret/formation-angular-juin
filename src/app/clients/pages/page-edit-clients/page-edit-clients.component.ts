import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-clients',
  templateUrl: './page-edit-clients.component.html',
  styleUrls: ['./page-edit-clients.component.scss']
})
export class PageEditClientsComponent implements OnInit {
  public item$!: Observable<Client>;
  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      // récupérer id dans l'url (ActivatedRoute)
      const id = Number(this.route.snapshot.paramMap.get('id'));
      // appeler this.ordersService.getItemById(id)
      this.item$ = this.clientsService.getItemById(id);
      // dans le subscribe vous initialisez item
      // ATTENTION de ne pas binder init trop tôt dans le html (réponse asynchrone)
      // si possible utilisez le pipe async dans le html sur item$
     }

  ngOnInit(): void {}

  public action(item: Client): void {
    this.clientsService.update(item).subscribe((res) => {
      this.router.navigate(['clients']);
    })
  }

}
