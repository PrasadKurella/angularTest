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
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let LikeComponent = class LikeComponent {
                constructor(el, render) {
                    this.el = el;
                    this.render = render;
                    this.isLikeClicked = false;
                    this.change2 = new core_1.EventEmitter();
                    this.onMouseOver = function ($event) {
                        console.log("mouse event fired....");
                        this.render.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
                    };
                    this.change = new core_1.EventEmitter();
                    this.onClick = function ($event) {
                        this.isLikeClicked = !this.isLikeClicked;
                        if (this.isLikeClicked) {
                            this.likeCount = this.likeCount + 1;
                        }
                        else {
                            this.likeCount = this.likeCount - 1;
                        }
                        this.change.emit({ isLikeClicked: this.isLikeClicked });
                        console.log("like button clicked...");
                    };
                }
            };
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], LikeComponent.prototype, "change2", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], LikeComponent.prototype, "change", void 0);
            LikeComponent = __decorate([
                core_1.Component({
                    selector: 'likeButton',
                    template: `
        <i class="glyphicon" [class.glyphicon-heart]="isLikeClicked"
            [class.glyphicon-heart-empty]="!isLikeClicked"
            (click)="onClick($event)" (mouseenter)="onMouseOver($event)"></i>  <span>{{ likeCount }}</span>
    `,
                    inputs: ['isLikeClicked:isLikeClicked', 'likeCount:likeCount'],
                    styles: [`
        .glyphicon-heart {
            color : pink
        }
    `]
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
            ], LikeComponent);
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map