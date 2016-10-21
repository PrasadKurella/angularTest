import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector : '[autogrow]',
    host: {
        '(focus)' : 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective{
    constructor(private el:ElementRef,private render:Renderer){

    }
    onFocus(){
        this.render.setElementStyle(this.el.nativeElement,'width','80%');
    }

    onBlur(){
        this.render.setElementStyle(this.el.nativeElement,'width','40%');
    }
}