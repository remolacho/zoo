import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LayoutAdminComponent } from './components/_landing/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnimalComponent } from './components/animals/animal.component';
import { ListAnimalComponent } from './components/animals/list/list.component';
import { CreateAnimalComponent } from './components/animals/create/create.component';
import { EditAnimalComponent } from './components/animals/edit/edit.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: LayoutAdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent},
            {
              path: 'animales',
              component: AnimalComponent,
              children: [
                { path: '', redirectTo: 'lista', pathMatch: 'full' },
                { path: 'lista', component: ListAnimalComponent },
                { path: 'crear', component: CreateAnimalComponent },
                { path: 'editar', component: EditAnimalComponent },
              ]
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule { }
