import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Client } from './domain/client';
import { ClientService } from './service/clientservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'app-store';

  clients: Client[]=[]

  client: Client={}

  clientDialog: boolean=false

  constructor(private clientService: ClientService,  private messageService: MessageService) {
  }

  ngOnInit() {
    this.getallClients()
  }

  getallClients = async () => {
    this.clients=[]
    await this.clientService.getAllClients().then(data => {
      console.log(data)
      this.clients=data
    }).catch(err => {
      console.log("Error")
      console.log(err)
    })
  }

  new= async()=>{
    this.clientDialog=true
  }

  confirmAddClient=async()=>{
    await this.clientService.addClient(this.client).then(async data => {
      console.log(data)
      this.clients=data
      await this.getallClients()
      this.clientDialog=false
      this.messageService.add({ key: 'tst', severity: 'success', summary: 'Store Message', detail: 'Client has been added' });
    }).catch(err => {
      console.log("Error")
      console.log(err)
    })
  }

}
