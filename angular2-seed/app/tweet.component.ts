import {Component} from 'angular2/core'
import {LikeComponent} from './like.component'
import {TweetService} from './tweet.service'

@Component({
    selector : 'tweet',
    templateUrl : 'app/tweet.template.html',
    directives : [LikeComponent],
    providers : [TweetService],
    styles : [
        `
            .imageObjects{
                border-radius: 15px;
            }
            .handle {
            color: #ccc;
        }
        `
    ]

})
export class TweetComponent{

    tweets;
    constructor(tweetService : TweetService){
        this.tweets = tweetService.getTweets();
    }
}