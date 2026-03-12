import { Component,Input } from '@angular/core';// Importa Component e Input 
// de Angular para crear un componente y recibir datos desde el componente padre
import { CommonModule } from '@angular/common';// Importa CommonModule
//  para usar directivas comunes en la plantilla HTML
import { ListaService } from './lista_serve';// Importa el servicio
//  ListaService para obtener los datos de la lista de compras
import{ RouterModule } from '@angular/router'; // Importa el 
// RouterModule para usar routerLink en la plantilla HTML

@Component({
  selector: 'app-tabla-compras',
imports:[CommonModule, RouterModule],
 standalone: true,
  templateUrl: './tabla-compras.html',
  styleUrl: './tabla-compras.css',
})
export class TablaCompras {

@Input() items: any[] = [];// Recibe la lista de compras desde
//  el componente padre a través de Input

constructor(private listaService: ListaService) { }// Inyecta el servicio 
// ListaService para acceder a los datos de la lista de compras
ngOnInit() {// Método que se ejecuta al inicializar el componente
    // Al cargar la página, le pedimos los datos al servicio
    // para asegurarnos de que tenemos la lista actualizada
    this.items = this.listaService.obtenerLista();
    console.log('Contenido de la lista en el hijo:', this.items);
    // Imprime la lista en la consola para verificar 
    // que se recibió correctamente
  }
  editarItem(indice:number){

  const item = this.items[indice];

  const nuevoProducto = prompt("Editar producto:", item.producto);
  const nuevaCantidad = prompt("Editar cantidad:", item.cantidad);

  if(nuevoProducto && nuevaCantidad){

    this.items[indice].producto = nuevoProducto;
    this.items[indice].cantidad = Number(nuevaCantidad);

  }

}
}
