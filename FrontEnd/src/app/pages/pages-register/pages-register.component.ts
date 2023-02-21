import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service'
@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css']
})
export class PagesRegisterComponent implements OnInit {

public userName:any;
public password:any;
public email:any;
public name:any;
  constructor(
    private WS:HttpService
  ) { }

  public registerUser(){
    this.WS.post('save/user',{
    name:this.name,
    userName:this.userName,
    email:this.email,
    password:this.password,
    type:1
    }
    ).subscribe((res:any)=>{
console.log(res);
    })
  }
  ngOnInit(): void {
  }

}
export interface IRegister{
  name?:string,
  userName?:string,
  email?:string,
  password?:string
}
