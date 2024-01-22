import { Component } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {
  id!:number;
  producto!:ApiInterface;
  constructor (
    private servicio:ApiService,
    private rutaActivada:ActivatedRoute
  ){}

  ngOnInit():void {
    this.rutaActivada.paramMap.subscribe(params => {
      this.id = Number(params.get("id"))
    })

    this.servicio.getProductosById(this.id).subscribe((data:any) => {
      console.log(data);
      this.producto = data

    })
  }
  actualizarProducto(){
    this.servicio.patchProductos(this.producto).subscribe();
    alert("película actualizada")
  }

  deleteProducto(){
    this.servicio.deleteProductos(this.producto).subscribe();
    alert("película eliminada")
  }

}
