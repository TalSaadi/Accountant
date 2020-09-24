import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPageDetailsComponent } from './client-page-details.component';

describe('ClientPageDetailsComponent', () => {
  let component: ClientPageDetailsComponent;
  let fixture: ComponentFixture<ClientPageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
