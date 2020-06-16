import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-contact-page',
  templateUrl: './customer-contact-page.component.html',
  styleUrls: ['./customer-contact-page.component.scss']
})
export class CustomerContactPageComponent implements OnInit {
  formContact:any;
  constructor(private formBuilder: FormBuilder) { 
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      comments: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

}
