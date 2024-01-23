import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl: string = 'http://localhost:3000';
  public productosUrl: string = `${this.baseUrl}/productos`;

  constructor(private http: HttpClient) {}

  public getProductos() {
    return this.http.get(this.productosUrl);
  }

  public getProductosById(id:string){
    return this.http.get(`${this.productosUrl}/${id}`);
  }

  public getProductosByPage(page:number){
    return this.http.get(`${this.productosUrl}/${page}`);
  }

  public postProductos(producto:any){
    return this.http.post(this.productosUrl, producto)
  }

  public patchProductos(producto:any){
    return this.http.patch(`${this.productosUrl}/${producto.id}`, producto);
  }

  public deleteProductos(id: string){
    return this.http.delete(`${this.productosUrl}/${id}`)
  }
}
