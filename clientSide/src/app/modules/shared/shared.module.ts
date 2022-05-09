import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

// Component
import { HeaderComponent } from "./components/header/header.component";

// Material Modules
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        HeaderComponent
    ]
})

export class SharedModule { }