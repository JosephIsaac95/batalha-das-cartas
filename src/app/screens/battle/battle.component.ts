import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../interfaces/character';
import teamOne from '../../mock/team-one.json'
import teamTwo from '../../mock/team-two.json'

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  team: number | null = null;
  battle: boolean = false;
  attackAnimation: boolean = false;

  acction: number = 0;

  rotateX1: number = 0;
  rotateY1: number = 0;
  rotateX2: number = 0;
  rotateY2: number = 0;
  result1: number | null = null;
  result2: number | null = null;

  allyCards!: Character[];
  opponentCards!: Character[];

  showCard:boolean = false;
  
  characterDetail!: Character;
  turnoOponente: boolean = false;

  showMsg: boolean = false;
  msg: string = ''
  

  rollDice(dado: number): void {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    if (dado === 1) {
      this.result1 = randomNumber;
      this.rotateX1 += 360*3 + Math.floor(Math.random() * 4) * 90;
      this.rotateY1 += 360*3 + Math.floor(Math.random() * 4) * 90;
    } else if (dado === 2) {
      this.result2 = randomNumber;
      this.rotateX2 += 360*3 + Math.floor(Math.random() * 4) * 90;
      this.rotateY2 += 360*3 + Math.floor(Math.random() * 4) * 90;
    }
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.team = +params.get('team')!;

      if(this.team === 0){
        this.allyCards = teamOne
        this.opponentCards = teamTwo
      } else {
        this.allyCards = teamTwo
        this.opponentCards = teamOne
      }
    })
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  showDetails(event: Character){
    this.showCard = true;
    this.characterDetail = event;
    this.attackAnimation = false;
  }

  closeDetails(){
    this.showCard = false;
  }

  attackAction(event: Character){
    this.battle = true;
    this.msg = "Escolha o Oponente!";
    this.showMsg = true;

    setTimeout(()=>{
      this.showMsg = false
    }, 2000)
  }

  foiAtacado(character: Character){
    this.showCard = true;
    this.characterDetail = character;
    this.attackAnimation = true;
  }

  onAcction(event){
    switch(event){
      case 0:
        if(this.acction<=event)
          this.acction = 0;
        break;
      case 1:
        if(this.acction<=event)
          this.acction = 1;
        break;
      case 2:
        if(this.acction<=event)
          this.acction = 2;
        break;
      case 3:
        if(this.acction<=event)
          this.acction = 3;
        //setTimeout(()=>{this.turnoOponente = true;}, 1000);
        
        break;
    }
  }
}
