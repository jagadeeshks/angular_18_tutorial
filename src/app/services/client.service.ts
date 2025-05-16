import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { 
   
  }

  //  getAllCients():Observable<Client>
  //   {
  //     //return this.http.get("")
  //   }
}
