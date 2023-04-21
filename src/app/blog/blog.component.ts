import { Component } from '@angular/core';
import { BlogArticle } from '../model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogArticles: BlogArticle[] = [{
    title: "Hello World!",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda commodi praesentium nisi minus quibusdam perspiciatis molestias nam enim cumque? Sequi facere sed nihil nesciunt repellendus veritatis, dolorum eligendi vel consectetur voluptatibus nulla! Voluptates, aut in rem voluptas sint eaque recusandae totam ut ducimus, ea, dicta est deleniti quaerat enim expedita.",
    fullContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda commodi praesentium nisi minus quibusdam perspiciatis molestias nam enim cumque? Sequi facere sed nihil nesciunt repellendus veritatis, dolorum eligendi vel consectetur voluptatibus nulla! Voluptates, aut in rem voluptas sint eaque recusandae totam ut ducimus, ea, dicta est deleniti quaerat enim expedita."
  }, {
    title: "Sanicball Custom",
    description: "Un mod de un juego hecho en Unity.",
    fullContent: ""
  }];
}
