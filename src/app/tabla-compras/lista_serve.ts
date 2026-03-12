import { Injectable } from '@angular/core';
// Este servicio actúa como un "servidor" 
// para almacenar y compartir 
// la lista de compras entre componentes
@Injectable({ providedIn: 'root' }) // Esto hace que el servicio esté 
// disponible en toda la aplicación
export class ListaService { // Aquí puedes agregar métodos para 
// manejar la lista de compras
  private datos: any[] = []; // Aquí almacenamos la lista de compras

  // Método para obtener la lista de compras actual
  actualizarLista(nuevaLista: any[]) { 
  // Este método se llama desde el componente
  //  padre para actualizar la lista
    this.datos = nuevaLista; // Guardamos la nueva lista en el servicio
    // Actualizamos la lista con los nuevos datos
  }
// Método para obtener la lista de compras actual
  obtenerLista() {
    return this.datos; // Devolvemos la lista actual almacenada en el servicio
  }
}