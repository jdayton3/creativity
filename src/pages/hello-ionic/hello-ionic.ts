import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular'; 

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinues: number;
  localNotifications: LocalNotifications;
  isAndroid: boolean;

  constructor(locNot: LocalNotifications, platform: Platform) {
    this.localNotifications = locNot;
    platform.ready().then((source) => {
      this.isAndroid = platform.is('android');
    })
  }

  public schedule() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: this.isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: {secret: ''}
    })
  }

}
