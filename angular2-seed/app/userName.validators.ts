import {Control} from 'angular2/common'

export class UserNameValidator{
    static shouldBeUnique(control: Control){

        return new Promise((resolve, reject) => {
            setTimeout(function(){
                console.log(control);
                if(control.value=="mosh"){
                    resolve({shouldBeUnique : true});
                } else {
                    resolve(null);
                }
            },1000);
        });
    }
    static cannotContainSpace(control: Control){
        if(control.value.indexOf(" ") >=0){
            return {cannotContainSpace : true};
        }
        return null;
    }


}