import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserService} from "./services/user.service";
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserPostService} from "./services/user-post.service";
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserPostComponent } from './components/user-post/user-post.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPostsComponent,
    UserPostComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService, UserPostService]
})
export class UserModule {
}
