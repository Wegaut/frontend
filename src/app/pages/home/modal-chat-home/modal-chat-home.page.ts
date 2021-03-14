import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-chat-home',
  templateUrl: './modal-chat-home.page.html',
  styleUrls: ['./modal-chat-home.page.scss'],
})
export class ModalChatHomePage implements OnInit {

  constructor() { }

  public mensaje;

  ngOnInit() {
    this.enviar_mensaje();
  }


  enviar_mensaje(){
console.log(this.mensaje);
  }
}
