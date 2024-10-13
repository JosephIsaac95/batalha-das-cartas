import { Character } from "./character";

export interface Acctions {
    personagem: Character;
    jaRolouDado: boolean;
    jaAtacou: boolean;
    habAtiva: number;
    atk: number;
    health: number;
}