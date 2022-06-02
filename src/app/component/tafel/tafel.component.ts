import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lehrer } from 'src/app/Models/lehrer';
import { LehrerService } from 'src/app/services/lehrer.service';

@Component({
  selector: 'app-tafel',
  templateUrl: './tafel.component.html',
  styleUrls: ['./tafel.component.css']
})
export class TafelComponent implements OnInit {

  kuerzelList: Lehrer[] = [];

  constructor(public lehrer: LehrerService, private router: Router) { }

  ngOnInit(): void {
  }

  getLehrer() {
    this.lehrer.getAllLehrer().subscribe((resp: any)=> {
      this.kuerzelList = resp;
      console.log(this.kuerzelList);
    })
  }

}
