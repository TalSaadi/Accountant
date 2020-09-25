import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../../../../shared/objects/client';
import { ClientStore } from '../store/client-store.service';

@Component({
  selector: 'app-client-page-details',
  templateUrl: './client-page-details.component.html',
  styleUrls: ['./client-page-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageDetailsComponent implements OnInit {

  client$: Observable<Client>;

  constructor(private clientStore: ClientStore,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.client$ = this.clientStore.getClient();
  }

  onEditClick(): void {
    this.router.navigate(['./edit'], {relativeTo: this.activatedRoute});
  }
}
