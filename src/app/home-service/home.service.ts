import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getMyGit() {
    return this.http.get(`https://api.github.com/users/joannsaj/repos?access_token${environment.accessToken}`)
  }
}
