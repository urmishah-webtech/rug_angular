import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response_data: any;
  error_data: any;
  isLogged: boolean = false

  constructor(private __routeService:Router,private __loginService:AuthService,private notifyService:NotificationService,private fb: FormBuilder) { }
  formValidate:boolean=true;
  isLoaderVisible:boolean=false;
  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required]]
  })
  onSubmit() {
    if(this.loginForm.valid){
      this.isLoaderVisible=true;
      this.__loginService.login(this.loginForm.value).subscribe((response:any) => {
        this.notifyService.showSuccess("Success",response.message)
        this.response_data=response;
        this.isLoaderVisible=false;
        localStorage.setItem('id', this.response_data.user.id)
        localStorage.setItem('name', this.response_data.user.first_name+' '+ this.response_data.user.last_name)
        localStorage.setItem('token',this.response_data.access_token)
        this.isLogged = true;
        this.__routeService.navigate(['/']);
      },
      err => {
        this.isLoaderVisible=false
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            const errorMessages = new Array<{ propName: string; errors: string }>();
            this.error_data=err;
            this.notifyService.showError("Error",err.error.message)
          }
          if(err.status===500){
            this.notifyService.showError("Error",'Server Error')
          }
        }
      }

      )
    }
    else{
      this.formValidate=false;
    }
  }
}
