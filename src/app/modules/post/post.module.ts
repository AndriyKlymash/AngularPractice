import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostService} from "./services/post.service";
import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/post/post.component";
import {PostCommentsComponent} from './components/post-comments/post-comments.component';
import {PostCommentComponent} from './components/post-comment/post-comment.component';
import {PostCommentsService} from "./services/post-comments.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostCommentsComponent,
    PostCommentComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, PostCommentsService]
})
export class PostModule {
}
