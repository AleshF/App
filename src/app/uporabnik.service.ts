import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Uporabnik } from 'src/app/uporabnik.model';

@Injectable({
  providedIn: 'root'
})
export class UporabnikService {

  constructor(private firestore: AngularFirestore) { }
  
	// Hrani podatke iz obrazca
	obrazec: Uporabnik;

	//Pridobi podatke vseh uporabnikov
	getUporabnik() {
    return this.firestore.collection('Uporabniki').snapshotChanges();
	}
	
}
