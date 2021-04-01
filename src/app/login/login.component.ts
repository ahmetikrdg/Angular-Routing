import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  constructor(public authservice:AuthService, public router:Router) {
    this.setMessage();
   }

  login(){//logini çağırınca diğer compta direk trueya eşitlenir
    this.authservice.login();
    this.setMessage();

    this.authservice.isAuthenticated()
    .then(isAuthenticated=>{
      if (isAuthenticated) {
        let reditectUrl=this.authservice.redirectUrl ? this.router.parseUrl(this.authservice.redirectUrl) : '/admin';
        this.router.navigateByUrl(reditectUrl);
      }
    })
  }

  logout(){
    this.authservice.logout();
    this.setMessage();

   

  }

  setMessage(){
    this.message='logged ';
    this.authservice.isAuthenticated().then((isAuthenticated:Boolean)=>{
      if (isAuthenticated) {
        this.message +='in';
      }
      else {
        this.message +='logout';
      }
    });
  }

  ngOnInit(): void {
  }

}
