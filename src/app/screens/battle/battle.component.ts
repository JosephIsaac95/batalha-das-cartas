import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../interfaces/character';
import teamOne from '../../mock/team-one.json'
import teamTwo from '../../mock/team-two.json'
import { Battle } from 'src/app/interfaces/battle';
import { Acctions } from 'src/app/interfaces/acctions';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  showDice: boolean = false;

  team: number | null = null;
  battle: boolean = false;
  attackAnimation: boolean = false;

  acction: number = 0;
  acctions!: Battle;

  allyCards!: Character[];
  opponentCards!: Character[];

  showCard:boolean = false;
  
  characterDetail!: Character;
  turnoOponente: boolean = false;

  showMsg: boolean = false;
  msg: string = ''

  cardQueAtacou: Acctions;
  cardQueFoiAtacado: Acctions;
  cardQueRolouODado: Acctions;
  

  rollDice(character: Acctions): void {
    //this.animacaoGiroDado(dado);
    this.showDice = true;

    const ally = this.acctions.ally.find(ally => ally.personagem.url === character.personagem.url);
    ally.jaRolouDado = true;
    this.cardQueRolouODado = ally;
  }

  closeDiceModal(result: number){
    this.showDice = false;
    //Aqui só vou fazer a ideia de colocar os dados, mas é preciso olhar regra a regra pra ver o que acontece
    //P. ex.: Uma habilidade pode negar outra, fora as habilidades que acabam em determinado turno.
    this.cardQueRolouODado.habAtiva.push(result);
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
    });

    this.acctionsInitial();
  }

  acctionsInitial(){

    this.acctions = {
      ally: [],
      opponent: [],
      turn: 0
    };

    for(let i = 0; i < this.allyCards.length; i++) {
      this.acctions.ally[i] = {
        atk: this.allyCards[i].atk,
        health: this.allyCards[i].health,
        habAtiva: [],
        jaAtacou: false,
        jaRolouDado: false,
        personagem: this.allyCards[i]
      };
  
      this.acctions.opponent[i] = {
        atk: this.opponentCards[i].atk,
        health: this.opponentCards[i].health,
        habAtiva: [],
        jaAtacou: false,
        jaRolouDado: false,
        personagem: this.opponentCards[i]
      };
    }
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

  quemAtacou(character: Acctions){
    this.battle = true;
    this.msg = "Escolha o Oponente!";
    this.showMsg = true;

    this.cardQueAtacou = character;
    const ally = this.acctions.ally.find(ally => ally.personagem.url === character.personagem.url);

    if(ally){
      
    }
  }

  foiAtacado(character: Acctions){
    this.showCard = true;
    this.characterDetail = character.personagem;
    this.attackAnimation = true;

    //O oponente atacado deve perder vida
    const opponent = this.acctions.opponent.find(opp => opp.personagem.url === character.personagem.url);
    const ally = this.acctions.ally.find(ally => ally.personagem.url === this.cardQueAtacou.personagem.url)

    //O oponente perde a vida, o card que atacou não pode mais atacar
    opponent.health -= this.cardQueAtacou.atk;
    ally.jaAtacou = true;
    ally.jaRolouDado = true;
    this.battle = false;
    
    if (opponent.health <= 0) {
      opponent.health = 0;
    }
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
        this.msg="Vez do Oponente!";
        this.showMsg=true;
        setTimeout(()=>{this.turnoOponente = true;}, 1000);
        this.acctions.turn += 1;
        break;
    }
  }

  closeMsg(){
      this.showMsg = false
  }
}
