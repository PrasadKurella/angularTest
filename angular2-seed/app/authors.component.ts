import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {PostServiceService} from './post.service'
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        <h3> {{ title }} </h3>
        <ui>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ui> 
        `,
    providers: [AuthorService,PostServiceService, HTTP_PROVIDERS],
    directives: [AutoGrowDirective]
})

export class AuthorsComponent{
    title: string = 'List of Authors';
    authors;

    constructor(authorSer: AuthorService, postService: PostServiceService){
        this.authors = authorSer.getAuthors();
        this.authors.push('Venkata Kurella');

        console.log(postService.getPosts().subscribe(val => console.log(val)));

        postService.createPost({});
    }
}