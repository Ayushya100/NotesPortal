import { Routes } from "@angular/router";
import { NotesListComponent } from "./components/notes-list/notes-list.component";

export const tmRoutes: Routes = [
    {
        path: 'notes', component: NotesListComponent,
        pathMatch: 'full'
    }
];