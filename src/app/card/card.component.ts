import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../model/Post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Post: Post;
  @Output() dissmissPost = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  dismiss(post) {
    this.dissmissPost.emit(post);
  }
}
