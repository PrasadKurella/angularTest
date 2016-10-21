import {Component, Input, Output, EventEmitter, ElementRef, Renderer} from 'angular2/core';

@Component({
    selector : 'likeButton',
    template : `
        <i class="glyphicon" [class.glyphicon-heart]="isLikeClicked"
            [class.glyphicon-heart-empty]="!isLikeClicked"
            (click)="onClick($event)" (mouseenter)="onMouseOver($event)"></i>  <span>{{ likeCount }}</span>
    `,
    inputs: ['isLikeClicked:isLikeClicked','likeCount:likeCount'],
    styles : [`
        .glyphicon-heart {
            color : pink
        }
    `]
})
export class LikeComponent{
    isLikeClicked = false;

    constructor(private el:ElementRef, private render:Renderer){
    }

    @Output() change2 = new EventEmitter();
    onMouseOver = function($event){
        console.log("mouse event fired....");
        this.render.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
    }

    @Output() change = new EventEmitter();
    onClick = function($event){
        this.isLikeClicked = !this.isLikeClicked;
        if(this.isLikeClicked){
            this.likeCount = this.likeCount + 1;
            //this.render.setElementStyle(this.el.nativeElement,'color','pink');
        } else {
            this.likeCount = this.likeCount - 1;
            //this.render.setElementStyle(this.el.nativeElement,'color','#ccc');
        }
        this.change.emit({isLikeClicked:this.isLikeClicked});
        console.log("like button clicked...");
    }
}