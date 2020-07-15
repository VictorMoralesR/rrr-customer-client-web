import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

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
  constructor(public wsService: WebsocketService, public chatService: ChatService) { }

  ngOnInit(): void {
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
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }

}
