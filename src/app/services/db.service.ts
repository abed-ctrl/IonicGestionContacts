import { Injectable } from "@angular/core";
import { SQLiteObject, SQLite } from "@ionic-native/sqlite/ngx";
import { BehaviorSubject, Observable } from "rxjs";
import { Platform } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { SQLitePorter } from "@ionic-native/sqlite-porter/ngx";
import { Contact } from "./contact";

@Injectable({
  providedIn: "root"
})
export class DbService {
  private storage: SQLiteObject;
  contactsList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter
  ) {
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: "contact_db.db",
          location: "default"
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchContacts(): Observable<Contact[]> {
    return this.contactsList.asObservable();
  }

  // fake data render
  getFakeData() {
    this.httpClient
      .get("assets/dump.sql", { responseType: "text" })
      .subscribe(data => {
        this.sqlPorter
          .importSqlToDb(this.storage, data)
          .then(_ => {
            this.getContacts();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
  }

  // Get List Of Contacts
  getContacts() {
    return this.storage
      .executeSql("SELECT * FROM contacttable", [])
      .then(res => {
        let items: Contact[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id: res.rows.item(i).id,
              nom: res.rows.item(i).nom,
              prenom: res.rows.item(i).prenom,
              telephone: res.rows.item(i).telephone,
              email: res.rows.item(i).email,
              adresse: res.rows.item(i).adresse
            });
          }
        }
        this.contactsList.next(items);
      });
  }

  // Add Contact
  addContact(nom, prenom, telephone, email, adresse) {
    let data = [nom, prenom, telephone, email, adresse];
    return this.storage
      .executeSql(
        "INSERT INTO contacttable (nom, prenom, telephone, email, adresse) VALUES (?, ?, ?, ?, ?)",
        data
      )
      .then(res => {
        this.getContacts();
      });
  }

  // Get single Contact
  getContact(id): Promise<Contact> {
    return this.storage
      .executeSql("SELECT * FROM contacttable WHERE id = ?", [id])
      .then(res => {
        return {
          id: res.rows.item(0).id,
          nom: res.rows.item(0).nom,
          prenom: res.rows.item(0).prenom,
          telephone: res.rows.item(0).telephone,
          email: res.rows.item(0).email,
          adresse: res.rows.item(0).adresse
        };
      })
      .catch(e => {
        return {
          id: -1,
          nom: "",
          prenom: "",
          telephone: "",
          email: "",
          adresse: ""
        };
      });
  }

  // Update Contact
  updateContact(id, contact: Contact) {
    let data = [
      contact.nom,
      contact.prenom,
      contact.telephone,
      contact.email,
      contact.adresse
    ];
    return this.storage
      .executeSql(
        `UPDATE contacttable SET nom = ?, prenom = ?, telephone = ?, email = ?, adresse = ? WHERE id = ${id}`,
        data
      )
      .then(data => {
        this.getContacts();
      })
      .catch(e => {
        return -1;
      });
  }

  // Delete Contact
  deleteContact(id) {
    return this.storage
      .executeSql("DELETE FROM contacttable WHERE id = ?", [id])
      .then(_ => {
        this.getContacts();
      });
  }
}
