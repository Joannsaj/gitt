import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User;

  constructor(private http: HttpClient) {
    this.users = new User("", 0, "", new Date());;
  }

  getUserName(data) {
    interface ApiResult {
      login: string;
      public_repos: number;
      avatar_url: string;
      created_at: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResult>(`https://api.github.com/users/` + data + `?access_token=` + environment.accessToken)
        .toPromise()
        .then(result => {

          this.users.login = result.login;
          this.users.public_repos = result.public_repos;
          this.users.avatar_url = result.avatar_url;
          this.users.created_at = result.created_at;

          resolve()
        },
          error => {
            this.users.login = 'Bad Credentials';
            this.users.public_repos = 0;
            this.users.avatar_url = '';


            reject(error)
          })
    })
    return promise
  }
}
