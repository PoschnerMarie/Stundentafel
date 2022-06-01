import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {

  kuerzelList = [
    'BOE',
    'MIP',
    'MAP'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.kuerzelList, event.previousIndex, event.currentIndex);
  }

}
