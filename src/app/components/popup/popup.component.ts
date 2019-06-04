import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as userApi from '../../actions/user-api';
import * as fromRoot from '../../reducers/index';
import { Popup } from './popup';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input()
  user: {};

  @Input()
  popup: Popup;

  constructor(public store: Store<fromRoot.State>) {}

  ngOnInit() {
  }

  private cancel() {
    this.popup.open = false;
  }

}
