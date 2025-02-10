import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private navCtrl: NavController
  ) {
    this.initApp()
  }

  initApp() {
    // this.navCtrl.navigateForward('/manager/nfse')
    // this.navCtrl.navigateForward('/login')
  }
}
