import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {

  constructor() { }
}

export const abilities = {
  1: {
    description: 'Exausto: Zere o ataque',
    apply: (target: any) => {
      target.atk = 0;
    }
  },
  2:{
    description: 'Cansaço: Perca 5 de ataque',
    apply: (target: any) => {
      target.atk -= 5;
    }
  },
  3:{
    description: 'Confiante: Ganhe 5 de ataque',
    apply: (target: any) => {
      target.atk += 5;
    }
  },
  4:{
    description: 'Super Força: Cause o dobro de dano',
    apply: (target: any) => {
      target.atk *= 2;
    }
  },
  5:{
    description: 'Socorro médico: Cure 20',
    apply: (target: any) => {
      target.health += 20;
    }
  },
  6:{
    description: 'Revigorado: Cure 20 e aumente 10 de ataque',
    apply: (target: any) => {
      target.health += 20;
      target.atk += 10;
    }
  }
}
