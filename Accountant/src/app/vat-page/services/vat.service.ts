import { Injectable } from '@angular/core';
import { ClientVat } from '../../../../../shared/objects/client-vat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatService {

  baseUrl: string = "http://localhost:57308/api/Vats";

  constructor(private httpClient: HttpClient) { }

  getVat(vatId: number): Observable<ClientVat> {
    return this.httpClient.get<ClientVat>(`${this.baseUrl}/${vatId}`);
  }

  getVats(): Observable<ClientVat[]> {
    return this.httpClient.get<ClientVat[]>(`${this.baseUrl}`);
  }

  updateVat(vat: ClientVat): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${vat.VatId}`, vat);
  }

  createVat(vat: ClientVat): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, vat);
  }

  deleteVat(vatId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${vatId}`);
  }
}
