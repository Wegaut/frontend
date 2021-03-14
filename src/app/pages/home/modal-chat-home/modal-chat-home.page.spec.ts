import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalChatHomePage } from './modal-chat-home.page';

describe('ModalChatHomePage', () => {
  let component: ModalChatHomePage;
  let fixture: ComponentFixture<ModalChatHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChatHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalChatHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
