import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmnet } from '../environments/environment';
import { Member } from '../models/member';


@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environmnet.apiUrl;
  constructor(private http: HttpClient) {}
  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }
  getMember(username){
    return this.http.get<Member>(this.baseUrl+'users/'+username)
  }
}
