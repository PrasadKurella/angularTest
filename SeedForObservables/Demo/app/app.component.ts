/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ControlGroup,FormBuilder} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">

        <form [ngFormModel]="form">
            <input type="text" ngControl="search">
        </form>
    `
})
export class AppComponent {

    form : ControlGroup;
    constructor(private fb: FormBuilder){
        this.form = fb.group({
            search : []
        });

        var search = this.form.find('search');
        search
        .valueChanges
        .debounceTime(400)
        .map(str => (<string>str).replace(' ','-'))
        .subscribe(x=>console.log(search));

        var keyups = Observable.fromEvent($('#search'),"keyup")
                .map(e => e.target.value)
                .filter(value => value.length >=3)
                .debounceTime(400)
                .distinctUntilChanged()
                .flatMap(text => {
                    var url = "https://api.spotify.com/v1/search?type=artist&q="+text;
                    console.log(text);
                    var promise = $.getJSON(url);
                    return Observable.fromPromise(promise);
                });
        
        keyups.subscribe(val => console.log(val));

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
}