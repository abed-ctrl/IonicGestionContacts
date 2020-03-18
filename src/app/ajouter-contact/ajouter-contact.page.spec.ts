import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterContactPage } from './ajouter-contact.page';

describe('AjouterContactPage', () => {
  let component: AjouterContactPage;
  let fixture: ComponentFixture<AjouterContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
