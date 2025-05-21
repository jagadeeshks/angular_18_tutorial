import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { 
   
  }

   getAllCients():Observable<ApiResponseModel>
    {
      return this.http.get<ApiResponseModel>(environment.API_URL+"GetAllDesignation")
    }

    addUpdate(obj:Client):Observable<ApiResponseModel>{
      return this.http.post<ApiResponseModel>(environment.API_URL+"GetAllDesignation",obj)
    }

    DeleteClientById(id:number):Observable<ApiResponseModel>
    {
      return this.http.get<ApiResponseModel>(environment.API_URL+"DeleteClientByClientId?clientId="+id)
    }
}
