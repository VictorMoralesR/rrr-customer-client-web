import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-chat-list-page',
  templateUrl: './admin-chat-list-page.component.html',
  styleUrls: ['./admin-chat-list-page.component.scss']
})
export class AdminChatListPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToConversation(){
    this.router.navigate(['portal/admin/conversation']);
  }

}
