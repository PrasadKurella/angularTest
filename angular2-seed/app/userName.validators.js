System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserNameValidator;
    return {
        setters:[],
        execute: function() {
            class UserNameValidator {
                static shouldBeUnique(control) {
                    return new Promise((resolve, reject) => {
                        setTimeout(function () {
                            console.log(control);
                            if (control.value == "mosh") {
                                resolve({ shouldBeUnique: true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 1000);
                    });
                }
                static cannotContainSpace(control) {
                    if (control.value.indexOf(" ") >= 0) {
                        return { cannotContainSpace: true };
                    }
                    return null;
                }
            }
            exports_1("UserNameValidator", UserNameValidator);
        }
    }
});
//# sourceMappingURL=userName.validators.js.map