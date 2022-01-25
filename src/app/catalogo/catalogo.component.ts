import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {  
  public deducibles:Array<any> = []
 
  constructor() { }

  ngOnInit(): void {
    
    this.deducibles =[
      {
        title:'Frutería',
        Image:'./assets/img/fruteria2.jpeg',
        ruta: '/negocio1',
        boton: 'Más Información'
      },
      {
        title:'MEGASYS CORP.',
        Image:'./assets/img/tecnologia.jpeg',
        ruta: '/negocio2',
        boton: 'Más Información'
      },
      {
        title:'PANIFICADORA: LA RONDA',
        Image:'./assets/img/panaderia.jpeg',
        ruta: '/negocio3',
        boton: 'Más Información'
      },
      {
        title:'Tienda de viveres',
        Image:'./assets/img/viveres1.jpeg',
        ruta: '/negocio4',
        boton: 'Más Información'
      },
      {
        title:'EL PALACIO DE LAS EMPANADAS',
        Image:'./assets/img/bolones2.jpeg',
        ruta: '/negocio5',
        boton: 'Más Información'
      }
    ]
    
  }

}
