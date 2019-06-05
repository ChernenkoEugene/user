import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/user/user.component';
import { reducers, metaReducers } from './reducers';
import { UserApiEffects } from './effects/user-api-effects';
import { environment } from '../environments/environment';

import { AppEffects } from './app.effects';
import { UserApiService } from './shared/services/user-api.service';
import { PopupComponent } from './components/popup/popup.component';
import { OutsideDirective } from './shared/directives/outside.directive';
import { CopyClipboardDirective } from './shared/directives/copy-clipboard.directive';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PopupComponent,
    OutsideDirective,
    CopyClipboardDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserApiEffects, AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
