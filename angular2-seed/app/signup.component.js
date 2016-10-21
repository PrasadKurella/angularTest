System.register(['angular2/core', 'angular2/common', './userName.validators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, userName_validators_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (userName_validators_1_1) {
                userName_validators_1 = userName_validators_1_1;
            }],
        execute: function() {
            let SignupComponent = class SignupComponent {
                constructor(fb) {
                    this.form = fb.group({
                        userName: ['', common_1.Validators.compose([userName_validators_1.UserNameValidator.cannotContainSpace, common_1.Validators.required]),
                            userName_validators_1.UserNameValidator.shouldBeUnique],
                        passWord: ['', common_1.Validators.required]
                    });
                }
                // form = new ControlGroup({
                //     userName : new Control('',Validators.required ),
                //     passWord : new Control('',Validators.required)
                // });
                onSubmit() {
                    this.form.find('userName').setErrors({ inValidUserName: true });
                    console.log('form submitted....');
                    console.log(this.form.value);
                }
            };
            SignupComponent = __decorate([
                core_1.Component({
                    selector: 'signup-form',
                    templateUrl: 'app/signup-form.component.html'
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder])
            ], SignupComponent);
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map