import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SitioInteresComponent } from './sitio-interes/sitio-interes.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MenuComponent } from './menu/menu.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Negocio1Component } from './negocio1/negocio1.component';
import { Negocio2Component } from './negocio2/negocio2.component';
import { Negocio3Component } from './negocio3/negocio3.component';
import { Negocio4Component } from './negocio4/negocio4.component';
import { Negocio5Component } from './negocio5/negocio5.component';
import { AcercaComponent } from './acerca/acerca.component';

const rutas:Routes=[
  {path:'home', component:HomeComponent},
  {path:'sitio', component:SitioInteresComponent},
  {path:'catalogo', component:CatalogoComponent},
  {path:'negocio1', component:Negocio1Component},
  {path:'negocio2', component:Negocio2Component},
  {path:'negocio3', component:Negocio3Component},
  {path:'negocio4', component:Negocio4Component},
  {path:'negocio5', component:Negocio5Component},
  {path:'acerca', component:AcercaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SitioInteresComponent,
    HomeComponent,
    CatalogoComponent,
    MenuComponent,
    EncabezadoComponent,
    Negocio1Component,
    Negocio2Component,
    Negocio3Component,
    Negocio4Component,
    Negocio5Component,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
