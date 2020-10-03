import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchUserName: string = ""
  @Output() userName = new EventEmitter<String>();

  submitName() {
    this.userName.emit(this.searchUserName);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
