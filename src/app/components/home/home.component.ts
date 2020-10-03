import { Component, OnInit } from '@angular/core';
import { HomeService } from "src/app/home-service/home.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users;


  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.users = this.homeService.getMyGit()

  }

}
