import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RedditListService} from '../service/reddit-list.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Post} from '../model/Post';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class ListCardsComponent implements OnInit {
  @Input() Posts;
  PostList;

  constructor(private redditListService: RedditListService) { }

  ngOnInit() {
    this.redditListService.getTopPost.subscribe(posts => {
      this.PostList = posts;
    });
  }

  readPost(postToUpdate) {
    if (postToUpdate.read === false) {
      const postFiltered = this.PostList.findIndex(post => post.id === postToUpdate.id);
      postToUpdate.read = true;
      this.PostList.splice(postFiltered, 1, postToUpdate);
      this.redditListService.updatePosts(this.PostList);
    }
    this.redditListService.detailPost(postToUpdate);
  }

  dissmissPost(postToFilter) {
    const postFiltered = this.PostList.filter(post => post.id !== postToFilter.id);
    this.redditListService.updatePosts(postFiltered);
  }
}
