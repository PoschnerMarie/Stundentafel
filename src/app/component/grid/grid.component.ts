import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  @Input()  doneArray_Index!: number | string;

  days: string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  classes = [ {id:1, name:'FS191' },{id:2, name:'FS192'},{id:3, name:'FI191'},{id:4, name:'FI192'},{id:5, name:'FS181'}, {id:6, name:'FS181'},{id:7, name:'FI181'}];
  lessons: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  todo = [
    'BOE',
    'MIP',
    'MAP'
  ];
  sumTeacher!: number;
  done = new Array(this.classes.length);
  constructor() { }

  ngOnInit(): void {
    this.generateDoneArray();
    this.sumTeacher = this.todo.length;
  }

  generateDoneArray(){
    for(let i = 0; i< this.classes.length; i++){
      this.done[i] = new Array(0);
    }
  }
  
   onDrop(event: CdkDragDrop<string[]>) {
     //SOLL DAFÜR SEIN; DASS BEI KUERZEL LISTE NICHTS EINGEFPGT WRDEN KANN
      if(event.container.element.nativeElement.id == "cdk-drop-list-0"){
        
      }


      if(event.container.data.length != 0){
        event.container.data.pop();
        console.log("delete")
        console.log(event.container.element.nativeElement.id)
      }
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        
      } else if(event.previousContainer.id =="cdk-drop-list-0"){
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
          console.log(event.container)
      } else{
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
  };
  
  }

