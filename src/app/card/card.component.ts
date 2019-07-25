import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../model/Post';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() Post: Post;
  @Output() dissmissPost = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  test(post) {
    this.dissmissPost.emit(post);
  }
}
