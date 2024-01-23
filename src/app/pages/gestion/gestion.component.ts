import { Component } from '@angular/core';
// import { ApiService } from '../../services/api-service.service';
// import { ApiInterface } from '../../interfaces/api-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.scss'
})
export class GestionComponent {

// constructor (private servicio:ApiService) {}
// public producto: ApiInterface = {
//   id: 0,
//   name: "",
//   description: "",
//   stars: 0,
//   image: "",
// };

// addProducto(){
// this.servicio.postProductos(this.producto).subscribe();
// alert("película creada")
// }
 }
