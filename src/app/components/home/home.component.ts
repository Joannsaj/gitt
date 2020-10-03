import { Component, OnInit } from '@angular/core';
import { HomeService } from "src/app/home-service/home.service";
import { UserService } from 'src/app/user-service/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repos;
  users: User;


  constructor(private homeService: HomeService, private userService: UserService) { }

  ngOnInit(): void {

    this.repos = this.homeService.getMyGit()

  }
  getUserName(term: string) {
    this.userService.getUserName(term).then(
      () => {
        this.users = this.userService.user;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
