import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Post} from './Post';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PostServiceService{

    private _URL = "http://jsonplaceholder.typicode.com/posts";
    constructor(private _http:Http){
        
    }

    getPosts() : Observable<Post>{
        return this._http.get(this._URL)
            .map(e => e.json());
    }

    getPostsPromise() : Promise<Post>{
        console.log("i am in getPostsPromise....");
        return this._http.get(this._URL)
            .map(e => e.json())
            .toPromise();
    }

    createPost(post: Post){
        return this._http.post(this._URL, JSON.stringify(post))
            .map(e => e.json());
    }
    
}