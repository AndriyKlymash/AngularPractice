import {Component} from '@angular/core';
import {Post} from "../../../post/models/Post";
import {UserPostService} from "../../services/user-post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent {

  posts: Post[];

  constructor(private userPostService: UserPostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userPostService.getPostsbyUser(id).subscribe(value => this.posts = value)
    })
  }
}
