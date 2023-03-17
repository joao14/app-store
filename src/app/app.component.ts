import { Component, OnInit } from '@angular/core';
import { ClientService } from './service/clientservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-store';

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.getallClients()
  }

  getallClients = async () => {
    console.log("Consultando todos los clientes")
    await this.clientService.getAllUsers().then(data => {
      console.log("---DATA")
      console.log(data)
    }).catch(err => {
      console.log("Error")
      console.log(err)
    })
  }

}
