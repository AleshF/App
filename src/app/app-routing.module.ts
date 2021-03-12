import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { EditUsrComponent } from "./edit-usr/edit-usr.component";
import { AddUsrComponent } from "./add-usr/add-usr.component";

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'edit' , component: EditUsrComponent}, 
	{ path: 'add' , component: AddUsrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }