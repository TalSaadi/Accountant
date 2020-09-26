import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { VatActions } from '../store/vat-actions.service';

@Injectable({ providedIn: 'root' })
export class VatCreateEditResolver implements Resolve<any> {
  constructor(private vatActions: VatActions) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const clientId: number = +route.paramMap.get('id');
    
    if (clientId) {
        return this.vatActions.loadVat(clientId);
    }
    this.vatActions.updateEditMode(false);
  }
}