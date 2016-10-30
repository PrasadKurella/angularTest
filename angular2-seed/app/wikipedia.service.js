System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var WikipediaService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            let WikipediaService = class WikipediaService {
                constructor(jsonp) {
                    this.jsonp = jsonp;
                }
                search(term) {
                    var _URL = "http://localhost:8080/10mvc-tests-start/getUsers.json";
                    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
                    let params = new http_1.URLSearchParams();
                    params.set('search', term); // the user's search value
                    params.set('action', 'opensearch');
                    params.set('format', 'json');
                    params.set('callback', 'JSONP_CALLBACK');
                    // TODO: Add error handling
                    console.log("i am at line 16");
                    console.log(this.jsonp.get(_URL)
                        .map(resp => resp.json()[1]));
                    return this.jsonp
                        .get(wikiUrl, { search: params })
                        .map(response => response.json()[1]);
                }
                // it is not working need to check...
                getUserData() {
                    var _URL = "http://localhost:8080/10mvc-tests-start/getUsers.json";
                    var headers = new http_1.Headers({});
                    var options = new http_1.RequestOptions({ headers: headers });
                    let params = new http_1.URLSearchParams();
                    console.log("i am at line 29");
                    return this.jsonp.get(_URL)
                        .map(resp => resp.json())
                        .toPromise();
                }
            };
            WikipediaService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Jsonp])
            ], WikipediaService);
            exports_1("WikipediaService", WikipediaService);
        }
    }
});
//# sourceMappingURL=wikipedia.service.js.map