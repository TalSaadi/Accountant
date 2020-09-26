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

  getClient(clientId: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl}/${clientId}`);
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseUrl}`);
  }

  updateClient(client: Client): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${client.ClientId}`, client);
  }

  createClient(client: Client): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, client);
  }

  deleteClient(clientId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${clientId}`);
  }
}
