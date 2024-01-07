import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../assets/nicepage.css']
})
export class HomeComponent {
  links = [
    {
      name: "Recepción",
      url: "material-de-quirofano-recepcion"
    },
    {
      name: "Lavado",
      url: "lavado"
    },
    {
      name: "Empaque",
      url: "material-de-quirofano-y-ceye"
    },
    {
      name: "Esterilización",
      url: "esterilizacion"
    },
    {
      name: "Almacenamiento",
      url: "almacen-general"
    },
    {
      name: "Distribución",
      url: "material-de-quirofano-distribucion"
    },

   


    

    
  ]
}
