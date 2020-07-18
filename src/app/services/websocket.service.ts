import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LocalStorageService } from './local-storage.service';
import { User } from '../portal-client/_classes/user';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;

  constructor(private socket: Socket, private localStorageService:LocalStorageService) {
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect',()=>{
      console.log('Conectado al servidor');
      this.localStorageService.getItem('user').then((user:any) => {
        this.loginWS(user.name);
        console.log('checkStatus login', user);
      });
      this.socketStatus = true;
    });
    this.socket.on('disconnect',()=>{
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    });
  }
  emit(event: string, payload: any, callback?: Function){
    this.socket.emit( event, payload, callback);

  }

  listen( event: string ){
    return this.socket.fromEvent(event);
  }

  loginWS(name:string){
    return new Promise((resolve, reject)=>{
      this.emit('config-user', {name}, (resp: any)=>{
        const user = new User(name);
        this.localStorageService.setItem('user',user);
        resolve(resp);
      });
    });
  }
}
