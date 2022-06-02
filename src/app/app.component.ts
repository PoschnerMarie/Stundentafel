import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LehrerService } from './services/lehrer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stundentafel';
}
