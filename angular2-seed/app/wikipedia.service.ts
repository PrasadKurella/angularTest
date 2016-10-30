import { Injectable } from 'angular2/core';
import { Jsonp,JSONP_PROVIDERS, URLSearchParams, HTTP_PROVIDERS,Headers,RequestOptions } from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}
  search (term: string) {
    var _URL = "http://localhost:8080/10mvc-tests-start/getUsers.json";
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling

    console.log("i am at line 16");

    console.log(this.jsonp.get(_URL)
            .map(resp => <string[]> resp.json()[1]));

    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(response => <string[]> response.json()[1]);
  }

  // it is not working need to check...
  getUserData () {
    var _URL = "http://localhost:8080/10mvc-tests-start/getUsers.json";

    var	headers	=	new	Headers({});
    var	options	=	new	RequestOptions({	headers:	headers	});	

    let params = new URLSearchParams();
    console.log("i am at line 29");

    return this.jsonp.get(_URL)
            .map(resp => resp.json())
            .toPromise();
  }

}
