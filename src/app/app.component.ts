import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  navigate: any;
  subscribe: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
    this.exit();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate = [
      {
        title: "Home",
        url: "/home",
        icon: "home"
      },
      {
        title: "Ajouter Contact",
        url: "/ajouter-contact",
        icon: "person-add-outline"
      },
      {
        title: "Consulter Contact",
        url: "/consulter-contact",
        icon: "person-outline"
      },
      {
        title: "Consulter All Contacts",
        url: "/consulter-all-contact",
        icon: "people-outline"
      }
    ];
  }

  sofexit() {
    navigator["app"].exitApp();
  }

  exit() {
    this.subscribe = this.platform.backButton.subscribeWithPriority(
      666666,
      () => {
        if (this.constructor.name == "AppComponent") {
          if (window.confirm("Voullez vous Quitter L'application ?")) {
            navigator["app"].exitApp();
          }
        }
      }
    );
  }
}
