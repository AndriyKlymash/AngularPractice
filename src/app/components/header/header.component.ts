import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName:string;

  constructor(private dataTransfer: DataTransferService) {
    this.dataTransfer.store.subscribe(value => {
      this.userName=value;
    })
  }

  ngOnInit(): void {
  }
}
