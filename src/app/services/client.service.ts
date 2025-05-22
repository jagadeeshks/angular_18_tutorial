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
      //https://freeapi.miniprojectideas.com/api/clientstrive/GetallDesignation
      // return this.http.get<ApiResponseModel>(environment.API_URL+"GetAllDesignation")
      return this.http.get<ApiResponseModel>("/api/clientstrive/GetallClients")
    }

    addUpdate(obj:Client):Observable<ApiResponseModel>{
      //return this.http.post<ApiResponseModel>(environment.API_URL+"GetAllDesignation",obj)
      return this.http.post<ApiResponseModel>("/api/clientstrive/AddUpdateClient",obj)
    }

    DeleteClientById(id:number):Observable<ApiResponseModel>
    {
      //return this.http.get<ApiResponseModel>(environment.API_URL+"DeleteClientByClientId?clientId="+id)
      return this.http.delete<ApiResponseModel>("/api/clientstrive/DeleteClientByClientId?clientId="+id)
    }
}
