import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { ParksComponent } from './components/parks/parks.component';
import { ShowComponent } from './components/parks/show/show.component';
import { CreateComponent } from './components/parks/create/create.component';
import { DestroyComponent } from './components/parks/destroy/destroy.component';
import { ListComponent } from './components/parks/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ParksComponent,
    ShowComponent,
    CreateComponent,
    DestroyComponent,
    ListComponent,
    HomeComponent,
    KeepersComponent,
    ContactsComponent,
    AnimalsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
