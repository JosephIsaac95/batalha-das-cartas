import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Acctions } from 'src/app/interfaces/acctions';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'card-detail',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: Acctions;
  @Input() attackAnimation: boolean;
  @Output() closeDetails = new EventEmitter();

  punchAudio: HTMLAudioElement;
  
  defending: boolean = false;
  cardUrl!: string;
  click = 0;

  constructor() { }

  ngOnInit() {
    this.punchAudio = new Audio('assets/sounds/punch.mp3')
    this.receivedAttack();
  }

  receivedAttack(){
    if(this.attackAnimation){
      setTimeout(()=>{this.attackAnimation = false;},1000);
      setTimeout(()=>{this.closeDetails.emit();},2000);
      this.punchAudio.play();
    }
  }

  get gradient(): string {
    return `linear-gradient(to bottom, ${this.character.personagem.backgroundTop}, ${this.character.personagem.backgroundBottom})`;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if(this.click != 0)
      this.closeDetails.emit();

    this.click=1;
  }

}
