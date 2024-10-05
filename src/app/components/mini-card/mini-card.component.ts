import { Component, Input, Output, OnInit, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {

  @Output() characterDetails = new EventEmitter<Character>();
  @Output() rollDice = new EventEmitter<Character>()
  @Input() character: Character;
  defending: boolean = false;
  selected: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    console.log('charcater', this.character)
  }

  get gradient(): string {
    return `linear-gradient(to bottom, ${this.character.backgroundTop}, ${this.character.backgroundBottom})`;
  }

  click(){
    this.selected = true;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if(!this.elementRef.nativeElement.contains(target)){
      this.selected = false;
    }
  }

  optionSelected(option: string){
    this.selected = false;

    switch(option){
      case 'atk':
        break;
      case 'dice':
      this.rollDiceEmit();
          break;
      default:
        this.showDetails();
        break;
    }
  }

  showDetails(){
    this.characterDetails.emit(this.character)
  }

  rollDiceEmit(){
    this.rollDice.emit(this.character);
  }
}
