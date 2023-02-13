import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl=`${environment.apiUrl}`
  constructor(
    private WS:HttpClient
  ) { }
 
  post(url:string, input:any={}){
  return this.WS.post(this.apiUrl+ url, input,)
 }
}
