import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'card-detail',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: Character;
  @Input() attackAnimation: boolean;
  @Output() closeDetails = new EventEmitter();
  defending: boolean = false;
  cardUrl!: string;
  click = 0;

  constructor() { }

  ngOnInit() {
    this.receivedAttack();
  }

  receivedAttack(){
    if(this.attackAnimation){
      setTimeout(()=>{this.attackAnimation = false;},1000);
      setTimeout(()=>{this.closeDetails.emit();},2000);
    }
  }

  get gradient(): string {
    return `linear-gradient(to bottom, ${this.character.backgroundTop}, ${this.character.backgroundBottom})`;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if(this.click != 0)
      this.closeDetails.emit();

    this.click=1;
  }

}
