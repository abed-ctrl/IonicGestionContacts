import { Component, OnInit } from "@angular/core";
import { PopoverController, ActionSheetController } from "@ionic/angular";
import { ConsulterContactPopoverComponent } from "../consulter-contact-popover/consulter-contact-popover.component";
import { DbService } from "../services/db.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { async } from "@angular/core/testing";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { SMS } from "@ionic-native/sms/ngx";
import { EmailComposer } from "@ionic-native/email-composer/ngx";

@Component({
  selector: "app-consulter-contact",
  templateUrl: "./consulter-contact.page.html",
  styleUrls: ["./consulter-contact.page.scss"]
})
export class ConsulterContactPage implements OnInit {
  editForm: FormGroup;
  searchForm: FormGroup;
  Data: any[] = [];
  id: any = -1;

  constructor(
    public popoverController: PopoverController,
    private db: DbService,
    private callNumber: CallNumber,
    private sms: SMS,
    private emailComposer: EmailComposer,
    private toast: ToastController,
    private formBuilder: FormBuilder,
    private actionSheetController: ActionSheetController
  ) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Actions",
      buttons: [
        {
          text: "Supprimer",
          role: "destructive",
          icon: "trash-outline",
          handler: () => {
            this.deleteContact(this.id);
          }
        },
        {
          text: "Modifier",
          icon: "create-outline",
          handler: () => {
            this.updateData();
          }
        },
        {
          text: "Appel",
          icon: "call-outline",
          handler: () => {
            this.callContact(this.editForm.value.telephone);
          }
        },
        {
          text: "SMS",
          icon: "chatbox-ellipses-outline",
          handler: () => {
            this.sms.hasPermission();
          }
        },
        {
          text: "Email",
          icon: "mail-outline",
          role: "cancel",
          handler: () => {
            this.emailComposer.isAvailable().then((available: boolean) => {
              if (available) {
                //Now we know we can send
              }
            });

            let email = {
              to: "max@mustermann.de",
              cc: "erika@mustermann.de",
              bcc: ["john@doe.com", "jane@doe.com"],
              attachments: [
                "file://img/logo.png",
                "res://icon.png",
                "base64:icon.png//iVBORw0KGgoAAAANSUhEUg...",
                "file://README.pdf"
              ],
              subject: "Cordova Icons",
              body: "How are you? Nice greetings from Leipzig",
              isHtml: true
            };

            // Send a text message using default options
            this.emailComposer.open(email);
            console.log("1Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ConsulterContactPopoverComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      id: [""]
    });

    this.editForm = this.formBuilder.group({
      nom: [""],
      prenom: [""],
      telephone: [""],
      email: [""],
      adresse: [""]
    });
  }

  async updateData() {
    if (this.id != -1) {
      this.db.updateContact(this.id, this.editForm.value).then(async res => {
        let toast = await this.toast.create({
          message: "Contact bien Modifie",
          duration: 2500
        });
        toast.present();
      });
    } else {
      let toast = await this.toast.create({
        message: "No Contact Found with this ID.",
        duration: 2500
      });
      toast.present();
    }
  }

  searchData() {
    this.db.getContact(this.searchForm.value.id).then(async res => {
      if (res["id"] != -1) {
        this.editForm.setValue({
          nom: res["nom"],
          prenom: res["prenom"],
          telephone: res["telephone"],
          email: res["email"],
          adresse: res["adresse"]
        });
        this.id = res["id"];
      } else {
        this.editForm.reset();
        let toast = await this.toast.create({
          message: "No Contact Found with this ID.",
          duration: 2500
        });
        toast.present();
        this.id = -1;
        this.searchForm.reset();
        this.editForm.reset();
      }
    });
  }

  async deleteContact(id) {
    if (this.id != -1) {
      this.db.deleteContact(id).then(async res => {
        let toast = await this.toast.create({
          message: "Contact Bien Supprime",
          duration: 2500
        });
        toast.present();
        this.searchForm.reset();
        this.editForm.reset();
      });
    } else {
      let toast = await this.toast.create({
        message: "No Contact Found with this ID.",
        duration: 2500
      });
      toast.present();
      this.id = -1;
    }
  }

  callContact(telephone) {
    this.callNumber
      .callNumber(telephone, true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }
}
