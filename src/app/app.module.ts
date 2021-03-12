import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { EditUsrComponent } from './edit-usr/edit-usr.component';
import { AddUsrComponent } from './add-usr/add-usr.component';

@NgModule({
  declarations: [
    AppComponent,
    EditUsrComponent,
    AddUsrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ButtonModule,
	InputTextModule,
	FormsModule,
	AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
	AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
