import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ClientActions } from '../store/client-actions.service';


@Injectable({ providedIn: 'root' })
export class ClientCreateEditResolver implements Resolve<any> {
  constructor(private clientActions: ClientActions) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const clientId: number = +route.paramMap.get('id');
    
    if (clientId) {
        return this.clientActions.loadClient(clientId);
    }
    this.clientActions.updateEditMode(false);
  }
}