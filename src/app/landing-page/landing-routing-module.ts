import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LayoutComponent } from './components/_landing/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnimalsComponent } from './components/animals/animals.component';

const landingRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent, // es el layout todos sus hijos adoptan su comportamiento visual
        children: [
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'animales', component: AnimalsComponent},
            {path: 'contactos', component: ContactsComponent},
            {path: 'cuidadores', component: KeepersComponent},
            {path: 'tienda', component: StoreComponent},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(landingRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LandingRoutingModule { }
