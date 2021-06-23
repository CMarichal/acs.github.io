import { Race } from "./race";
import { Job } from "./job";
import { ItemManagement } from "./item";


class Skill {
    name: string;
    baseValue: number=0;
    modifier: number=0;

    constructor(name:string) {
        this.name = name;
    }
}

class Category {
    pureValue: number=0;
    skills: {[name: string]: Skill};
}

class CategoryIntelligence extends Category {
    knowledges: {[name: string]: Skill};
    knowHows: {[name: string]: Skill};
}

class Stats {
    vigor: Category=new Category();
    dexterity: Category=new Category();
    intelligence: CategoryIntelligence=new CategoryIntelligence();
    charisma: Category=new Category();

    constructor() {
        this.vigor.skills = {
            "athletics": new Skill("Athlétisme"),
            "intimidation": new Skill("Intimidation"),
            "melee": new Skill("Mêlée"),
            "resistance": new Skill("Résistance")
        }
        this.dexterity.skills = {
            "sneak": new Skill("Discrétion"),
            "dodge": new Skill("Esquive"),
            "shoot": new Skill("Tir"),
            "stealth": new Skill("Roublardise")
        }
        this.intelligence.skills = {
            "knowledge": new Skill("Savoir"),
            "perception": new Skill("Perception"),
            "preparation": new Skill("Préparation"),
            "know-how": new Skill("Savoir-faire")
        }
        this.charisma.skills = {
            "persuasion": new Skill("Persuasion"),
            "leadership": new Skill("Commandement"),
            "bravery": new Skill("Courage"),
            "etiquette": new Skill("Etiquette")
        }
    }
}

export enum HealthStatus {
    NORMAL,
    DIZZY,
    SLIGHTLY_HARMED,
    SEVERELY_HARMED,
    DEAD
}

class Capacity {
    name: string="";
    effect: string="";
    difficulty: number=0;
}

export class Character {
    
    id: number=-1;

    name: string="";
    race: Race;
    job: Job;

    subgroup: string="";
    archetype: string="";
    goal: string="";
    
    stats: Stats= new Stats();

    destinyPoint: Boolean=false;

    healthStatus:  HealthStatus=HealthStatus.NORMAL;

    dustLevel: number=1;

    weapons: ItemManagement.Weapon[];
    armor: ItemManagement.Armor[];
    inventory: ItemManagement.Item[];

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