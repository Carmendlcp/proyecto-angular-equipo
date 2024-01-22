import { Component } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiService } from '../../services/api-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink],
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
}
