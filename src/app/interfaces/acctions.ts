import { Character } from "./character";

export interface Acctions {
    personagem: Character;
    jaRolouDado: boolean;
    jaAtacou: boolean;
    habAtiva: number[];
    atk: number;
    health: number;
    esquiva: boolean;
    contador: Contador;
    selecionavel: boolean;
    debuff: Debuff;
    mana: number;
}

interface Contador {
    atk: number;
    hab1: number;
    hab2: number;
    hab3: number;
    hab4: number;
    hab5: number;
    hab6: number;
}

interface Debuff {
    naoAtaca: boolean;
    naoRolaDados: boolean;
    recebeDano: number;
    contadorNaoAtaca: number;
    contadorNaoRolaDados: number;
    contadorRecebeDano: number;
}