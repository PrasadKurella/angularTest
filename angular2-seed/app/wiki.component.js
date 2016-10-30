System.register(['angular2/core', './wikipedia.service', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, wikipedia_service_1, http_1;
    var WikiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            let WikiComponent = class WikiComponent {
                constructor(wikipediaService) {
                    this.wikipediaService = wikipediaService;
                    this.title = 'Wikipedia Demo';
                    this.fetches = 'Fetches after each keystroke';
                }
                search(term) {
                    //this.items = this.wikipediaService.search(term);
                    console.log(this.wikipediaService.search(term).subscribe(posts => {
                        this.items2 = posts;
                        console.log(posts[0]);
                    }));
                    console.log(this.items2);
                }
            };
            WikiComponent = __decorate([
                core_1.Component({
                    selector: 'my-wiki',
                    templateUrl: 'app/wiki.component.html',
                    providers: [wikipedia_service_1.WikipediaService, http_1.JSONP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
            ], WikiComponent);
            exports_1("WikiComponent", WikiComponent);
        }
    }
});
//# sourceMappingURL=wiki.component.js.map