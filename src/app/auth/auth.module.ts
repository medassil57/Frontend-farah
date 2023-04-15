import { NgModule } from "@angular/core";
import { HomeComponent } from "../home/HomeComponent";
import { CommonModule } from "@angular/common";
import { authenticationRoutingModule } from "./auth.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports: [
        CommonModule,
        authenticationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        //HomeComponent,
    ],
    //declarations: [HomeComponent]
})
export class AuthModule { }