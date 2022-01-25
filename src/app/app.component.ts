import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'examenSalgadoJuan';
  public cards:Array<any> = []

  ngOnInit(): void {
    this.cards = [
      {
        title:'Panaderia',
        subtitle: 'Nombre del negocio 1'
      },
      {
        title:'Tienda de empanadas',
        subtitle: 'Nombre del negocio 2'
      },
      {
        title:'Fruteria ',
        subtitle: 'Nombre del negocio 3'
      },
    ]
  }
}
