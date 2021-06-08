import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/IUser";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user:IUser;

  constructor(private dataTransfer:DataTransferService) {
  }

  ngOnInit(): void {
  }

  login() {
      this.dataTransfer.store.next(this.user.username)
  }
}
