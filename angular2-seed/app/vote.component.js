System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let VoteComponent = class VoteComponent {
                constructor(el, render) {
                    this.el = el;
                    this.render = render;
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.change = new core_1.EventEmitter();
                    this.upVote = function ($event) {
                        if (this.myVote == 1) {
                            return;
                        }
                        this.voteCount = this.voteCount + 1;
                        this.myVote = this.myVote + 1;
                        //this.render.setElementStyle(this.el.nativeElement,'color','orange');
                        this.change.emit({ myVote: this.myVote });
                    };
                    this.downVote = function () {
                        if (this.myVote == -1) {
                            return;
                        }
                        this.voteCount = this.voteCount - 1;
                        this.myVote = this.myVote - 1;
                    };
                }
            };
            __decorate([
                core_1.Input('voteCount'), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "voteCount", void 0);
            __decorate([
                core_1.Input('myVote'), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "myVote", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "change", void 0);
            VoteComponent = __decorate([
                core_1.Component({
                    selector: 'VoteComponent',
                    template: `   
            <div class="voter">
            <i class="glyphicon glyphicon-menu-up vote-button" [class.isVotedStyle]="myVote == 1"
                (click)="upVote($event)" ></i>
             <span>   {{ voteCount }}   </span>
            <i class="glyphicon glyphicon-menu-down vote-button" [class.isVotedStyle]="myVote == -1"
                (click)="downVote()"></i>
            </div>
        `,
                    styles: [`
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
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
            ], VoteComponent);
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map