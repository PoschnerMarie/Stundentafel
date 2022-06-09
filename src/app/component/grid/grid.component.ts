import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Klasse } from 'src/app/Models/klasse';
import { Lehrer } from 'src/app/Models/lehrer';
import { KlasseService } from 'src/app/services/klasse.service';
import { LehrerService } from 'src/app/services/lehrer.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input()  doneArray_Index!: number | string;

  days: string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  lessons: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  todo: string[] = [];
  done!:Array<string>[];
  doneCell!:Array<string>[][];
  classes: string[] = [];
  klasse!: Klasse;
  
  constructor(public lehrerService: LehrerService, public klasseService: KlasseService, private router: Router) { }

  ngOnInit(): void {
    this.getKlassen();
    this.getLehrer();
  }

  generateDoneArray(){
    this.done = new Array(this.classes.length);
    for(let i = 0; i< this.classes.length; i++){
      this.done[i] = new Array(0);
    }
  }

  generateDoneCellArray(){
    let zeilen = this.days.length*this.lessons.length;
    let spalten = this.classes.length;
    this.doneCell = new Array();
    for(let i = 0; i< spalten; i++){
      this.doneCell[i] = [];
      for(let j = 0; j < zeilen; j++){
        this.doneCell[i][j] = new Array(0);
      }
    }
  }
  
  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event.container)
    if(event.container.element.nativeElement.id != "cdk-drop-list-0"){
      if(event.container.data.length != 0){
        event.container.data.pop();
      }
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        
      } else if(event.previousContainer.id =="cdk-drop-list-0"){
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      } else{
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  };
  
  getLehrer() {
    this.lehrerService.getAllLehrer().subscribe(document => {
      document.forEach(lehrer=>{
        this.todo.push(Lehrer.fromDoc(lehrer).kuerzel);
      })  
    })
  }

  getKlassen() {
    this.klasseService.getAllKlassen().subscribe(document=> {
      document.forEach(klasse =>{
        this.classes.push(Klasse.fromDoc(klasse).K_Bezeichnung);
      })
      this.generateDoneArray();
      this.generateDoneCellArray();
    })
  }

  setAllKlassenlehrer() {
    for(let i = 0; i< this.classes.length; i++){
      let klassenBezeichnung = this.classes[i];
      let tempKuerzel: string[] = this.done[i];
      let klassenKuerzel = tempKuerzel[0];
      this.klasse = new Klasse(klassenBezeichnung, klassenKuerzel);
      this.klasseService.updateKlassenlehrer(this.klasse)
    }
  }
}

