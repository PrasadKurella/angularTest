import {Component} from 'angular2/core'
import {FormBuilder, Form, Validators,ControlGroup} from 'angular2/common'
import {PassWordValidators} from './password.validators'

@Component({
    selector : 'changePwd',
    templateUrl : 'app/changePwd.component.html'

})
export class ChangePwdComponent{ 

    form: ControlGroup;
    
    constructor(fb:FormBuilder){
        this.form = fb.group({
            currentPassword : ['',Validators.compose([PassWordValidators.shouldBeUnique])],
            newPassword : ['',Validators.compose([PassWordValidators.shouldBeUnique,PassWordValidators.comparePasswords])],
            confirmPassword : ['',Validators.compose([PassWordValidators.shouldBeUnique,PassWordValidators.comparePasswords])
                ]
        }, { validator: PassWordValidators.comparePasswords });
    }

    changePwdSubmit(){
        console.log('form submitted....');

        if(this.form.find('newPassword').value != this.form.find('confirmPassword').value){
            console.log('both passwords are not same...');
            console.log(this.form.find('newPassword').value);
            console.log(this.form.find('confirmPassword').value);

            // this.form.find('newPassword').setErrors(
            //     { passwordDoesNotMatch : true}
            // );
        }
        console.log(this.form.find('newPassword').value);
        console.log(this.form.find('confirmPassword').value);
    }
}