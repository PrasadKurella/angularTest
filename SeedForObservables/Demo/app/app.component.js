/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, Rx_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.fb = fb;
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    search
                        .valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (x) { return console.log(search); });
                    var keyups = Rx_1.Observable.fromEvent($('#search'), "keyup")
                        .map(function (e) { return e.target.value; })
                        .filter(function (value) { return value.length >= 3; })
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .flatMap(function (text) {
                        var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
                        console.log(text);
                        var promise = $.getJSON(url);
                        return Rx_1.Observable.fromPromise(promise);
                    });
                    keyups.subscribe(function (val) { return console.log(val); });
                    // var debounced = _.debounce(function(text){
                    //     var url = "https://api.spotify.com/v1/search?type=artist&q="+text;
                    //     if(text.length > 3){
                    //         return;
                    //     }
                    //     $.getJSON(url,function(artists){console.log(artists);});
                    // },400);
                    // $('#search').keyup(function(e){
                    //     var text = e.target.value;
                    //     debounced(text);
                    // });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <input id=\"search\" type=\"text\" class=\"form-control\">\n\n        <form [ngFormModel]=\"form\">\n            <input type=\"text\" ngControl=\"search\">\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map