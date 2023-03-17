import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


@Injectable({providedIn: "root"})
export class ClientService {

    constructor(private http: HttpClient) { }

    getAllUsers = () => {
        return this.http.get<any>('https://localhost:7111/client/list')
            .toPromise()
            .then(data => data);
    }

}
