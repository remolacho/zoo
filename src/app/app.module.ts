import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
// import { ParksComponent } from './components/parks/parks.component';
import { ShowComponent } from './components/parks/show/show.component';
import { CreateComponent } from './components/parks/create/create.component';
import { DestroyComponent } from './components/parks/destroy/destroy.component';
import { ListComponent } from './components/parks/list/list.component';
import { FooterComponent } from './components/footer/footer.component';

import { LandingModule } from './landing-page/landing-module';
import { AdminModule } from './admin/admin-module';

@NgModule({
  declarations: [
    AppComponent,
    // ParksComponent,
    ShowComponent,
    CreateComponent,
    DestroyComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    LandingModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
