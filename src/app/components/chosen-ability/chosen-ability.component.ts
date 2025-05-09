import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Acctions } from 'src/app/interfaces/acctions';
import { Skill } from 'src/app/interfaces/character';

@Component({
  selector: 'chosen-ability',
  templateUrl: './chosen-ability.component.html',
  styleUrls: ['./chosen-ability.component.css']
})
export class ChosenAbilityComponent implements OnInit {

  @Input() character: Acctions;
  @Output() ability = new EventEmitter<Skill>();

  constructor() { }

  ngOnInit() {
    console.log('entrou no chosen-ability',this.character)
  }

  selectAbility(event: Skill){
    console.log('selectAbility',event);
    this.ability.emit(event);
  }

}
