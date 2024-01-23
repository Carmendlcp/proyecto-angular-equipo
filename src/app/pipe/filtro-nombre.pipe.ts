import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroNombre',
  standalone: true
})
export class FiltroNombrePipe implements PipeTransform {

  transform(items: any[], filtro: string): any[] {
    if (!filtro || filtro.trim() === '') {
      return items;
    }

    return items.filter(item =>
      item.name.toLowerCase().includes(filtro.toLowerCase())
    );
  }

}
