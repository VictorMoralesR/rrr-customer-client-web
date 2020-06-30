import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-signup-page',
  templateUrl: './client-signup-page.component.html',
  styleUrls: ['./client-signup-page.component.scss']
})
export class ClientSignupPageComponent implements OnInit {
  strType:String;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.strType = this.route.snapshot.paramMap.get('strType');
    console.log('strType', this.strType || 'free');
  }

  sendForm(){
    this.router.navigate(['portal/inicio']);
  }

}
