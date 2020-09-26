import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { ClientVat } from '../../../../../shared/objects/client-vat';
import { Expense } from '../../../../../shared/objects/expense';
 
export interface VatState {
    vat: ClientVat;
    vatList: ClientVat[];
    expense: Expense,
    isEditMode: boolean;
    loaded: boolean
}

const initialState = {
    vat: new ClientVat(),
    vatList: [],
    expense: new Expense(),
    isEditMode: false,
    loaded: false
}
 
@Injectable()
export class VatStore extends ComponentStore<VatState> {
    constructor() {
        super(initialState);
    }
 
    /* Updates */
    updateVat(vat: ClientVat) {
        this.setState(state => { return {...state, vat: vat, loaded: true, isEditMode: true} });
    }

    updateExpense(expense: Expense) {
        this.setState(state => { return {...state, expense: expense, loaded: true, isEditMode: true}});
    }

    updateVatList(vatList: ClientVat[]) {
        this.setState(state => { return {...state, vatList: vatList, loaded: true} });
    }

    updateEditMode(editMode: boolean) {
        this.setState(state => { return {...state, isEditMode: editMode}});
    }

    updateLoaded(loaded: boolean) {
        this.setState(state => { return {...state, loaded: loaded} });
    }

    /* Getters */
    getVat(): Observable<ClientVat> {
        return this.select(state => state.vat);
    }

    getExpense(): Observable<Expense> {
        return this.select(state => state.expense);
    }

    getVatList(): Observable<ClientVat[]> {
        return this.select(state => state.vatList);
    }

    getLoaded(): Observable<boolean> {
        return this.select(state => state.loaded);
    }

    getEditMode(): Observable<boolean> {
        return this.select(state => state.isEditMode);
    }

    /* Values */
    getVatValue(): ClientVat {
        return this.get().vat;
    }

    getExpenseValue(): Expense {
        return this.get().expense;
    }
}