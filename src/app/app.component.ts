import { Component } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , '../assets/nicepage.css']
})
export class AppComponent {
  title = 'DPE';
   
  constructor(public nicepage:CargarScriptsService, jquery:CargarScriptsService, timer:CargarScriptsService ){
    jquery.carga(['jquery']) , timer.carga(['timer']), nicepage.carga(['nicepage']);}
  }
