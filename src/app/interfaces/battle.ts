import { Acctions } from "./acctions";


export interface Battle {
    ally: Acctions[];
    opponent: Acctions[];
    turn: number;
}


//explicação
/**
 * O card ativado vai servir para mostrar que o aliado seleciou um card de ataque. 
 * Já o card desativado significa que não é a vez daquele card atacar, ou que ele já atacou ou que tem outro card atacando.
 * 
 */