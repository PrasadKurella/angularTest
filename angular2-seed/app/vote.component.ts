import {Component, Input, Output, Renderer, ElementRef, EventEmitter} from 'angular2/core'

@Component({
    selector : 'VoteComponent',
    template : 
        `   
            <div class="voter">
            <i class="glyphicon glyphicon-menu-up vote-button" [class.isVotedStyle]="myVote == 1"
                (click)="upVote($event)" ></i>
             <span>   {{ voteCount }}   </span>
            <i class="glyphicon glyphicon-menu-down vote-button" [class.isVotedStyle]="myVote == -1"
                (click)="downVote()"></i>
            </div>
        `,
         styles : [`
            .voter{
                width : 20px;
                text-align : center;
                color: black
            }
            .vote-button{
                cursor : pointer
            }

            .isVotedStyle {
                color : orange
            }
            .isVotedStyle-empty {
                color : black
            }
        `]
})
export class VoteComponent{
    @Input('voteCount') voteCount = 0;
    @Input('myVote') myVote = 0;

    constructor(private el:ElementRef, private render:Renderer){}

    @Output() change = new EventEmitter();
    upVote = function($event){
        if(this.myVote == 1){
            return ;
        }

        this.voteCount = this.voteCount + 1;
        this.myVote = this.myVote + 1;
        //this.render.setElementStyle(this.el.nativeElement,'color','orange');
        this.change.emit({myVote:this.myVote});
    }
    downVote = function(){
        if(this.myVote == -1){
            return ;
        }

        this.voteCount = this.voteCount - 1;
        this.myVote = this.myVote - 1;
    }
}