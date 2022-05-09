import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// Modules
import { SharedModule } from "../shared/shared.module";
import { TemplatesModule } from "../templates/template.module";

// Components
import { MainComponent } from "./components/main/main.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@NgModule({
    declarations: [
        MainComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule,
        TemplatesModule
    ],
    providers: [],
    exports: [
        MainComponent
    ]
})
export class CoreModule {}