import { Component, OnInit } from '@angular/core';

export interface Stundentafel {
  montag: string;
  dienstag: string;
  mittwoch: string;
  donnerstag: string;
  freitag: string;
  abc: string;
}

const ELEMENT_DATA: Stundentafel[] = [
  {montag: 'Montag', dienstag: 'Dienstag', mittwoch: 'Mittwoch', donnerstag: 'Donnerstag', freitag: 'freitag', abc: 'abc'},
  {montag: 'Montag1', dienstag: 'Dienstag2', mittwoch: 'Mittwoch3', donnerstag: 'Donnerstag4', freitag: 'freitag50',abc: 'abc'},
];

@Component({
  selector: 'app-tafel',
  templateUrl: './tafel.component.html',
  styleUrls: ['./tafel.component.css']
  
})
export class TafelComponent implements OnInit {

  displayedColumns: string[] = ['montag', 'dienstag', 'mittwoch', 'donnerstag','freitag','abc'];
  dataSource = ELEMENT_DATA;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
