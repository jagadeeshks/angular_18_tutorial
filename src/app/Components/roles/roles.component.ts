import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';


@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
  standalone:true
})
export class RolesComponent implements OnInit{
  isLoader:boolean=true;
  http=inject(HttpClient);  
  rolesList: IRole [] =[]
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getRoles().subscribe((result:ApiResponseModel)=>{
      this.rolesList=result.data;
      this.isLoader=false;
    },error=>{
      alert("Roles Api error")
      this.isLoader=false;

    });
        
  }
}
