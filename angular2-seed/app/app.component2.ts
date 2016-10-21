import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.Component'
import {AuthorsComponent} from './authors.Component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'
import {TweetComponent} from './tweet.component'
import {SummaryPipe} from './summary.pipe'
import {ZippyComponent} from './zippy.component'
import {AutoGrowDirective} from './auto-grow.directive'
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
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


    pipes : [SummaryPipe],
    styles : [`
                .mainContentsDiv{
                margin:10%
            }`],
    providers : [HTTP_PROVIDERS],
    directives: [CoursesComponent,AuthorsComponent,AutoGrowDirective,FavoriteComponent,LikeComponent,
            VoteComponent,TweetComponent,ZippyComponent]
})
export class AppComponent2 {
    post2 = {
        title : 'this is prasad',
        body : 'This is prasad kurella, father of Srivalli Kurella. My hobbies are attending online courses.'
    }
    vote = {
        voteCount : 10,
        myVote : 0
    }
    tweet = {
        likeCount : 20,
        isLikeClicked : false
    }
    post = {
        title : 'I am in App component',
        isFavorite : true
    }
    upVoteClick=function($event){
        console.log("upVoteClick clicked....");
        console.log($event);
    }
    onFavoriteClick=function($event){
        console.log("onFavoriteClick clicked....");
        console.log($event);
    }
    onLikeClick=function($event){
        console.log("onLikeClicked...");
    }
 };