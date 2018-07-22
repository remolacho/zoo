import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './components/store/store.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnimalsComponent } from './components/animals/animals.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home' , pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'animales', component: AnimalsComponent},
    {path: 'contactos', component: ContactsComponent},
    {path: 'cuidadores', component: KeepersComponent},
    {path: 'tienda', component: StoreComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
