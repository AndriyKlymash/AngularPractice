import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  // template:'<UsersComponent [usersProperty]="usersProperty"></UsersComponent>'
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private postService:PostService) {
  }

  ngOnInit(): void {
    // let find = this.users.find(value => value.id === id);
    this.userService.getUsers().subscribe(value => {
      this.users = value;
      for (const user of this.users) {
          this.postService.getPostsByUserId(user.id);
      }
    })
  }

}
