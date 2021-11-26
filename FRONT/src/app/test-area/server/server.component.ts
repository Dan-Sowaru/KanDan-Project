import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId: number = 10;
    serverStatus: string = `Offline`;
    username: string = "";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? `online` : `offilne`;
    }

    teste() {
        const serverId = 5;
    }

    getServerStatus() {
        return this.serverStatus;
    }

    resetUsername() {
        this.username = "";
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}