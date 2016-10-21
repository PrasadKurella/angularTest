System.register(['angular2/core', './courses.Component', './authors.Component', './favorite.component', './like.component', './vote.component', './tweet.component', './zippy.component', './auto-grow.directive', './contact-form.component', './contactExcer.componet', './signup.component', './changePwd.component'], function(exports_1, context_1) {
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
    var core_1, courses_Component_1, authors_Component_1, favorite_component_1, like_component_1, vote_component_1, tweet_component_1, zippy_component_1, auto_grow_directive_1, contact_form_component_1, contactExcer_componet_1, signup_component_1, changePwd_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_Component_1_1) {
                courses_Component_1 = courses_Component_1_1;
            },
            function (authors_Component_1_1) {
                authors_Component_1 = authors_Component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (contactExcer_componet_1_1) {
                contactExcer_componet_1 = contactExcer_componet_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (changePwd_component_1_1) {
                changePwd_component_1 = changePwd_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
        <div class="mainContentsDiv">
        This is new app...
            <changePwd></changePwd>
        </div>
    `,
                    // <contactFormExcer></contactFormExcer>
                    // <signup-form></signup-form>
                    styles: [`
                .mainContentsDiv{
                margin:2%
            }`],
                    directives: [courses_Component_1.CoursesComponent, authors_Component_1.AuthorsComponent, auto_grow_directive_1.AutoGrowDirective, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent,
                        tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent, contactExcer_componet_1.ContactExcerComponent, signup_component_1.SignupComponent, changePwd_component_1.ChangePwdComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            ;
        }
    }
});
//# sourceMappingURL=app.component.js.map