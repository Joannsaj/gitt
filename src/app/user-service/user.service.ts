import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User("", 0, "", new Date());;
  }

  quoteRequest(userName: string) {
    interface ApiResult {
      login: string;
      public_repos: number;
      avatar_url: string;
      created_at: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResult>(`https://api.github.com/users/${userName}?access_token=${environment.accessToken}`).toPromise().then(result => {

        this.user.login = result.login
        this.user.public_repos = result.public_repos
        this.user.avatar_url = result.avatar_url
        this.user.created_at = result.created_at

        resolve()
      },
        error => {
          this.user.login = 'Bad Credentials'
          this.user.public_repos = 0
          this.user.avatar_url = ''


          reject(error)
        })
    })
    return promise
  }
}
