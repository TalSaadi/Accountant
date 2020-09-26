import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientActions } from '../store/client-actions.service';


@Injectable({ providedIn: 'root' })
export class ClientResolver implements Resolve<any> {
  constructor(private clientActions: ClientActions) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const clientId: number = +route.paramMap.get('id');
    
    if (clientId)
      return this.clientActions.loadClient(clientId);

    return this.clientActions.loadClients();
  }
}