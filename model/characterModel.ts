import { Race } from "./race";
import { Job } from "./job";

class Category {
    pureValue: number;
    skills: {[name: string]: number};
}

class Stats {
    vigor: Category;
    dexterity: Category;
    intelligence: Category;
    charisma: Category;
}

enum HealthStatus {
    NORMAL,
    DIZZY,
    HURT,
    SEVERELY_HURT,
    DEAD
}

class Capacity {
    name: string;
    effect: string;
    difficulty: number;
}

export class Character {
    
    id: number;

    name: string="";
    race: Race;
    job: Job;

    subgroup: string="";
    archetype: string="";
    goal: string="";
    
    stats: Stats;

    destinyPoint: Boolean=false;

    healthStatus:  HealthStatus=HealthStatus.NORMAL;

    dustLevel: number=1;

    weapons: {[name: string]: string};
    armor: {[name: string]: string};
    inventory: {[name: string]: string};

    capacities: Capacity[];

    constructor(
        name: string, 
        race: Race, 
        job: Job) 
    {
        this.name = name;
        this.race = race;
        this.job = job;
    }
        
;
}