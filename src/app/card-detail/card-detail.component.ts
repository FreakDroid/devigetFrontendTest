import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../model/Post';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  @Input() Post: Post;

  constructor() { }
  ngOnInit() {

  }

}
