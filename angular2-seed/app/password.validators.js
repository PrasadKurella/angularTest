System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PassWordValidators;
    return {
        setters:[],
        execute: function() {
            class PassWordValidators {
                static shouldBeUnique(control) {
                    if (control.value == "1234") {
                        return { shouldBeUnique: true };
                    }
                    else {
                        return null;
                    }
                }
                static comparePasswords(group) {
                    console.log("i am at 17 line...");
                    var returnVal = null;
                    var newPwdCtrl = group.find('newPassword');
                    var confirmPwdCtrl = group.find('confirmPassword');
                    if (newPwdCtrl != null && confirmPwdCtrl != null) {
                        if (newPwdCtrl.value == null || confirmPwdCtrl.value == null) {
                            returnVal = null;
                        }
                        if (newPwdCtrl.value != confirmPwdCtrl.value) {
                            console.log("both passwords are not same..");
                            returnVal = { comparePasswords: true };
                        }
                        else {
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
            exports_1("PassWordValidators", PassWordValidators);
        }
    }
});
//# sourceMappingURL=password.validators.js.map