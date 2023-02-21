import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
public name:any;
public password:any;
public loginData : any
  constructor(
    private WS:HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
    public login():void{
    this.WS.post('login/user',{
      name:this.name,
      password:this.password
    }).subscribe((res:any)=>{
      if(res.statusCode ==200){
       this.loginData = res.result.user;
       console.log("Login Succesfully",this.loginData)
       this.router.navigate(['dashboard'])
      }
     console.log(res);
    })
    }
}
