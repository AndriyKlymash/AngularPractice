import {Component} from '@angular/core';
import {IComment} from "../../models/IComment";
import {PostCommentsService} from "../../services/post-comments.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent {

  comments: IComment[];

  constructor(private postCommentsService: PostCommentsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postCommentsService.getCommentsByPost(id).subscribe(value => this.comments=value)
    })

  }
}
