import {Component} from 'angular2/core';


@Component({
    selector : 'contact-form',
    templateUrl : 'app/contact-form.component.html'
})
export class ContactFormComponent{

    log(x){
        console.log(x);
    }

    onSubmit(form){
        console.log(form);
    }
}