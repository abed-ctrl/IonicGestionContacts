import { Component, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-ajouter-contact",
  templateUrl: "./ajouter-contact.page.html",
  styleUrls: ["./ajouter-contact.page.scss"]
})
export class AjouterContactPage implements OnInit {
  mainForm: FormGroup;
  Data: any[] = [];

  constructor(
    private db: DbService,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      nom: ["", [Validators.required]],
      prenom: [""],
      telephone: [""],
      email: [""],
      adresse: [""]
    });
  }

  storeData() {
    if (this.mainForm.invalid) {
      alert("Entrer Tous Les Champs !!");
    } else {
      this.db
        .addContact(
          this.mainForm.value.nom,
          this.mainForm.value.prenom,
          this.mainForm.value.telephone,
          this.mainForm.value.email,
          this.mainForm.value.adresse
        )
        .then(async res => {
          let toast = await this.toast.create({
            message: "Contact Bien Ajouter",
            duration: 2500
          });
          toast.present();
          this.mainForm.reset();
        });
    }
  }
}
