import { Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const coreRoutes: Routes = [
    { 
        path: '', component: PageNotFoundComponent,
        pathMatch: 'full'
    },
    { 
        path: 'main', component: MainComponent,
        pathMatch: 'full'
    },
    { 
        path: '**', redirectTo: 'notes'
    }
];