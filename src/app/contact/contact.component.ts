import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService,
    private fb: FormBuilder,
    private notifyService: NotificationService) { }

  contactform: any = FormGroup
  response: any
  ngOnInit(): void {
    this.contactform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.contactform.valid){
      this.contactService.contact(this.contactform.value).subscribe(res=>{
        this.response=res
        this.notifyService.showSuccess("Success",'Message sent successfully!')
        this.contactform.reset()
      })
    }
  }
}
