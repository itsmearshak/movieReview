import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  login(username: String, password: String) {
    if (username === "Arshakkp" && password === "Arshak@32") {
      return 200;
    }
    else {
      return 403;
    }
  }
  logout() {
    this.router.navigate(['login']);
  }
}
