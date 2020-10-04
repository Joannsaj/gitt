import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user = 'Joannsaj'
  users: User;

  finduser(username) {
    this.user = username;
    this.ngOnInit();
  }

  constructor(private userServiceRequest: UserService) { }

  ngOnInit(): void {
    this.userServiceRequest.getUserName(this.user);
    this.users = this.userServiceRequest.users;

  }

}
