import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service'

@Component({
  selector: 'app-tables-general',
  templateUrl: './tables-general.component.html',
  styleUrls: ['./tables-general.component.css']
})
export class TablesGeneralComponent implements OnInit {
   public userData: any
  constructor(private WS:HttpService) { }
  public getUsers(){
    this.WS.post('fetch/users').subscribe((res:any)=>{
      this.userData = res;
    })
  }
  ngOnInit(): void {
    this.getUsers()
  }

}
