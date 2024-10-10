export interface Character {
    url: string;
    name: string;
    backgroundTop: string;
    backgroundBottom: string;
    atk: number;
    health: number;
    skillsAtk?: Skill[];
    skillsDefense?: Skill[];
}

interface Skill {
    title: string;
    text: string
}