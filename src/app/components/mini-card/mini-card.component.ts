import { Component, Input, Output, OnInit, EventEmitter, ElementRef, HostListener, OnChanges } from '@angular/core';
import { Acctions } from 'src/app/interfaces/acctions';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit, OnChanges {

  @Output() characterDetails = new EventEmitter<Acctions>();
  @Output() rollDice = new EventEmitter<Acctions>()
  @Output() attack = new EventEmitter<Acctions>()
  @Output() foiAtacado = new EventEmitter<Acctions>()
  @Input() character: Acctions;
  @Input() ally: boolean;
  @Input() battle: boolean;
  @Input() opponentTurn: boolean;
  defending: boolean = false;
  selected: boolean = false;

  characterSelectAudio: HTMLAudioElement;

  constructor(private elementRef: ElementRef) { 
  }

  ngOnInit() {
    this.characterSelectAudio = new Audio('assets/sounds/menu-selection.mp3');
  }
  
  ngOnChanges(){
  }

  get gradient(): string {
    return `linear-gradient(to bottom, ${this.character.personagem.backgroundTop}, ${this.character.personagem.backgroundBottom})`;
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
        this.atacouEmit();
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

  atacouEmit(){
    this.attack.emit(this.character);
  }

  foiAtacadoEmit(){
    this.foiAtacado.emit(this.character);
  }
}
