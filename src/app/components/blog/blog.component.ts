import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  guardadoExitoso: boolean = false; 
  /*Array multidimensional de json, donde cada elemento del array sea una publicacion y lo iniciaremos 
  con nuestras dos noticias */

  arraPublicaciones: any[] = [
     
  ]

  newPublicacion: any = {
    'titulo': "", 
    'contenido': "",
    'fecha': "", 
    'img': ""
  }
   
  guardarDatos(){
   
     // Verificar si alguno de los campos está vacío
     if (!this.newPublicacion.titulo || !this.newPublicacion.contenido || !this.newPublicacion.fecha){
      alert('Por favor, completa todos los campos del formulario.');
      return; // Detener el proceso de guardar si hay campos vacíos
    }
    // Si todos los campos están completos, agregar la nueva publicación al arreglo
    this.arraPublicaciones.push(this.newPublicacion);
    alert('¡Tu noticia se ha guardado correctamente!');
    // Reiniciar el objeto newPublicacion para limpiar los campos del formulario
  
    this.newPublicacion = {
      'titulo': "", 
      'contenido': "",
      'fecha': "", 
      'img': ""
    }
  
  }
  
  cargarDatos() : string {
    let html: string = "";
    this.arraPublicaciones.forEach( (element: any) => {
      html += `
        <p>${element.titulo}</p>
        <p> ${element.contenido}</p>
        <p >${element.fecha}</p>
        <p>${element.img}</p> 
    </div>
      
      `
    })
    return html
  }


}
