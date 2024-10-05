import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'card-detail',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: Character;
  @Output() closeDetails = new EventEmitter();
  defending: boolean = false;
  cardUrl!: string;
  click = 0;

  constructor() { }

  ngOnInit() {
    console.log('character Details', this.character)
  }

  get gradient(): string {
    return `linear-gradient(to bottom, ${this.character.backgroundTop}, ${this.character.backgroundBottom})`;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    
    console.log('cliquei', this.click)

    if(this.click != 0)
      this.closeDetails.emit();

    this.click=1;
  }

}
