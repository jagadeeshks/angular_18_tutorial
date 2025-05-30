import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';
import { UpperCasePipe } from '@angular/common';
import { ClientProjectType } from '../../model/class/ClientProject';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,UpperCasePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllCients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    });
  }
  onSaveClient() {
    debugger;
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((res: ApiResponseModel) => {
        if (res.result) {
          alert('Cleint created success');
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(id: number) {   
    const isDelete = confirm('Are you sure you want to delete Client');
    if (isDelete) {
      this.clientService
        .DeleteClientById(id)
        .subscribe((res: ApiResponseModel) => {
          if (res.result) {
            alert('Cleint Delete success');
            this.loadClient();
            this.clientObj = new Client();
          } else {
            alert(res.message);
          }
        });
    }
  }

  onEdit(data:Client)
  {
    this.clientObj=data;
  }
  
   onReset(){
  //  this.clientObj=null;
   }

}
