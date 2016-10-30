import { Component }        from 'angular2/core';
import { Observable }       from 'rxjs/Observable';
import { WikipediaService } from './wikipedia.service';
import { JSONP_PROVIDERS, URLSearchParams } from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-wiki',
  templateUrl: 'app/wiki.component.html',
  providers: [ WikipediaService,JSONP_PROVIDERS ]
})
export class WikiComponent {
  title   = 'Wikipedia Demo';
  fetches = 'Fetches after each keystroke';
  items: Observable<string[]>;
  items2 : String[];
  search (term: string) {
    //this.items = this.wikipediaService.search(term);
    console.log(this.wikipediaService.search(term).subscribe(posts => 
        {
            this.items2 = posts;
            console.log(posts[0]);
        }
    ));

    console.log(this.items2);
  }
  constructor (private wikipediaService: WikipediaService) {}
}
