import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {

   }

   getDesignations():Observable<ApiResponseModel>{

    return this.http.get<ApiResponseModel>("/api/clientstrive/GetallDesignation")
   }

   getRoles():Observable<ApiResponseModel>{
      return this.http.get<ApiResponseModel>("/api/clientstrive/GetAllRoles");
   }
}
