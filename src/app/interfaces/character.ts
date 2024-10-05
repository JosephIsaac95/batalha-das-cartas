export interface Character {
    url: string;
    name: string;
    backgroundTop: string;
    backgroundBottom: string;
    skillsAtk: Skill[];
    skillsDefense: Skill[];
}

interface Skill {
    title: string;
    text: string
}