import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-lehrer-list',
  templateUrl: './lehrer-list.component.html',
  styleUrls: ['./lehrer-list.component.css']
})
export class LehrerListComponent implements OnInit {

  Lehrer:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetAllLehrer().subscribe(res => {
      console.log(res)
      this.Lehrer =res;
    });    
  }

}
