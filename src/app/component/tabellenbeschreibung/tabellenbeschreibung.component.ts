import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabellenbeschreibung',
  templateUrl: './tabellenbeschreibung.component.html',
  styleUrls: ['./tabellenbeschreibung.component.css']
})
export class TabellenbeschreibungComponent implements OnInit {

  blockNummer: number;

  constructor() {
    this.blockNummer = 1;
   }

  ngOnInit(): void {
  }

}
