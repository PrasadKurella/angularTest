System.register(['angular2/core', './courses.Component', './authors.Component', './favorite.component', './like.component', './vote.component', './tweet.component', './summary.pipe', './zippy.component', './auto-grow.directive', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, courses_Component_1, authors_Component_1, favorite_component_1, like_component_1, vote_component_1, tweet_component_1, summary_pipe_1, zippy_component_1, auto_grow_directive_1, http_1;
    var AppComponent2;
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
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let AppComponent2 = class AppComponent2 {
                constructor() {
                    this.post2 = {
                        title: 'this is prasad',
                        body: 'This is prasad kurella, father of Srivalli Kurella. My hobbies are attending online courses.'
                    };
                    this.vote = {
                        voteCount: 10,
                        myVote: 0
                    };
                    this.tweet = {
                        likeCount: 20,
                        isLikeClicked: false
                    };
                    this.post = {
                        title: 'I am in App component',
                        isFavorite: true
                    };
                    this.upVoteClick = function ($event) {
                        console.log("upVoteClick clicked....");
                        console.log($event);
                    };
                    this.onFavoriteClick = function ($event) {
                        console.log("onFavoriteClick clicked....");
                        console.log($event);
                    };
                    this.onLikeClick = function ($event) {
                        console.log("onLikeClicked...");
                    };
                }
            };
            AppComponent2 = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
    <div class="mainContentsDiv">
        <h4>My First Angular 2 App</h4><courses></courses>
        <authors></authors>',
        <button class="btn btn-primary" [class.active]="isActive" 
            [style.background]=" isActive ? 'blue' : 'gray'"> Submit</button>      
        <input type="text" [(ngModel)]="twoWayBind"/>  {{ twoWayBind }}
    </div>
    `,
                    // <div class="mainContentsDiv">
                    //     <zippy title="This is Title"> 
                    //         <div class="body">This is Prasad Kurella....</div>
                    //     </zippy>
                    //     <zippy title="This is Title"> 
                    //         <div class="heading"></div>
                    //         <div class="body">This is Prasad Kurella....</div>
                    //     </zippy>
                    //     <i class="glyphicon glyphicon-star"></i> <favorite [is-Favorite]="post.isFavorite" (change)="onFavoriteClick($event)"></favorite>
                    //     {{ post2.title}}
                    //     <br>
                    //     {{ post2.body | summary:100}}
                    //     <tweet></tweet>
                    // <tweet></tweet>
                    // <br><br><br><br><br><br><br><br><br><br><br>
                    // <likeButton [likeCount]="tweet.likeCount" [isLikeClicked]="tweet.isLikeClicked" (change)="onLikeClick($event)" ></likeButton >
                    // <input name="selectBox" autogrow style="width:50px;"/>
                    // <br><VoteComponent [voteCount]="vote.voteCount" [myVote]="vote.myVote" (change)="upVoteClick($event)"></VoteComponent>
                    // <i class="glyphicon glyphicon-star"></i> <favorite [is-Favorite]="post.isFavorite" (change)="onFavoriteClick($event)"></favorite>
                    // </div>
                    pipes: [summary_pipe_1.SummaryPipe],
                    styles: [`
                .mainContentsDiv{
                margin:10%
            }`],
                    providers: [http_1.HTTP_PROVIDERS],
                    directives: [courses_Component_1.CoursesComponent, authors_Component_1.AuthorsComponent, auto_grow_directive_1.AutoGrowDirective, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent,
                        vote_component_1.VoteComponent, tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent2);
            exports_1("AppComponent2", AppComponent2);
            ;
        }
    }
});
//# sourceMappingURL=app.component2.js.map