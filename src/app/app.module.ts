import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DirectivesComponent } from './directives/directives.component';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/services/components/list-people/list-people.component';
import { ListApiComponent } from './shared/list-api/list-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ListPeopleComponent,
    ListApiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, 
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
