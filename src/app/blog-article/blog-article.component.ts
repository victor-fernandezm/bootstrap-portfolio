import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BlogArticle } from '../model/blog';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent {
  @Input() article: BlogArticle = {title:"",description:"",fullContent:""};

  @ViewChild('description') description?: ElementRef;

  ngAfterViewInit(): void {
    let el: HTMLElement = this.description?.nativeElement;
    if(el.offsetHeight <= 50) return;

    while(el.offsetHeight > 50) {
      el.innerText = el.innerText.slice(0, -1);
    }
    el.innerText = el.innerText.slice(0, -2) + "\u2026";
  }
}
