import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Post} from './Post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostServiceService{

    // private _URL = "http://jsonplaceholder.typicode.com/posts";
    private _URL = "http://localhost:8080/10mvc-tests-start/getUsers.json"
    constructor(private _http:Http){
        
    }

    getPosts() : Observable<Post>{
        let headers = new Headers({ "access-control-request-metod":"POST"});
        var options = new RequestOptions({
            headers : headers
        });

        return this._http.get(this._URL, headers)
            .map(e => e.json());
    }

  private getHeaders(){
    let headers = new Headers({ "access-control-request-metod":"GET"});
    var options = new RequestOptions({
        headers : headers
    });
    headers.append('Accept', 'application/json');
    return headers;
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