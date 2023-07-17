import { Component } from '@angular/core';
import { Producto } from '../producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  listaVisible = true;

  productos: Producto[] = [
    { nombre: 'Hamburguesa', costo: '$1000' },
    { nombre: 'Pizza', costo: '$2500' },
    { nombre: 'Lomo', costo: '$3000' },
    { nombre: 'Empanada', costo: '$300' },
  ];

  toggleLista() {
    this.listaVisible = !this.listaVisible;
  }
}
