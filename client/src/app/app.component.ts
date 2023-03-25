import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'The Dating App';
  users:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
      this.getUsers();

  }

  getUsers(){
      this.http.get('https://localhost:44393/api/users').subscribe((s) => {
        if (s != null) this.users = s;
        console.log(this.users);
      });
  }

}
