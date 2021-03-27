import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    serverName: string = ""

    enabled: boolean = false

    buttonStatus: boolean = true

    onUpdateServerName = (event) => {
        this.serverName = event.target.value
    }

    handleButtonClick = () => {
        this.serverName = ''
    }

}