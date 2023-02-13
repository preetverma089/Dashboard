import { Component, OnInit, ElementRef } from '@angular/core';
import {HttpService} from '../../http.service'

@Component({
  selector: 'app-tables-data',
  templateUrl: './tables-data.component.html',
  styleUrls: ['./tables-data.component.css']
})
export class TablesDataComponent implements OnInit {
public userData: any;
  constructor(private elementRef: ElementRef,private WS:HttpService) { }

  public getUsers(){
    this.WS.post('fetch/users').subscribe((res:any)=>{
      this.userData = res;
    })
  }
  ngOnInit(): void {
this.getUsers()
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
