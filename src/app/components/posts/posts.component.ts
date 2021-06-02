import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  userId:number;

  posts:Post[];
  constructor(private postService:PostService) {                           // TODO   Не выдокремив ентером зверху
  }

  ngOnInit(): void {
    this.postService.getPostsByUserId(this.userId).subscribe(value => {
      this.posts=value;
    })
  }
}
