import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingExampleComponent } from './component/data-binding-example/data-binding-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
