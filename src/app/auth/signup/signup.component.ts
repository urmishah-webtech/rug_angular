import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: any = FormGroup;
  formValidate:boolean=true;
  response_data:any;
  email_error:any;
  password_error:any;
  first_name_error:any;
  last_name_error:any;
  error_data:any;
  title: any;
  message: any;
  isLoaderVisible:boolean=false;

  constructor(private __registerService:AuthService,
  private notifyService:NotificationService,private fb: FormBuilder,
  private __routeService:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]
    ],
    })
  }


  onSubmit() {
      if(this.registerForm.valid){
          this.isLoaderVisible=true;
          this.__registerService.register(this.registerForm.value).subscribe((response:any) => {
          this.response_data=response;
          this.notifyService.showSuccess("Success",response.message)
          this.isLoaderVisible=false;
          localStorage.setItem('id', this.response_data.user.id)
          localStorage.setItem('name', this.response_data.user.first_name+' '+ this.response_data.user.last_name)
          localStorage.setItem('token',this.response_data.user.token)
          this.__routeService.navigate(['/']);
        },
        err => {
          this.isLoaderVisible=false
          if (err instanceof HttpErrorResponse) {
            const errorMessages = new Array<{ propName: string; errors: string }>();

            if (err.status === 401) {
                this.error_data=err.error.message;
                console.log(this.error_data)
                if(!(this.error_data.email === undefined))
                {
                  this.email_error=this.error_data.email;
                  this.email_error.forEach((_item: any) => {
                      this.notifyService.showError("Error",_item)
                  })
                }


                if(!(this.error_data.password === undefined))
                {
                  this.password_error=this.error_data.password;
                  this.password_error.forEach((_item: any) => {
                    this.notifyService.showError("Error",_item)
                  })
                }


                if(!(this.error_data.first_name === undefined))
                {
                  this.first_name_error=this.error_data.first_name;
                  this.first_name_error.forEach((_item: any) => {
                    this.notifyService.showError("Error",_item)
                  })
                }


                if(!(this.error_data.last_name === undefined))
                {
                  this.last_name_error=this.error_data.last_name;
                  this.last_name_error.forEach((_item: any) => {
                    this.notifyService.showError("Error",_item)
                  })
                }

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

    // function validationErrors(validationErrors: any) {
    //   throw new Error('Function not implemented.');
    // }
}


