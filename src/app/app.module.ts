import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {ToToModule} from './ToDo/to-to.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    ToToModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
