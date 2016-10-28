import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {PostServiceService} from './post.service'
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/http';

@Component({
    selector: 'authors',
    template: `
            <div *ngIf="isLoading">Loading data...</div>
        `,
        // <h2>Authors</h2>
        // <h3> {{ title }} </h3>
        // <ui>
        //     <li *ngFor="#author of authors">
        //         {{ author }}
        //     </li>
        // </ui> 
    providers: [AuthorService,PostServiceService, HTTP_PROVIDERS],
    directives: [AutoGrowDirective]
})

export class AuthorsComponent{
    title: string = 'List of Authors';
    authors;
    isLoading = true;

    constructor(authorSer: AuthorService, private _postService: PostServiceService){

        this.authors = authorSer.getAuthors();
        this.authors.push('Venkata Kurella');
    }

    ngOnInit(){
        console.log(41);
        //this._postService.getPosts().subscribe()      for Observable
        //this._postService.getPosts().then()           for Promise
        console.log(this._postService.getPostsPromise().then(posts => 
            {
                 this.isLoading=false;
                console.log(posts);
            }
        ));
        this._postService.createPost({userId:1, title: "a", body: "body"});
    }
}