import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, from } from 'rxjs';

import * as fromRoot from '../../reducers/index';
import { Popup } from '../popup/popup';
import * as userApi from '../../actions/user-api';
import { PopupComponent } from '../popup/popup.component';

const TITLE_KEY = 'Title';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  private user$: Observable<{}> = this.store.select(fromRoot.getUserState);
  private user: {} = {};
  private popup: Popup = {
    open : false,
    copyState: false
  };
  private userSubscription: Subscription;

  constructor(public store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new userApi.RequestUser());
    this.userSubscription = this.user$.subscribe(user => this.user = user);
  }

  private openPopup(user: {}, event: Event) {
    this.popup.open = true;
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

