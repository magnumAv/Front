import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  ngOnInit(): void {}
  model: any = {};
constructor(private accountService:AccountService){

}
  register() {
    this.accountService.register(this.model).subscribe(s=>{
      this.cancel();

    },error=>{
      console.log(error);

    })
  }
  cancel() {
    this.cancelRegister.emit(false)
  }
}
