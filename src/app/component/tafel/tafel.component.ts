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

  getLehrer() {
    this.lehrerService.getAllLehrer().subscribe((resp: any)=> {
      this.lehrerList = resp;
      console.log(this.lehrerList);
      console.log(this.lehrerList[0]);
      console.log(this.lehrerList[0].getKuerzel);
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
function getLehrer() {
  throw new Error('Function not implemented.');
}

