System.register(['angular2/core', 'angular2/common', './password.validators'], function(exports_1, context_1) {
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
    var core_1, common_1, password_validators_1;
    var ChangePwdComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (password_validators_1_1) {
                password_validators_1 = password_validators_1_1;
            }],
        execute: function() {
            let ChangePwdComponent = class ChangePwdComponent {
                constructor(fb) {
                    this.form = fb.group({
                        currentPassword: ['', common_1.Validators.compose([password_validators_1.PassWordValidators.shouldBeUnique])],
                        newPassword: ['', common_1.Validators.compose([password_validators_1.PassWordValidators.shouldBeUnique, password_validators_1.PassWordValidators.comparePasswords])],
                        confirmPassword: ['', common_1.Validators.compose([password_validators_1.PassWordValidators.shouldBeUnique, password_validators_1.PassWordValidators.comparePasswords])
                        ]
                    }, { validator: password_validators_1.PassWordValidators.comparePasswords });
                }
                changePwdSubmit() {
                    console.log('form submitted....');
                    if (this.form.find('newPassword').value != this.form.find('confirmPassword').value) {
                        console.log('both passwords are not same...');
                        console.log(this.form.find('newPassword').value);
                        console.log(this.form.find('confirmPassword').value);
                    }
                    console.log(this.form.find('newPassword').value);
                    console.log(this.form.find('confirmPassword').value);
                }
            };
            ChangePwdComponent = __decorate([
                core_1.Component({
                    selector: 'changePwd',
                    templateUrl: 'app/changePwd.component.html'
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder])
            ], ChangePwdComponent);
            exports_1("ChangePwdComponent", ChangePwdComponent);
        }
    }
});
//# sourceMappingURL=changePwd.component.js.map