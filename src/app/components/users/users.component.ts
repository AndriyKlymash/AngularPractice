import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[];
  user:IUser

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users=value)
  }

  catchUser(value:IUser){
      this.user=value;
  }
}
