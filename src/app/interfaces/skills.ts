import { Acctions } from "./acctions";

type SkillEffect = (target: Acctions, origin?: Acctions) => void;

export const skillEffects: Record<string, SkillEffect> = {
    //1. O alvo não pode atacar
    noAtk: (target: Acctions) => {
        target.jaAtacou = true;
    },
    //2. O alvo perde 5 de ataque
    debuffAtk5:(target: Acctions) => {
        target.atk = Math.max(0, target.atk - 5);
    },
    //3. O alvo ganha ataque dobrado
    doubleAtk: (target: Acctions) => {
        target.atk *= 2;
    },
    //4. O alvo ganha 10 de ataque
    boostAttack10: (target: Acctions) => {
        target.atk += 10;
    },
    //5. O pode atacar novamente
    atkTwice: (target: Acctions) => {
        target.jaAtacou = false;
    },
    //6. O alvo leva o dobro de dano (para vários ataques)
    exposedAtk: (target: Acctions, origin: Acctions, ) => {
        target.health = 2*origin.atk;
    },
    //7. O alvo recupera 20 de vida
    healAlly20: (target: Acctions) => {
        target.health += 20;
    },
    //8. O alvo ganha um escudo temporário de 15 por 1 rodada
    //Falta implementar lógica
    giveShield: (target: Acctions) => {
        target.health += 15;
    },
    //9. O alvo pode rolar o dado novamente
    doubleRoll: (target: Acctions) => {
      target.jaRolouDado = false;
    },
    //10. O alvo perde 10 de vida
    debuffHealth10:(target: Acctions) => {
        target.health = Math.max(0, target.health - 10);
    },
    //11. O alvo perde 20 de vida
    debuffHealth20:(target: Acctions) => {
        target.health = Math.max(0, target.health - 20);
    },
    //12. O alvo perde 25 de vida
    debuffHealth25:(target: Acctions) => {
        target.health = Math.max(0, target.health - 25);
    },
  };