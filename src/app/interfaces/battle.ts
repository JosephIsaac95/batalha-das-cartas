

export interface Battle {
    ally: Actions[];
    opponent: Actions[];
    turn: number;
}

interface Actions {
    id: string; //url
    cardAtivado: boolean;
    cardDesativado: boolean;
}

//explicação
/**
 * O card ativado vai servir para mostrar que o aliado seleciou um card de ataque. 
 * Já o card desativado significa que não é a vez daquele card atacar, ou que ele já atacou ou que tem outro card atacando.
 * 
 */