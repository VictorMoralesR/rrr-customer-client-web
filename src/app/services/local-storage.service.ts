import { Injectable } from '@angular/core';
import { User } from '../portal-client/_classes/user';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key:string,item:any){
    localStorage.setItem(key,JSON.stringify(item));
  }
  getItem(key:string){
    return new Promise((resolve,reject)=>{
      let user:User= null;
      const item = localStorage.getItem(key);
      if(item){
        user = JSON.parse(item);
      }
      resolve(user);
    });
  }
}
