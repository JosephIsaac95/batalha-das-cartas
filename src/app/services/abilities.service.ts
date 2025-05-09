import { Injectable } from '@angular/core';
import { Acctions } from '../interfaces/acctions';
import { title } from 'process';
import { Abilities } from '../interfaces/abilities';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {

  constructor() { }
}

export const abilities = {
  1: {
    description: 'Exausto: Não ataque essa rodada',
    apply: (target: Acctions) => {
      target.jaAtacou = true;
    }
  },
  2:{
    description: 'Cansaço: Perca 5 de ataque',
    apply: (target: Acctions) => {
      target.atk -= 5;
    }
  },
  3:{
    description: 'Confiante: Ganhe 5 de ataque',
    apply: (target: Acctions) => {
      target.atk += 5;
    }
  },
  4:{
    description: 'Super Força: Cause o dobro de dano',
    apply: (target: Acctions) => {
      target.atk *= 2;
    }
  },
  5:{
    description: 'Socorro médico: Cure 20',
    apply: (target: Acctions) => {
      target.health += 20;
    }
  },
  6:{
    description: 'Revigorado: Cure 20 e aumente 10 de ataque',
    apply: (target: Acctions) => {
      target.health += 20;
      target.atk += 10;
    }
  }
}

export const skillsNinjaRosa = {
  1: {
    title: 'Exaustão',
    description: 'A Ninja Rosa está exausta: perdeu todos os seus buffs e não pode atacar essa rodada.',
    apply: (target: Acctions) => {
      target.jaAtacou = true;
      target.habAtiva = [];
    }
  },
  2: {
    title: 'Lentidão',
    description: 'A Ninja Rosa é forte, mas é lenta: Ela não conseguirá atacar nessa rodada.',
    apply: (target: Acctions) => {
      target.jaAtacou = true;
    }
  },
  3: {
    title: 'Tanque de Guerra',
    description: 'A Ninja Rosa tem numa força absurda: Cause o dobro de dano nessa batalha.',
    apply: (target: Acctions) => {
      target.atk *= 2;
    }
  },
  4: {
    title: 'Beleza Medicinal',
    description: 'A Ninja Rosa traz cura para um aliado ou para si mesma. Cure em +15 o alvo.',
    apply: (target: Acctions) => {
      target.health += 15;
    }
  },
  5: {
    title: 'Cura Milagrosa',
    description: 'A Ninja Rosa traz um aliado de volta a vida com +15 de vida. Caso todos estejam vivo, cure em +30 o alvo.',
    apply: (target: Acctions) => {
      if(target.health === 0)
          target.health = 15
      else
        target.health += 30
    }
  },
  6: {
    title: 'Imortalidade proibida',
    description: 'A Ninja Rosa usa uma técnica proibida de imortalidade. Da próxima vez que os pontos de vida chegariam a 0, eles travam em 1. Ela não pode ser destruída na rodada em que isso acontecer.',
    apply: (target: Acctions) => {
      if(target.habAtiva.includes(6) && target.health === 0)
        target.health = 1
    }
  },
  7:{
    title: 'Resetar',
    description: 'Reseta as habilidades com suas devidas condições',
    apply: (target: Acctions) => {
      target.jaAtacou = false;
      target.jaRolouDado = false;
    }
  },
  8:{
    title: 'Recebe Ataque',
    description: 'Quando esse card receber um ataque, ele deve verificar essas condições',
    apply: (target: Acctions) => {
      if(target.habAtiva.includes(6) && target.health === 0)
        target.health = 1
    }
  }
}

export const skillsNinjaAzul = [
  {
    title: 'Efeito Reverso',
    description: 'As habilidades do Ninja Azul têm um alto custo: Ele não pode atacar e nem contra-atacar por duas rodadas.',
    apply: (target: Acctions) => {
      if(!target.habAtiva.includes(6))
        target.jaAtacou = true;
    }
  },
  {
    title: 'Rebeldia',
    description: 'O Ninja Azul é solitário e pode não cooperar com a equipe: Ele não ataca nessa rodada',
    apply: (target: Acctions) => {
      if(!target.habAtiva.includes(6))
        target.jaAtacou = true;
    }
  },
  {
    title: 'Relâmpago Azul',
    description: 'A velocidade do Ninja Azul é quase insuperável: Ele ataca duas vezes e vai esquivar dos próximos dois ataques.',
    apply: (target: Acctions) => {
      target.jaAtacou = false;
      target.esquiva = true;
      target.contador.hab3 = 2;
      target.selecionavel = false;
    }
  },
  {
    title: 'Grande Bola de Fogo',
    description: 'O Ninja Azul lança uma grande bola de fogo que atinge todos os inimigos: Todos os inimigos perdem -9 de vida.',
    apply: (target: Acctions | Acctions[]) => {
      if (Array.isArray(target)) {
        for (const op of target) {
          if (op.health > 0) {
            op.health -= 9;
          }
        }
      } else {
        if (target.health > 0) {
          target.health -= 9;
        }
      }
    }    
  },
  {
    title: 'Cahamas Eternas',
    description: 'O Ninja Azul lança uma chama negra que é infindável. O inimigo perde vida em -9 a cada rodada. É acumulativo',
    apply: (target: Acctions) => {
      target.debuff.recebeDano += 9
      target.debuff.contadorRecebeDano = 999
    }
  },
  {
    title: 'Poder Sombrio da Noite',
    description: 'O Ninja Azul usa sua técnica especial e se envolve em sombras. Ele não pode ser alvejado durante 4 rodadas, seus ataques sempre são duplos, não sofre debuffs (os dados 1 e 2 não surtem efeitos) e ele sempre contra-ataca duplamente, independente se for escolhido ou não como alvo da batalha.',
    apply: (target: Acctions) => {
      target.atk *= 2;
      target.esquiva = true;
      target.contador.hab6 = 4;
    }
  },
  {
    title: 'Resetar',
    description: 'Reseta as habilidades com suas devidas condições',
    apply: (target: Acctions) => {
      target.jaAtacou = false;
      target.jaRolouDado = false;
      if(!target.contador.hab3){
        target.contador.hab3 = 0
      }if(!target.contador.hab6){
        target.contador.hab6 = 0
      }if(target.contador.hab3 > 0){
        target.contador.hab3 -= 1
      }if(target.contador.hab6 > 0){
        target.contador.hab6 -= 1
      }if(target.contador.hab3 === 0 && target.contador.hab6 === 0){
        target.selecionavel = true;
      }
    }
  },
  {
    title: 'Recebe Ataque',
    description: 'Quando esse card receber um ataque, ele deve verificar essas condições',
    apply: (target: Acctions) => {
      //if(target.contador.hab3 > 0)
        //target.selecionavel
    }
  }
]
