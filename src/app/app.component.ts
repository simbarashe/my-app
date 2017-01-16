import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  channel: string = 'my-app-channel'
   constructor(private _pubNubService: PubNubAngular) {
    this._pubNubService.init({
      publishKey: 'pub-c-08a0547f-e75c-4ecd-b2fb-91bd0a853582',
      subscribeKey: 'sub-c-e686948e-d7dc-11e6-984c-02ee2ddab7fe'
    });
  }

  ngOnInit() {
    this._pubNubService.publish({ channel: this.channel, message: 'Hello!' }, (response) => {
      console.log(response);
    });

    this._pubNubService.subscribe({
      channels: [this.channel],
      withPresence: true,
      triggerEvents: true,
    });

    this._pubNubService.getMessage(this.channel, function (msg) {
      console.log(msg);
    });
  }
}
