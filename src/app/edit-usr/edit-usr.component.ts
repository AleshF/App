import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UporabnikService } from 'src/app/uporabnik.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-usr',
  templateUrl: './edit-usr.component.html',
  styleUrls: ['./edit-usr.component.css']
})
export class EditUsrComponent implements OnInit {

  constructor(public uporabnikService: UporabnikService, private fireStore: AngularFirestore) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
	// Making the copy of the form and assigning it to the Data.
    let Data = Object.assign({}, form.value);
	// Does the update operation for the selected user.
    // The 'Data' object has updated details of the user.
    this.fireStore.doc('Uporabniki/' + form.value.id).update(Data);
  }
}
