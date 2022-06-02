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

  kuerzelList: Lehrer[] = [];
  klassenList: Klasse[] = [];

  constructor(public lehrer: LehrerService, public klasse: KlasseService, private router: Router) { }

  ngOnInit(): void {
  }

  getLehrer() {
    this.lehrer.getAllLehrer().subscribe((resp: any)=> {
      this.kuerzelList = resp;
      console.log(this.kuerzelList);
      console.log(this.kuerzelList[0]);
      //console.log(this.kuerzelList[0].kuerzel);
    })
  }

  getKlassen() {
    this.klasse.getAllKlassen().subscribe((resp: any)=> {
      this.klassenList = resp;
      console.log(this.klassenList);
      console.log(this.klassenList[0]);
    })
  }

}
