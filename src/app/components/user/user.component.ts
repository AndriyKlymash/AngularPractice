import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: IUser;

  @Output()
  details = new EventEmitter<IUser>()

  constructor() {
  }

  goToDetails() {
    this.details.emit(this.user)
  }
}
