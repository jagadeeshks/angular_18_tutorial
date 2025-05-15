import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ApiResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  isLoader:boolean=true;
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result: ApiResponseModel) => {
        this.designationList = result.data;
        this.isLoader=false;
      },error=>{
        alert("Designationlist-api error")
        this.isLoader=false;
      })
  }
}
