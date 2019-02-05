import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing-module';

// Components
import { MainComponent } from './components/main/main.component';
import { ListAnimalComponent } from './components/animals/list/list-component';
import { CreateAnimalComponent } from './components/animals/create/create-component';
import { EditAnimalComponent } from './components/animals/edit/edit-component';

@NgModule({
    declarations: [
        MainComponent,
        ListAnimalComponent,
        CreateAnimalComponent,
        EditAnimalComponent,
    ],
    imports: [
        NgModule,
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

