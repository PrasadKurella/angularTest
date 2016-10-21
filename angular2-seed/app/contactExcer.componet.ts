import {Component} from 'angular2/core'
@Component({
    selector : 'contactFormExcer',
    templateUrl : 'app/contact-form-exer.component.html'
})
export class ContactExcerComponent{
    onSubmit(f){
        console.log("noSubmit clicked...");
        console.log(f);
    }
    log(f){
        console.log(f);
    }
}