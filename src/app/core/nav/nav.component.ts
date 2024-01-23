import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent{}

// export class NavComponent implements OnInit {
  // public productosList: ApiInterface[] = [];
  // public tituloABuscar: string = '';

  // constructor(private servicio: ApiService) {}

  // ngOnInit(): void {
  //   this.servicio.getProductos().subscribe((data: any) => {
  //     this.productosList = data;
  //     console.log(this.productosList);
  //   });
  // }

  // filtrarPeliculas() {
  //   this.productosList = this.productosList.filter((producto) =>
  //     producto.name.toLowerCase().includes(this.tituloABuscar.toLowerCase())
  //   );
  // }

  // trackByIndex(index: number, item: any): number {
  //   return index;
  // }
// }
