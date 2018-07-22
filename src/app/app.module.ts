import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//Components
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { ParksComponent } from './components/parks/parks.component';
import { ShowComponent } from './components/parks/show/show.component';
import { CreateComponent } from './components/parks/create/create.component';
import { DestroyComponent } from './components/parks/destroy/destroy.component';
import { ListComponent } from './components/parks/list/list.component';
import { HomeComponent } from './compoments/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ParksComponent,
    ShowComponent,
    CreateComponent,
    DestroyComponent,
    ListComponent,
    HomeComponent
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
