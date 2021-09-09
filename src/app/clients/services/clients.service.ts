import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { StateClient } from 'src/app/core/enums/state-client';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  // private collection
  private collection$: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(
    []
    );
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient ) {
    // this.collection = this.http.get<Order[]>(this.urlApi + '/orders');
    this.refreshCollection()
   }

  //refresh collection
  public refreshCollection(): void {
    this.http.get<Client[]>(`${this.urlApi}/clients`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    ).subscribe((data) => {
      this.collection$.next(data);
    })
  }

  // get collection
  public get collection(): Subject<Client[]>{
    return this.collection$
  }

  public changeState(item: Client, state: StateClient): Observable<any> {
    const obj = new Client({...item});
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Client): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/clients/${item.id}`, item).pipe(
      tap((data) => {
        // On gère les codes erreur de l'api ici


        // si ok :
        this.refreshCollection();
      })
    );
  }
  // add item in collection

  public add(item: Client): Observable<any> {
    return this.http.post<any>(`${this.urlApi}/clients`, item).pipe(
      tap((data) => {
        // On gère les codes erreur de l'api ici


        // si ok :
        this.refreshCollection();
      })
    );
  }

  // delete item in collection
  public delete(item: Client): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/clients/${item.id}`).pipe(
      tap((data) => {
        // On gère les codes erreur de l'api ici


        // si ok :
        this.refreshCollection();
      })
    );
  }

  // get item by id in collection
  public getItemById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/clients/${id}`);
  }
}
