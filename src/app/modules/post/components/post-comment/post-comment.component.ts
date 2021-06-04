import {Component, Input} from '@angular/core';
import {IComment} from "../../models/IComment";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent {

  @Input()
  comment: IComment

  constructor() {
  }
}
