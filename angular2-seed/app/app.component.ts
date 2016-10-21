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
import {ContactFormComponent} from './contact-form.component'
import {ContactExcerComponent} from './contactExcer.componet'
import {SignupComponent} from './signup.component'
import {ChangePwdComponent} from './changePwd.component'

@Component({
    selector: 'my-app',
    template: `
        <div class="mainContentsDiv">
        This is new app...
            <changePwd></changePwd>
        </div>
    `,
    // <contactFormExcer></contactFormExcer>
    // <signup-form></signup-form>
    styles : [`
                .mainContentsDiv{
                margin:2%
            }`],
    directives: [CoursesComponent,AuthorsComponent,AutoGrowDirective,FavoriteComponent,LikeComponent,VoteComponent,
    TweetComponent,ZippyComponent,ContactFormComponent,ContactExcerComponent,SignupComponent,ChangePwdComponent]
})
export class AppComponent {

 };