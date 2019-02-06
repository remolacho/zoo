import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LandingRoutingModule } from './landing-routing-module';

// Components
import { LayoutComponent } from './components/_landing/layout/layout.component';
import { HeaderComponent } from './components/_landing/header/header.component';
import { FooterComponent } from './components/_landing/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnimalsComponent } from './components/animals/animals.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        HomeComponent,
        StoreComponent,
        KeepersComponent,
        ContactsComponent,
        AnimalsComponent,
        FooterComponent
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

