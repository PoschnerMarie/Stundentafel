import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Klasse } from 'src/app/Models/klasse';
import { Lehrer } from 'src/app/Models/lehrer';
import { LehrerService } from 'src/app/services/lehrer.service';
import { KlasseService } from 'src/app/services/klasse.service';

@Component({
  selector: 'app-tafel',
  templateUrl: './tafel.component.html',
  styleUrls: ['./tafel.component.css']
})
export class TafelComponent implements OnInit {

  lehrerList: Lehrer[] = [];
  kuerzelList: string[] = [];
  klassenList: Klasse[] = [];

  constructor(public lehrerService: LehrerService, public klasseService: KlasseService, private router: Router) { }

  ngOnInit(): void {
  }

  /*
  * Weil wir die Mthode welche ein Observable zurück gibt subscriben also dauerhaft festhalten, können wir warten
  * bis das Dokument bzw. der Beobachter uns alle vollständingen Daten (in dem Fall ein Array vom Typ Lehrer) 
  * gesendet hat. Danach füllen wir einfach unsere existierende Liste/unser array mit den Daten vom Beobachter.
  * Dabei wandeln wir die einzelnen Datensätze mit Hilfe der statischen Methode fromDoc in ein Lehrer Objekt um,
  * da unsere Liste/unser Array vom Typ Lehrer ist.
  */
  getLehrer() {
    this.lehrerService.getAllLehrer().subscribe(document => {
      document.forEach(lehrer=>{
        this.lehrerList.push(Lehrer.fromDoc(lehrer));
        this.kuerzelList.push(Lehrer.fromDoc(lehrer).kuerzel);
        console.log(this.kuerzelList)
      })
    })
  }

  getKlassen() {
    this.klasseService.getAllKlassen().subscribe((resp: any)=> {
      this.klassenList = resp;
      console.log(this.klassenList);
      console.log(this.klassenList[0]);
    })
  }

}

