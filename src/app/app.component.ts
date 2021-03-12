import { Component, OnInit } from '@angular/core';
import { UporabnikService } from 'src/app/uporabnik.service';
import { Uporabnik } from 'src/app/uporabnik.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
	user: any;
	message: string;
	constructor(private uporabnikService: UporabnikService, private fireStore: AngularFirestore) { }
 
 //Napolnim podatke
  ngOnInit() {
    this.uporabnikService.getUporabnik().subscribe(data => {

      this.user = data.map(e => {
        return {
          id: e.payload.doc.id,
          ime: e.payload.doc.data()['ime'],
          priimek: e.payload.doc.data()['priimek'],
          tel: e.payload.doc.data()['tel'],
		  rDatum: e.payload.doc.data()['rDatum'],
		  naslov: e.payload.doc.data()['naslov'],
		  posta: e.payload.doc.data()['posta'],
		  email: e.payload.doc.data()['email']
        };
      })
      console.log(this.user);

    });
  }
  
  onEdit(user) {
    this.uporabnikService.obrazec = Object.assign({}, user);
  }
  
  onDelete(user) {
    this.fireStore.doc('Uporabniki/' + user.id).delete();
    this.message = 'Uporabnik ' + user.ime + ' je bil uspešno izbrisan!';
  }

}