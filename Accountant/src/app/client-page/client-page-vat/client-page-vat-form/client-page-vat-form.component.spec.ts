import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPageVatFormComponent } from './client-page-vat-form.component';

describe('ClientPageVatFormComponent', () => {
  let component: ClientPageVatFormComponent;
  let fixture: ComponentFixture<ClientPageVatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPageVatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPageVatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
