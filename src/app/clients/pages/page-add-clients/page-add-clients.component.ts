import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrls: ['./page-add-clients.component.scss']
})
export class PageAddClientsComponent implements OnInit {
  public item = new Client();
  constructor(
    private clientsService: ClientsService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  public action(item: Client): void{
    this.clientsService.add(item).subscribe((res) =>{
      this.router.navigate(["clients"])
    })
  }

}
