import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Post } from '../model/Post';

// @ts-ignore
import * as globalParameters from '../../assets/globalParameters.json';
import {BehaviorSubject, Subject} from 'rxjs';
// @ts-ignore
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class RedditListService {

  public url = globalParameters.redditURL;
  public redditPost: Subject<Array<Post>> = new Subject<Array<Post>>();

  constructor(private http: HttpClient) {
  }

  get getTopPost() {
    return this.redditPost.asObservable();
  }

  updatePosts(posts) {
    this.redditPost.next(posts);
  }

  async getAndTransformTopPost() {
    try {
      const postNormalize = Array<Post>();
      const posts = await this.http.get(this.url).toPromise();

      // @ts-ignore
      const data = posts && posts.data;

      if (data) {
        data.children.map(post => {
          const {author_fullname, thumbnail, num_comments, created_utc, title} = post.data;
          const newPost = new Post(author_fullname, thumbnail, num_comments, this.formatTimeToString(created_utc), title);
          postNormalize.push(newPost);
        });

        this.redditPost.next(postNormalize);
      }
    } catch (e) {
      throw e;
    }
  }


  formatTimeToString(time) {
    const givenTime = moment.unix(time);
    const now = moment();

    const diffInSeconds = now.diff(givenTime, 'seconds');
    const diffInMinutes = now.diff(givenTime, 'minutes');
    const diffInHours   = now.diff(givenTime, 'hours');
    const diffInDays    = now.diff(givenTime, 'days');
    const diffInMonths  = now.diff(givenTime, 'months');
    const diffInYears   = now.diff(givenTime, 'years');


    if (diffInYears > 0) { return diffInYears+' years ago'; }

    if (diffInMonths > 0) { return diffInMonths+' months ago'; }

    if (diffInDays > 0) { return diffInDays+' days ago'; }

    if (diffInHours > 0) { return diffInHours+' hours ago'; }

    if (diffInMinutes > 0) { return diffInMinutes+' minutes ago'; }

    return diffInSeconds+' seconds ago';
  };
}
