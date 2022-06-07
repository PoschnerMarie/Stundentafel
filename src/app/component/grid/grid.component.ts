import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  days: string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  classes = [ {id:1, name:'FS191' },{id:2, name:'FS192'},{id:3, name:'FI191'},{id:4, name:'FI192'},{id:5, name:'FS181'}, {id:6, name:'FS181'},{id:7, name:'FI181'}];
  lessons: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  todo = [
    'BOE',
    'MIP',
    'MAP'
  ];
  done = new Array(this.classes.length);
  constructor() { }

  ngOnInit(): void {
    this.generateDoneArray();
  }

  generateDoneArray(){
    const doneElement = [""];
    for(let i = 0; i< this.classes.length; i++){
      this.done[i] = [""];
    }
  }
  
   onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data);
      
    } else if(event.previousContainer.id =="cdk-drop-list-0"){
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        console.log(this.done)  
    } else{
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        console.log(this.done)
    }
  };

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
  }

