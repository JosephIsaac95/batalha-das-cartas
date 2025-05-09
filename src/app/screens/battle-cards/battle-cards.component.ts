import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import teamOne from '../../mock/team-one.json'
import teamTwo from '../../mock/team-two.json'


import { Acctions } from 'src/app/interfaces/acctions';
import { Battle } from 'src/app/interfaces/battle';
import { Character, Skill } from 'src/app/interfaces/character';
import { abilities, skillsNinjaAzul, skillsNinjaRosa } from 'src/app/services/abilities.service';
import { Abilities } from 'src/app/interfaces/abilities';


@Component({
  selector: 'app-battle-cards',
  templateUrl: './battle-cards.component.html',
  styleUrls: ['./battle-cards.component.css']
})
export class BattleCardsComponent implements OnInit {

  //Audio
  audioPlayer: HTMLAudioElement;

  //Time
  team!: number;
  allyCards!: Character[];
  opponentCards!: Character[];

  chosenCharacter!: Acctions;

  //Ações
  //acction: number = 0;
  acctions!: Battle;
  cardQueAtacou: Acctions;
  cardQueFoiAtacado: Acctions;

  //Interações de Tela
  battle: boolean = false;
  showCard: boolean = false;
  attackAnimation: boolean = false;
  showModalAbilities: boolean = false;
  finalResult!: string;
  endGameBool: boolean = false;
  showGameOverModal: boolean = false;
  turnoOponente: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //Audio
    this.audioPlayer = new Audio('assets/sounds/battle-song.mp3');

    this.audioPlayer.volume = 0.5;
    this.audioPlayer.loop = true;
    this.audioPlayer.play();

    //Rota
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
        personagem: this.allyCards[i],
        esquiva: false,
        selecionavel: true,
        mana: 2,
        contador: {
          atk: 0,
          hab1: 0,
          hab2: 0,
          hab3: 0,
          hab4: 0,
          hab5: 0,
          hab6: 0,
        },
        debuff: {
          contadorNaoAtaca: 0,
          contadorNaoRolaDados: 0,
          contadorRecebeDano: 0,
          naoAtaca: false,
          naoRolaDados: false,
          recebeDano: 0
        }
      };
  
      this.acctions.opponent[i] = {
        atk: this.opponentCards[i].atk,
        health: this.opponentCards[i].health,
        habAtiva: [],
        jaAtacou: false,
        jaRolouDado: false,
        personagem: this.opponentCards[i],
        esquiva: false,
        selecionavel: true,
        mana: 2,
        contador: {
          atk: 0,
          hab1: 0,
          hab2: 0,
          hab3: 0,
          hab4: 0,
          hab5: 0,
          hab6: 0,
        },
        debuff: {
          contadorNaoAtaca: 0,
          contadorNaoRolaDados: 0,
          contadorRecebeDano: 0,
          naoAtaca: false,
          naoRolaDados: false,
          recebeDano: 0
        }
      };
    }
  }

  //Ataque
  foiAtacado(character: Acctions){
    this.showCard = true;
    this.chosenCharacter = character;
    this.attackAnimation = true;

    let ally = null;
    let opponent = null;

    //this.batalha(this.cardQueAtacou, character);
    
    if(this.acctions.turn%2===0){
      ally = this.acctions.ally.find(ally => ally.personagem.url === this.cardQueAtacou.personagem.url)
      opponent = this.acctions.opponent.find(opp => opp.personagem.url === character.personagem.url);

      //O oponente perde a vida, o card que atacou não pode mais atacar
      opponent.health -= this.cardQueAtacou.atk;
      ally.jaAtacou = true;
      ally.jaRolouDado = true;
      this.battle = false;

    }else{
      ally = this.acctions.ally.find(op => op.personagem.url === character.personagem.url);
      opponent = this.acctions.opponent.find(al => al.personagem.url === this.cardQueAtacou.personagem.url)

      //O oponente perde a vida, o card que atacou não pode mais atacar
      ally.health -= this.cardQueAtacou.atk;
      opponent.jaAtacou = true;
      opponent.jaRolouDado = true;
      this.battle = false;
    }
    
    if (opponent.health <= 0) {
      opponent.health = 0;
    }

    if (ally.health <= 0) {
      ally.health = 0;
    }

    // Após cada ataque checa se ainda existem cards aliados ou oponentes vivos
    this.checkGameOver();
  }

  //Habilidades
  showAbility(ch: Acctions){
    console.log('showAbility', ch);
    this.showModalAbilities = true;

    let character: Acctions = null;
    if(this.acctions.turn%2===0){
      character = this.acctions.ally.find(ally => ally.personagem.url === ch.personagem.url);
    }else{
      character = this.acctions.opponent.find(op => op.personagem.url === ch.personagem.url);
    }

    this.chosenCharacter = character;
  }

  chosenAbility(ability: Skill){
    console.log('chosenAbility', ability);
    this.showModalAbilities = false;

    this.chosenCharacter.habAtiva.push(ability.id);

    abilities[ability.id];

    console.log('ability 1', ability.id);
    console.log('ability 2', abilities[ability.id]);
    this.applyAbility(abilities[ability.id], this.chosenCharacter, ability.id);
  }

  applyAbility(ability: Abilities, target: Acctions, abilityId: number){
    console.log('target', abilityId);
    switch(target.personagem.url){
      case 'assets/cards/ninja-rosa.jpeg':
        skillsNinjaRosa[abilityId].apply(target);
        this.chosenCharacter.mana -= this.chosenCharacter.personagem.skills[abilityId].coast;
        break;
      case 'assets/cards/ninja-azul.jpeg':
        if(abilityId === 4){
          let oponentesVivos = this.acctions.opponent.filter(op => op.health > 0)
          skillsNinjaAzul[abilityId].apply(oponentesVivos)
        } else{
          skillsNinjaAzul[abilityId].apply(target)
        }
        console.log(
          'custos de mana',
          this.chosenCharacter.mana -= this.chosenCharacter.personagem.skills[abilityId].coast
        );
        this.chosenCharacter.mana -= this.chosenCharacter.personagem.skills[abilityId].coast;
        break;
      default:
        ability.apply(target);
        this.chosenCharacter.mana -= this.chosenCharacter.personagem.skills[abilityId].coast;
        break;
    }
  }

  //Checagens
  checkGameOver() {
    // Verifica se o jogador (usuário) perdeu
    const userLost = this.acctions.ally.every(player => player.health <= 0);

    // Verifica se o oponente (IA) perdeu
    const opponentLost = this.acctions.opponent.every(op => op.health <= 0);

    if (userLost) {
        this.finalResult = 'Derrota!'
        this.endGame(); // Chama a função para finalizar o jogo com derrota
    } else if (opponentLost) {
        this.finalResult = 'Vitória!'
        this.endGame(); // Chama a função para finalizar o jogo com vitória
    }

    if(userLost || opponentLost)
      this.endGameBool = true;
  } 

  endGame() { 
    const audio = document.querySelector('audio');
    if (audio) {
      audio.pause();
      //this.msg='Fim de Jogo.'
    }
  
    this.showGameOverModal = true;
  }
}
