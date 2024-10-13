import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../interfaces/character';
import teamOne from '../../mock/team-one.json'
import teamTwo from '../../mock/team-two.json'
import { Battle } from 'src/app/interfaces/battle';
import { Acctions } from 'src/app/interfaces/acctions';
import { abilities } from 'src/app/services/abilities.service';
import { Abilities } from 'src/app/interfaces/abilities';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  showDice: boolean = false;
  finalResult: string = 'Derrota';

  team: number | null = null;
  battle: boolean = false;
  attackAnimation: boolean = false;

  acction: number = 0;
  acctions!: Battle;

  allyCards!: Character[];
  opponentCards!: Character[];

  showCard:boolean = false;
  
  characterDetail!: Acctions;
  turnoOponente: boolean = false;

  showMsg: boolean = false;
  msg: string = ''

  showGameOverModal: boolean = false;

  cardQueAtacou: Acctions;
  cardQueFoiAtacado: Acctions;
  cardQueRolouODado: Acctions;

  endGameBool: boolean = false;
  showBattleField: boolean = false;

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

  rollDice(character: Acctions): void {
    this.showDice = true;
    
    let ch: Acctions = null;
    if(this.acctions.turn%2===0){
      ch = this.acctions.ally.find(ally => ally.personagem.url === character.personagem.url);
    }else{
      ch = this.acctions.opponent.find(op => op.personagem.url === character.personagem.url);
    }
    ch.jaRolouDado = true;

    ch.jaRolouDado
    this.cardQueRolouODado = ch;
  }

  applyHability(ability: Abilities, target: Acctions){
    console.log('aplicou a habilidade', ability, target);
    ability.apply(target);
    this.msg = ability.description
    this.showMsg = true;
  }

  
  quemAtacou(character: Acctions){
    this.battle = true;
    this.msg = "Escolha o Oponente!";
    this.showMsg = true;

    this.cardQueAtacou = character;

    let ch = null;
    if(this.acctions.turn%2===0){
      ch = this.acctions.ally.find(ally => ally.personagem.url === character.personagem.url);
    }else{
      ch = this.acctions.opponent.find(op => op.personagem.url === character.personagem.url);
      console.log('7 - IA quemAtacou', ch);
    }

    console.log('8 - Saiu do quemAtacou');

  }

  foiAtacado(character: Acctions){
    this.showCard = true;
    this.characterDetail = character;
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
      console.log('9 - IA foiAtacado', character, ally, opponent);

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

    // Após cada ataque ou no final do turno
    this.checkGameOver();
  }

  closeDiceModal(result: number){
    this.showDice = false;
    //Aqui só vou fazer a ideia de colocar os dados, mas é preciso olhar regra a regra pra ver o que acontece
    //P. ex.: Uma habilidade pode negar outra, fora as habilidades que acabam em determinado turno.
    this.cardQueRolouODado.habAtiva = result;

    const ability = abilities[result];

    this.applyHability(ability, this.cardQueRolouODado);
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
        habAtiva: 0,
        jaAtacou: false,
        jaRolouDado: false,
        personagem: this.allyCards[i]
      };
  
      this.acctions.opponent[i] = {
        atk: this.opponentCards[i].atk,
        health: this.opponentCards[i].health,
        habAtiva: 0,
        jaAtacou: false,
        jaRolouDado: false,
        personagem: this.opponentCards[i]
      };
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  showDetails(event: Acctions){
    this.showCard = true;
    this.characterDetail = event;
    this.attackAnimation = false;
  }

  closeDetails(){
    this.showCard = false;
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
        this.endTurn();
        break;
    }
  }

  batalha(attacker: Acctions, target: Acctions){
    setTimeout(()=>{
      this.showBattleField = true;
    }, 2000)
    this.cardQueAtacou = attacker;
    this.cardQueFoiAtacado = target;
  }

  resetAbilities() {
    if (this.acctions.turn % 2 === 0){
      this.acctions.opponent.forEach(opponent => {
        opponent.habAtiva = 0; // Volta a zero
        opponent.jaRolouDado = false; // Define como falso
        opponent.jaAtacou = false;
        opponent.atk = opponent.personagem.atk;
      });
    } else {
      this.acctions.ally.forEach(ally => {
        ally.habAtiva = 0; // Volta a zero
        ally.jaRolouDado = false; // Define como falso
        ally.jaAtacou = false;
        ally.atk = ally.personagem.atk;
      });
    }
  }
  

  endTurn(){
    if (this.acctions.turn % 2 === 0)
      this.msg="Vez do Oponente!";
    else
      this.msg="Sua Vez!";
    if(!this.endGameBool)
      this.showMsg=true;
    setTimeout(()=>{this.turnoOponente = !this.turnoOponente;}, 1000);
    this.acctions.turn += 1;
    this.AITurn();
    this.resetAbilities()
  }

  closeMsg(){
    this.showMsg = false
  }

  closeModalBattle(){
    this.cardQueAtacou = null;
    this.cardQueFoiAtacado = null;
    this.showBattleField = false;
  }

  /* TURNO IA */
  async AITurn() {
    if (this.acctions.turn % 2 === 1) {
      const oppVivos = this.acctions.opponent.filter(op => op.health > 0);
      let opVivos = 0;
  
      for (const op of oppVivos) {
        console.log('1 - IA character', op.personagem.name);
  
        opVivos += 1;
        console.log('2 - IA vivos', opVivos);
  
        // Rola o dado se necessário
        if (!op.jaRolouDado) {
          console.log('3 - IA vai rolar o dado');
          
          await this.wait(2000); // Espera 2 segundos
          await this.rollDice(op);
        }
  
        // Ataca se não tiver atacado
        if (!op.jaAtacou) {
          console.log('6 - IA Atacou');
          await this.wait(5000); // Espera 5 segundos
          await this.quemAtacou(op);
  
          // Escolhe alvo e realiza o ataque
          await this.wait(2000); // Espera mais 2 segundos
          const target = this.findLowestHealthAlly();
          this.foiAtacado(target);
        }
  
        console.log('Entrou no timeout 1');
        await this.wait(2000); // Pausa final entre ações
      }

      for (const op of oppVivos) {
        op.jaRolouDado = false; // Reseta o estado de rolagem
        op.jaAtacou = false;    // Reseta o estado de ataque
      }
  
      if (opVivos === oppVivos.length) {
        console.log('Turno finalizado.');
        this.endTurn();
      }
    }
  }
  
  wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  findLowestHealthAlly(): Acctions | undefined {
    // Filtra apenas aliados com health > 0
    const aliveAllies = this.acctions.ally.filter(al => al.health > 0);
  
    if (aliveAllies.length === 0) return undefined; // Nenhum aliado disponível
  
    // Encontra o menor valor de health
    const minHealth = Math.min(...aliveAllies.map(al => al.health));
  
    // Filtra aliados que possuem esse menor valor de health
    const candidates = aliveAllies.filter(al => al.health === minHealth);
  
    // Retorna aleatoriamente um aliado entre os empatados
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  checkGameOver() {
    // Verifica se o jogador (usuário) perdeu
    const userLost = this.acctions.ally.every(player => player.health <= 0);

    // Verifica se o oponente (IA) perdeu
    const opponentLost = this.acctions.opponent.every(op => op.health <= 0);

    if (userLost) {
        console.log("Você perdeu!");
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
      this.msg='Fim de Jogo.'
    }
  
    this.showGameOverModal = true;
  }

  closeGameOver(){
    this.showGameOverModal = false;
    this.goToHome();
  }
  
}
