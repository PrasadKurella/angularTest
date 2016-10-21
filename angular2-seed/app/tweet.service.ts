export class TweetService{
     getTweets() {
         return [
        { 
            imageUrl: "http://lorempixel.com/100/100/people?1",
            author: "Windward",
            handle: "@windwardstudios",
            body: "Looking for a better company reporting or docgen app?",
            likeCount: 3,
            isLikeClicked: false
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/people?2",
            author: "AngularJS News",
            handle: "@angularjs_news",
            body: "Right Relevance : Influencers, Articles and Conversations ",
            likeCount: 5,
            isLikeClicked: true
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/people?3",
            author: "UX & Bootstrap",
            handle: "@3rdwave",
            body: "10 Reasons Why Web Projects Fail ",
            likeCount: 1,
            isLikeClicked: true
        }];
    }
}