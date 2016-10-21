System.register(['angular2/core', './authors.service', './auto-grow.directive', './post.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, authors_service_1, auto_grow_directive_1, post_service_1, http_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_service_1_1) {
                authors_service_1 = authors_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let AuthorsComponent = class AuthorsComponent {
                constructor(authorSer, postService) {
                    this.title = 'List of Authors';
                    this.authors = authorSer.getAuthors();
                    this.authors.push('Venkata Kurella');
                    console.log(postService.getPosts().subscribe(val => console.log(val)));
                    postService.createPost({});
                }
            };
            AuthorsComponent = __decorate([
                core_1.Component({
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
                    providers: [authors_service_1.AuthorService, post_service_1.PostServiceService, http_1.HTTP_PROVIDERS],
                    directives: [auto_grow_directive_1.AutoGrowDirective]
                }), 
                __metadata('design:paramtypes', [authors_service_1.AuthorService, post_service_1.PostServiceService])
            ], AuthorsComponent);
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.Component.js.map