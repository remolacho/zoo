import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { StoreComponent } from './components/store/store.component';

const appRoutes: Routes = [
    {path: '', component: StoreComponent},
    {path: '', redirectTo: 'Tienda' ,pathMatch: 'full'},
    {path: 'tienda', component: StoreComponent},
    {path: '**', component: StoreComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);