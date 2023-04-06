import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(username :String,password:String){
    if(username==="Arshakkp"&&password==="Arshak@32"){
      return 200;
    }
    else{
      return 403;
    }
  }
}
