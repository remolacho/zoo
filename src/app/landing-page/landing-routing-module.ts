import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LandingComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnimalsComponent } from './components/animals/animals.component';

const landingRoutes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'animales', component: AnimalsComponent},
            {path: 'contactos', component: ContactsComponent},
            {path: 'cuidadores', component: KeepersComponent},
            {path: 'tienda', component: StoreComponent},
        ]
    },
    // { path: '', redirectTo: 'home' , pathMatch: 'full' },
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
