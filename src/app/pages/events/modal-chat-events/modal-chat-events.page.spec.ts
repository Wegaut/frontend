import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalChatEventsPage } from './modal-chat-events.page';

describe('ModalChatEventsPage', () => {
  let component: ModalChatEventsPage;
  let fixture: ComponentFixture<ModalChatEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChatEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalChatEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
