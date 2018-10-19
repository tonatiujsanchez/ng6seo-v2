import { Component } from '@angular/core';
import { Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor( private meta: Meta){
        meta.addTag({name:'keywords', content:'ng6seo - Version 2 metadatos'});
        meta.addTag({name:'description', content:'Esta es una version de prueba para los metadatos con Angular 6'});
        meta.addTag({name:'image', content:'https://c8.alamy.com/comp/F5HYRW/programing-coding-script-technology-website-program-concept-F5HYRW.jpg'});
    }
}
