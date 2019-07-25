import {Component, OnInit} from '@angular/core';
import {RedditListService} from './service/reddit-list.service';
import {Post} from './model/Post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-test-angular';
  Post: Array<Post>;

  constructor(private redditListService: RedditListService) {
  }

  ngOnInit() {

    this.redditListService.getAndTransformTopPost();

    this.redditListService.getTopPost.subscribe(Post => {
      console.log(Post);
      this.Post = Post;
    });
  }

  dissmissPost() {
    const postFiltered = Array<Post>();
    this.redditListService.updatePosts(postFiltered);
  }

}
