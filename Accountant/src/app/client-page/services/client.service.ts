import { Injectable } from '@angular/core';
import { Client } from '../../../../../shared/objects/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: string = "http://localhost:57308/api/Clients";

  constructor(private httpClient: HttpClient) { }

  getClient(clientName: string): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl}/${clientName}`);
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseUrl}`);
  }

  updateClient(client: Client): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${client.Name}`, client);
  }

  createClient(client: Client): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, client);
  }

  deleteClient(clientName: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${clientName}`);
  }
}
