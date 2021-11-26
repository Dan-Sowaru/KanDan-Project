import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]' - seletor de atributo
  // selector: '.app-servers' seletor de classe
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  statusAdicacoServidor = "nenhum servidor foi criado";
  serverName: String = "serverJames";
  serverCreated = false;
  servers = [`SERVIDOR LET'S CODE`, `SERVIDOR TURMA #810`];


  constructor() { 
    setTimeout( (): void => {
      this.allowNewServer = true;
    }, 2000)

  }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverName;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.statusAdicacoServidor = `servidor foi criado! Novo servidor é ` + this.getServerStatus();
  }

    onUpdateServerName(event: any) {
      console.log(event);
      this.serverName = event.target.value;

    }


}
