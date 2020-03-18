import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsulterContactPage } from './consulter-contact.page';

describe('ConsulterContactPage', () => {
  let component: ConsulterContactPage;
  let fixture: ComponentFixture<ConsulterContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsulterContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
