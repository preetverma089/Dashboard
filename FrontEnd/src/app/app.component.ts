import { Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from './http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admindashboard';
  constructor(private elementRef: ElementRef,  public  _router: Router, private WS:HttpService) { }

  getData(){
    this.WS.post('fetch/user').subscribe((res:any)=>{
      console.log(res)
    }
    )
    
  }

  ngOnInit() {
this.getData();
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
