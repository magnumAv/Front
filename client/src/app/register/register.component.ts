import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(
    private accountService: AccountService,
    private toaseterService: ToastrService
  ) {}
  register() {
    this.accountService.register(this.model).subscribe(
      (s) => {
        this.cancel();
      },
      (error) => {
        console.log(error);
        this.toaseterService.error(error.error['title']);
      }
    );
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
