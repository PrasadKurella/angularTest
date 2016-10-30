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
    var PostServiceService;
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
            let PostServiceService = class PostServiceService {
                constructor(_http) {
                    this._http = _http;
                    // private _URL = "http://jsonplaceholder.typicode.com/posts";
                    this._URL = "http://localhost:8080/10mvc-tests-start/getUsers.json";
                }
                getPosts() {
                    let headers = new http_1.Headers({ "access-control-request-metod": "POST" });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this._http.get(this._URL, headers)
                        .map(e => e.json());
                }
                getHeaders() {
                    let headers = new http_1.Headers({ "access-control-request-metod": "GET" });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    headers.append('Accept', 'application/json');
                    return headers;
                }
                getPostsPromise() {
                    console.log("i am in getPostsPromise....");
                    return this._http.get(this._URL)
                        .map(e => e.json())
                        .toPromise();
                }
                createPost(post) {
                    return this._http.post(this._URL, JSON.stringify(post))
                        .map(e => e.json());
                }
            };
            PostServiceService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], PostServiceService);
            exports_1("PostServiceService", PostServiceService);
        }
    }
});
//# sourceMappingURL=post.service.js.map