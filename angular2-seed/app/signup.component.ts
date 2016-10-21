import {Component} from 'angular2/core'
import {ControlGroup,Control,Validators,FormBuilder} from 'angular2/common'
import {UserNameValidator} from './userName.validators';

@Component({
    selector : 'signup-form',
    templateUrl : 'app/signup-form.component.html'
})
export class SignupComponent{

    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            userName : ['',Validators.compose([UserNameValidator.cannotContainSpace,Validators.required]),
                        UserNameValidator.shouldBeUnique],
            passWord : ['',Validators.required]
        });
    }
    // form = new ControlGroup({
    //     userName : new Control('',Validators.required ),
    //     passWord : new Control('',Validators.required)
    // });

    onSubmit(){
        
        this.form.find('userName').setErrors(
            { inValidUserName : true}
        );
        console.log('form submitted....');
        console.log(this.form.value);
    }
}