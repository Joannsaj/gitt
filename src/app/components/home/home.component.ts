import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service/user.service';
import { User } from 'src/app/user';
import { Repository } from 'src/app/repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user = 'Joannsaj'
  users: User;
  repositories: Repository;

  finduser(username) {
    this.user = username;
    this.ngOnInit();
  }

  constructor(public userServiceRequest: UserService, public repoServiceRequest: UserService) { }

  ngOnInit(): void {
    this.userServiceRequest.getUserName(this.user);
    this.users = this.userServiceRequest.users;
    this.repoServiceRequest.getRepositories(this.user);
    console.log(this.repoServiceRequest);
  }

}
