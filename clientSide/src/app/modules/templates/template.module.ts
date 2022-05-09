import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

// Modules
import { SharedModule } from "../shared/shared.module";

// Components
import { NotesListComponent } from "./components/notes-list/notes-list.component";

@NgModule({
    declarations: [
        NotesListComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        NotesListComponent
    ],
    providers: []
})

export class TemplatesModule { }