import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-client-login-page',
  templateUrl: './client-login-page.component.html',
  styleUrls: ['./client-login-page.component.scss']
})
export class ClientLoginPageComponent implements OnInit {
  email:string;

  constructor(private router: Router, private wsService:WebsocketService) {

  }

  ngOnInit(): void {
  }

  sendForm(){
    console.log('login:', this.email);
    
    this.wsService.loginWS(this.email).then((resp)=>{
      this.router.navigate(['portal/inicio']);
    });
  }

}
