import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { ClientVat } from '../../../../../shared/objects/client-vat';
import { VatService } from '../services/vat.service';
import {VatStore} from './vat-store.service';
import { ToastrService } from 'ngx-toastr';
import { Expense } from '../../../../../shared/objects/expense';


@Injectable()
export class VatActions {
    constructor(private vatService: VatService,
                private vatStore: VatStore,
                private router: Router,
                private toastrService: ToastrService) {}

    loadVat(vatId: number): void {
        this.vatStore.updateLoaded(false);
        this.vatService.getVat(vatId)
        .subscribe((vat: ClientVat) => {
            this.vatStore.updateVat(vat);
        }), error => this.router.navigate([`vats`]);
    }

    loadExpense(expenseId: number): void {
        this.vatStore.updateLoaded(false);
        this.vatService.getExpense(expenseId)
        .subscribe((expense: Expense) => {
            this.vatStore.updateExpense(expense);
        }), error => this.router.navigate([`vats`]);
    } 

    loadVats(): void {
        this.vatStore.updateLoaded(false);
        this.vatService.getVats()
        .subscribe((vats: ClientVat[]) => {
            this.vatStore.updateVatList(vats);
        }), error => this.router.navigate([`vats`]);
    }

    createVat(vat: ClientVat): void {
        this.vatStore.updateLoaded(true);
        this.vatService.createVat(vat)
        .subscribe(() => {
            this.vatStore.updateVat(vat);
            this.toastrService.success(`Vat created successfully`);
            this.router.navigate([`vats/${vat.VatId}`]);
        }), error => {
            this.toastrService.error(`Failed to create vat: ${error}`);
            this.router.navigate([`vats`]);
        }
    }

    updateVat(vat: ClientVat): void {
        this.vatStore.updateLoaded(true);
        this.vatService.updateVat(vat)
        .subscribe(() => {
            this.vatStore.updateVat(vat);
            this.toastrService.success(`Vat updated successfully`);
            this.router.navigate([`vats/${vat.VatId}`]);
        }), error => {
            this.toastrService.error(`Failed to update vat: ${error}`);
            this.router.navigate([`vats`]);
        }
    }

    deleteVat(vatId: number): void {
        this.vatStore.updateLoaded(true);
        this.vatService.deleteVat(vatId)
        .subscribe(() => {
            this.vatStore.updateVat(null);
            this.toastrService.success(`Vat deleted successfully`);
            this.router.navigate([`vats`]);
        }), error => {
            this.toastrService.error(`Failed to delete vat: ${error}`);
            this.router.navigate([`vats`]);
        }
    }

    createExpense(expense: Expense): void {
        this.vatStore.updateLoaded(true);
        this.vatService.createExpense(expense)
        .subscribe(() => {
            this.vatStore.updateExpense(expense);
            this.toastrService.success(`Expense created successfully`);
            this.router.navigate([`vats/${expense.ExpenseId}`]);
        }), error => {
            this.toastrService.error(`Failed to create expense: ${error}`);
            this.router.navigate([`vats`]);
        }
    }

    updateExpense(expense: Expense): void {
        this.vatStore.updateLoaded(true);
        this.vatService.updateExpense(expense)
        .subscribe(() => {
            this.vatStore.updateExpense(expense);
            this.toastrService.success(`Expense updated successfully`);
            this.router.navigate([`vats/${expense.ExpenseId}`]);
        }), error => {
            this.toastrService.error(`Failed to update expense: ${error}`);
            this.router.navigate([`vats`]);
        }
    }

    deleteExpense(expenseId: number): void {
        this.vatStore.updateLoaded(true);
        this.vatService.deleteExpense(expenseId)
        .subscribe(() => {
            this.vatStore.updateExpense(null);
            this.toastrService.success(`Expense deleted successfully`);
            this.router.navigate([`vats`]);
        }), error => {
            this.toastrService.error(`Failed to delete expense: ${error}`);
            this.router.navigate([`vats`]);
        }
    }

    updateEditMode(editMode: boolean): void {
        this.vatStore.updateEditMode(editMode);
    }
}