import { Race } from "./race";
import { Job } from "./job";
import { ItemManagement } from "./item";
import { HealthStatus, HealthStatuses } from "./healthStatus";
import { Stats } from "./stats";
import { Capacity } from "./capacities";
import { Ability, CharacterAbility } from "./abilities";

export class Character {
    
    id: number=1;

    name: string="";
    race: Race;
    job: Job;

    subgroup: string="";
    archetype: string="";
    goal: string="";
    
    stats: Stats= new Stats();

    destinyPoint: Boolean=false;

    healthStatus:  HealthStatus= HealthStatuses.HEALTH_NORMAL;

    dustLevel: number=1;

    weapons: ItemManagement.Weapon[] = [];
    armor: ItemManagement.Armor[] = [];
    inventory: ItemManagement.Item[] = [];

    capacities: Capacity[] = [];

    abilitiesCommon: CharacterAbility[] = [];
    abilitiesJob: CharacterAbility[] = [];
    abilitiesRace: CharacterAbility[] = [];

    constructor(
        name: string, 
        race: Race, 
        job: Job) 
    {
        this.name = name;
        this.race = race;
        this.job = job;
    }
}