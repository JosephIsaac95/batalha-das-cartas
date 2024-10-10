import { Component, Input, Output, OnInit, EventEmitter, ElementRef, HostListener, OnChanges } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit, OnChanges {

  @Output() characterDetails = new EventEmitter<Character>();
  @Output() rollDice = new EventEmitter<Character>()
  @Output() attack = new EventEmitter<Character>()
  @Output() foiAtacado = new EventEmitter<Character>()
  @Input() character: Character;
  @Input() ally: boolean;
  @Input() battle: boolean;
  defending: boolean = false;
  selected: boolean = false;

  characterSelectAudio: HTMLAudioElement;

  constructor(private elementRef: ElementRef) { 
  }

  ngOnInit() {
    console.log('ally', this.ally)
    if(this.ally)
      this.characterSelectAudio = new Audio('assets/sounds/menu-selection.mp3');
    else
      this.characterSelectAudio = new Audio('assets/sounds/punch2.mp3');
  }
  
  ngOnChanges(){
    console.log(this.character.name, this.battle, !this.battle && !this.ally);
  }

  get gradient(): string {
    return `linear-gradient(to bottom, ${this.character.backgroundTop}, ${this.character.backgroundBottom})`;
  }

  click(){
    this.characterSelectAudio.play();
    if(this.ally)
      this.selected = true;
    else{
      this.foiAtacadoEmit();
    }
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
        this.attackEmit();
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

  attackEmit(){
    this.attack.emit(this.character);
  }

  foiAtacadoEmit(){
    this.foiAtacado.emit(this.character);
  }
}
