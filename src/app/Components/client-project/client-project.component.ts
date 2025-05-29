import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientservice = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.clientservice.getEmployeesList().subscribe((res: ApiResponseModel) => {
      this.employeeList = res.data;
    });
  }

  getAllClient() {
    this.clientservice.getAllCients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientservice
      .addClientProjectUpdate(formValue)
      .subscribe((res: ApiResponseModel) => {
        if (res.result) {
          alert('Project created successfuly');
        } else {
          alert(res.message);
        }
      });
  }
}
