export interface Character {
    url: string;
    name: string;
    backgroundTop: string;
    backgroundBottom: string;
    atk: number;
    health: number;
    skills: Skill[];
}

export interface Skill {
    id: number;
    title: string;
    text: string;
    effect: string;
    coast: number;
}