import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Acctions } from 'src/app/interfaces/acctions';

@Component({
  selector: 'battle-animation',
  templateUrl: './battle-animation.component.html',
  styleUrls: ['./battle-animation.component.css']
})
export class BattleAnimationComponent implements OnInit {

  @Input() attacker: Acctions;
  @Input() defenser: Acctions;
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get gradientAttacker(): string {
    return `linear-gradient(to bottom, ${this.attacker.personagem.backgroundTop}, ${this.attacker.personagem.backgroundBottom})`;
  }

  get gradientDefenser(): string {
    return `linear-gradient(to bottom, ${this.defenser.personagem.backgroundTop}, ${this.defenser.personagem.backgroundBottom})`;
  }

}
