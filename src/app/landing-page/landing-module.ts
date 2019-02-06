import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LandingRoutingModule } from './landing-routing-module';

// Components
import { LandingComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnimalsComponent } from './components/animals/animals.component';

@NgModule({
    declarations: [
        LandingComponent,
        HeaderComponent,
        HomeComponent,
        StoreComponent,
        KeepersComponent,
        ContactsComponent,
        AnimalsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        LandingRoutingModule,
    ],
    exports: [],
    providers: []
})

export class LandingModule {}

