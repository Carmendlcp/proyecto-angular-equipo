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

  constructor (private servicio:ApiService) {}
public producto: any = {
  name: "",
  description: "",
  stars: "",
  image: "",
};

addProducto(){
this.servicio.postProductos(this.producto).subscribe();
alert("película creada")
}


  public productosList: ApiInterface[] = [];

  public page: number = 1; //Número de página en la que estamos. Será 1 la primera vez que se carga el componente

  public totalPages!: number; //Número total de páginas

  public numPeliculas!: number; //Total de peliculas existentes

  private numResults: number = 11;


ngOnInit():void{
  this.servicio.getProductos().subscribe((data:any)=>{
  this.productosList = data
  console.log(this.productosList);
  })

  this.servicio.getProductosByPage(this.page);
}

goToPage(page: number){

  this.page = page;

  this.servicio.getProductosByPage(page);

}
  public tituloABuscar: string = '';
}

