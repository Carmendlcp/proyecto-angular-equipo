import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
    path:"gestion",
    component:GestionComponent
  },{
    path:"productos",
    component:ProductosComponent
  },{
    path:"productos/:id",
    component:DetalleComponent
  },
  {
    path:"informacion",
    component:ContactPageComponent
  }
  ];

