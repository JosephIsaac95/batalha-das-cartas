import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'messages-battle',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() msg: string;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.closeModal.emit(true)
    }, 2500)
  }

}
