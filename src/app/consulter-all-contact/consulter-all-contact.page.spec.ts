import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsulterAllContactPage } from './consulter-all-contact.page';

describe('ConsulterAllContactPage', () => {
  let component: ConsulterAllContactPage;
  let fixture: ComponentFixture<ConsulterAllContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterAllContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsulterAllContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
