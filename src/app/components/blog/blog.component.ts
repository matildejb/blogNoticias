import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  /*Array multidimensional de json, donde cada elemento del array sea una publicacion y lo iniciaremos 
  con nuestras dos noticias */

arraPublicaciones: any [] = [
 /* {'titulo': 'Noticia', 'contenido': 'Contenido Noticia','fecha': '01.02.22', 'img': 'imagen'}*/
]

newPublicacion: any = {
  'titulo': "", 
  'contenido': "",
  'fecha': "", 
  'img': ""
}

guardarDatos(){
  this.arraPublicaciones.push(this.newPublicacion);
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
    html += ` <p>${element.titulo}</p>  <p>${element.contenido}</p>  
    <p>${element.fecha}</p> <p>${element.img}</p>  `
  })
  return html
}

}
