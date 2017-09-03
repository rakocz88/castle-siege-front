import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginCompComponent} from './login-comp/login-comp.component';
import {InputComponent} from './util/input/input.component';
import {CardsListComponent} from './cards-list/cards-list.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import { ColoredDirective } from './somecomponent/colored.directive';
import { PlaygroundComponent } from './playground/playground.component';
import { ActionPanelComponent } from './action-panel/action-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    InputComponent,
    CardsListComponent,
    NotFoundPageComponent,
    ColoredDirective,
    PlaygroundComponent,
    ActionPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginCompComponent
      },
      {
        path: 'cardlist',
        component: CardsListComponent
      },
       {
        path: 'playground',
        component: PlaygroundComponent
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
