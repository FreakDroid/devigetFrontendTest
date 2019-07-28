import {Component, OnInit} from '@angular/core';
import {RedditListService} from './service/reddit-list.service';
import {Post} from './model/Post';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-test-angular';
  Posts: Array<Post>;
  PostDetail: Post;
  showDetailPost = false;

  swipeMobile = true;


  isMobile = this.deviceService.isMobile();

  constructor(private redditListService: RedditListService, private deviceService: DeviceDetectorService) {
  }

  ngOnInit() {

    this.redditListService.getAndTransformTopPost();

    this.redditListService.getTopPost.subscribe(Post => {
      console.log(Post);
      this.Posts = Post;
    });

    this.redditListService.getDetailPost.subscribe(post => {
      this.PostDetail = post;
      this.showDetailPost = true;
    });

  }

  dissmissPost() {
    const postFiltered = Array<Post>();
    this.redditListService.updatePosts(postFiltered);
    this.showDetailPost = false;
  }

  onSwipe(evt) {

    if (this.isMobile) {
      console.log('entre ', this.isMobile);
      const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? (this.swipeMobile = true) : this.swipeMobile = false) : '';
    }
  }
}
