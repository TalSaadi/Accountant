import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ClientActions } from '../store/client-actions.service';


@Injectable({ providedIn: 'root' })
export class ClientCreateEditResolver implements Resolve<any> {
  constructor(private clientActions: ClientActions) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const clientName: string = route.paramMap.get('name');
    
    if (clientName) {
        return this.clientActions.loadClient(clientName);
    }
    this.clientActions.updateEditMode(false);
  }
}