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
 
  getUsers(){
  return this.WS.get(`${this.apiUrl}`)
 }
}
