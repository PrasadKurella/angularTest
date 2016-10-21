import {Control,ControlGroup} from 'angular2/common'

export class PassWordValidators{
    newPassword : string;
    confirmPassword : string;

    static shouldBeUnique(control : Control){
    
        if(control.value == "1234"){
            return { shouldBeUnique : true }
        } else {
            return null;
        }
    }

    static comparePasswords(group : ControlGroup){
        console.log("i am at 17 line...")
        
        var returnVal = null
        var newPwdCtrl = group.find('newPassword');
        var confirmPwdCtrl = group.find('confirmPassword');

        if(newPwdCtrl != null && confirmPwdCtrl != null){
            if(newPwdCtrl.value == null || confirmPwdCtrl.value == null){
                returnVal = null;
            }
            if(newPwdCtrl.value!=confirmPwdCtrl.value){
                console.log("both passwords are not same..");
                returnVal = {comparePasswords : true};
            }else {
                console.log("both passwords same..");
            }
        }

        console.log(returnVal);
        return returnVal;

        // return new Promise((resolve, reject) => {
        //     setTimeout(function(){
        //         var newPwdCtrl = group.find('newPassword');
        //         var confirmPwdCtrl = group.find('confirmPassword');
        //         if(newPwdCtrl != null && confirmPwdCtrl != null 
        //             && newPwdCtrl.value!=confirmPwdCtrl.value){
        //             console.log("both passwords are not same..");
        //             resolve({comparePasswords : true});
        //         } else {
        //             console.log("both passwords same..");
        //              resolve(null);
        //         }
        //     },10);
        // });
    }

}