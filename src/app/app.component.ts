import { Component } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , '../assets/nicepage.css']
})
export class AppComponent {
  title = 'DPE';
   
  constructor(public nicepage:CargarScriptsService, jquery:CargarScriptsService,intlTelInput:CargarScriptsService, utils:CargarScriptsService ){
    jquery.carga(['jquery']) , nicepage.carga(['nicepage']);}
  }
