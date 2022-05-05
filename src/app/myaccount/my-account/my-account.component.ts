import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  AccountForm: any = FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.AccountForm = this.fb.group({
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',Validators.required,Validators.email],
      billing_detail: ['',Validators.required]
    })
  }
  onSubmit() {
  }
  }
