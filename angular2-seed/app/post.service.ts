import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostServiceService{

    private _URL = "http://jsonplaceholder.typicode.com/posts";
    constructor(private _http:Http){
        
    }

    getPosts(){
        return this._http.get(this._URL)
            .map(e => e.json());
    }

    createPost(post){
        return this._http.post(this._URL, JSON.stringify(post))
            .map(e => e.json());
    }
    
}
