import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service/user.service';
import { User } from 'src/app/user';
import { Repository } from 'src/app/repository';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  public user = 'Joannsaj';
  users: User;
  repositories: Repository;

  constructor(public repoServiceRequest: UserService) { }

  ngOnInit(): void {
    this.repoServiceRequest.getRepositories(this.user);
    console.log(this.repoServiceRequest);
  }

}
