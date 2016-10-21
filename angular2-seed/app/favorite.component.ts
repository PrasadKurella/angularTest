import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector : 'favorite',
    templateUrl : 'app/favorite.template.html',

    styles : [
        `
            .glyphicon-star {
                color : orange;
            }
        `
    ]

    //, inputs: ['isFavorite:is-Favorite']
    }
)
export class FavoriteComponent{
    @Input('is-Favorite') isFavorite;
    //isFavorite;

    @Output() change = new EventEmitter();
    onClick($event){
        this.isFavorite = !this.isFavorite;
        this.change.emit({isFavorite:this.isFavorite});
    }
} 