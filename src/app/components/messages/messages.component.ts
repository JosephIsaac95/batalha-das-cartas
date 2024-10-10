import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'messages-battle',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() msg: string;

  constructor() { }

  ngOnInit() {
  }

}
