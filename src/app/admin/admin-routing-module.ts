import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { ListAnimalComponent } from './components/animals/list/list.component';
import { CreateAnimalComponent } from './components/animals/create/create.component';
import { EditAnimalComponent } from './components/animals/edit/edit.component';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        children: [
            {
                path: 'lista-animales', component: ListAnimalComponent,
            },
            {
                path: 'nuevo-animal', component: CreateAnimalComponent,
            },
            {
                path: 'editar-animal', component: EditAnimalComponent,
            },
        ]
    }
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
