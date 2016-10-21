import {Component} from 'angular2/core'
import {Input} from 'angular2/core'

@Component({
    selector : 'zippy',
    template : `
        <div class="panel panel-default">
            <div class="panel-heading">
                <ng-content select=".heading"></ng-content>
                {{ title }}
                <i class="glyphicon pull-right" 
                    [ngClass] = "{
                        'glyphicon-chevron-up' : isVisible,
                        'glyphicon-chevron-down' : !isVisible
                    }"
                    (click)="toggle()" ></i>
                    
            </div>
            <div class="panel-body" *ngIf="isVisible">
                <ng-content select=".body"></ng-content>
            </div>
        </div>
    `,
    styles : [
        `
            .panel {
                width : 50%;
                align : center;
             }
        `
    ]
})
export class ZippyComponent{
    isVisible = false;
    @Input() title;

    toggle = function(){
        console.log("....event fired....");
        this.isVisible = !this.isVisible;
    }
}