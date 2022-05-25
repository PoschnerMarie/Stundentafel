import { Component, OnInit } from '@angular/core';

export interface Stundentafel {
  montag: string;
  dienstag: string;
  mittwoch: string;
  donnerstag: string;
  freitag: string;
}

const ELEMENT_DATA: Stundentafel[] = [
  {montag: 'Montag', dienstag: 'Dienstag', mittwoch: 'Mittwoch', donnerstag: 'Donnerstag', freitag: 'freitag'}
];

@Component({
  selector: 'app-tafel',
  templateUrl: './tafel.component.html',
  styleUrls: ['./tafel.component.css']
  
})
export class TafelComponent implements OnInit {

  displayedColumns: string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag','Freitag'];
  dataSource = ELEMENT_DATA;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
