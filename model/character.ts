import { Race } from "./race";
import { Job } from "./job";
import { ItemManagement } from "./item";
import { HealthStatus, HealthStatusNormal } from "./healthStatus";
import { Stats } from "./stats";


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

    healthStatus:  HealthStatus= HealthStatusNormal;

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