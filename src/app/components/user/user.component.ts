import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserName } from 'src/app/user-name';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchUserName = new UserName('')

  @Output() searching = new EventEmitter<UserName>();

  search(term) {
    this.searching.emit(term.value.username);
    term.reset()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
