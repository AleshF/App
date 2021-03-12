import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UporabnikService } from 'src/app/uporabnik.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-usr',
  templateUrl: './add-usr.component.html',
  styleUrls: ['./add-usr.component.css']
})
export class AddUsrComponent implements OnInit {

  message: string;
  constructor(public uporabnikService: UporabnikService, private fireStore: AngularFirestore) { }

  ngOnInit(): void {
	  this.resetForm();
  }
  
	resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.uporabnikService.obrazec = {
      id: null,
      ime: '',
      priimek: '',
      tel: null,
      rDatum: '',
	  naslov: '',
	  posta: null,
	  email: '',
    }
  }

	onSubmit(form: NgForm) {
	// Making the copy of the form and assigning it to the Data.
    let Data = Object.assign({}, form.value);
	// Does the update operation for the selected user.
    // The 'Data' object has updated details of the user.
	if (Data.ime != '' && Data.priimek != '' )
		{
		this.fireStore.collection('Uporabniki').add(Data);
		// Počisti formo
		this.resetForm(form);
		this.message = 'Uporabnik ' +Data.ime + ' je bil uspešno kreiran!';
		}
	else {
		this.message = 'Manjkajo obvezni podatki (ime, priimek)!';
	}
  }
  
}
