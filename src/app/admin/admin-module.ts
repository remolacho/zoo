import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing-module';

// Components
import { LayoutAdminComponent } from './components/_landing/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListAnimalComponent } from './components/animals/list/list.component';
import { CreateAnimalComponent } from './components/animals/create/create.component';
import { EditAnimalComponent } from './components/animals/edit/edit.component';

@NgModule({
    declarations: [
        LayoutAdminComponent,
        DashboardComponent,
        ListAnimalComponent,
        CreateAnimalComponent,
        EditAnimalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        AdminRoutingModule,
    ],
    exports: [],
    providers: []
})

export class AdminModule {}

