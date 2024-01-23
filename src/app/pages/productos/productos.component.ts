import { Component } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiService } from '../../services/api-service.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltroNombrePipe } from '../../pipe/filtro-nombre.pipe';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink, FormsModule, FiltroNombrePipe],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})

export class ProductosComponent {

  public productosList: ApiInterface[] = [];

  constructor(private servicio:ApiService) {}

ngOnInit():void{
  this.servicio.getProductos().subscribe((data:any)=>{
  this.productosList = data
  console.log(this.productosList);
  })
}
  public tituloABuscar: string = '';
}

