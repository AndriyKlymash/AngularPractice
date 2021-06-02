import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[];
  constructor(private postService:PostService) {                           // TODO   Не выдокремив ентером зверху
  }

  ngOnInit(): void {
    this.postService.getPostsByUserId(2).subscribe(value => {
      this.posts=value;
    })
  }
}
