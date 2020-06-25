import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-chat-list-page',
  templateUrl: './client-chat-list-page.component.html',
  styleUrls: ['./client-chat-list-page.component.scss']
})
export class ClientChatListPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToConversation():void {
    this.router.navigate(['portal/conversacion']);
  }

}
