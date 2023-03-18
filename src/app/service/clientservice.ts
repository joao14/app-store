import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Client } from '../domain/client';


@Injectable({ providedIn: "root" })
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients = () => {
    return this.http.get<any>('https://localhost:7111/client')
      .toPromise()
      .then(data => data);
  }

  addClient = (client: Client) => {
    return this.http.post<any>('https://localhost:7111/client', client)
      .toPromise()
      .then(data => data);
  }

  deleteClient = (idClient: string, client: any) => {
    return this.http.delete<any>('https://localhost:7111/client/' + idClient, client)
      .toPromise()
      .then(data => data);
  }

}
