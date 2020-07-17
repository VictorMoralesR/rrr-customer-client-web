import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { User } from '../_classes/user';

@Component({
  selector: 'app-client-conversation-page',
  templateUrl: './client-conversation-page.component.html',
  styleUrls: ['./client-conversation-page.component.scss']
})
export class ClientConversationPageComponent implements OnInit, OnDestroy {
  messagesSubscription: Subscription
  message:string = '';
  arrMessages = [];
  messagesContainer: HTMLElement;
  user: any;
  constructor(public wsService: WebsocketService, public chatService: ChatService, public localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.getItem('user').then(user => {
      this.user = user;
      this.wsService.loginWS(this.user.name);
      console.log('this.user', this.user);
      
    });
    this.messagesContainer = document.querySelector('#wrapper');
    this.messagesSubscription = this.chatService.getMessges().subscribe(message=>{
      console.log('messages', message);
      this.arrMessages.push(message);
      const height = this.messagesContainer.scrollHeight;
      setTimeout(()=>{
        window.scroll(0,height);
      },30);
      
    });
  }
  ngOnDestroy(){
    this.messagesSubscription.unsubscribe();
  }

  sendMessage(){
    if(this.message.trim().length > 0) {
      console.log('send message');
      this.chatService.sendMessage(this.user,this.message);
      this.message = '';
    }
  }

}
