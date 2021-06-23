import { Character } from "model/character";
import { JobMelee } from "model/job";
import { RaceBrokenLord } from "model/race";
import { HealthStatusNormal } from "model/healthStatus";

export const testCharacter: Character = new Character("Bob Morane", RaceBrokenLord, JobMelee);

export const testCharacters: Character[] = [
    {
        id:0,
        name:"Bob Morane",
        race: RaceBrokenLord,
        job: JobMelee,
        subgroup:"Nouvelle Ambre",
        goal:"Tuer le Comte Sanglant",
        archetype:"Vengeur solitaire",
        destinyPoint:true,
        healthStatus: HealthStatusNormal,
        dustLevel: 3,
        stats: {
            vigor: {
                pureValue: 75,
                athletics: {
                    name: "Athlétisme",
                    baseValue: 35,
                    modifier: 2,
                },
                resistance: {
                    name: "Résistance",
                    baseValue: 35,
                    modifier: -2,
                },
                melee: {
                    name: "Mêlée",
                    baseValue: 35,
                    modifier: +3,
                },
                intimidation: {
                    name: "Intimidation",
                    baseValue: 35,
                    modifier: +3,
                    },
                getSkills() {
                        return [this.athletics, this.intimidation, this.melee, this.resistance];
                    }
                },
            dexterity: {
                pureValue: 65,
                sneak: {
                    name: "Discrétion",
                    baseValue: 35,
                    modifier: 2,
                    },
                dodge: {
                    name: "Esquive",
                    baseValue: 35,
                    modifier: -2,
                    },
                stealth: {
                    name: "Roublardise",
                    baseValue: 35,
                    modifier: +3,
                    },
                throw: {
                    name: "Tir",
                    baseValue: 35,
                    modifier: +3,
                    },
                    getSkills() {return [this.sneak, this.dodge, this.stealth, this.throw];}
                },  
            intelligence: {
                pureValue: 53,
                knowledge: {
                    name:"Savoir",
                    baseValue: 35,
                    modifier: 2,
                    },
                perception: {
                    name:"Perception",
                    baseValue: 35,
                    modifier: -2,
                    },
                preparation: {
                    name:"Préparation",
                    baseValue: 35,
                    modifier: 3,
                    },
                knowHow: {
                    name: "Savoir-faire",
                    baseValue: 35,
                    modifier: +3,
                    },
                knowHows: {
                    "Charpenterie":{
                        name: "Charpenterie",
                        baseValue: 30,
                        modifier: 8,
                    }
                },
                knowledges: {
                    "Culture d'Auriga": {
                        name: "Culture d'Auriga",
                        baseValue: 30,
                        modifier: 8,
                    }
                },
                getSkills() {
                    return [this.knowledge, this.perception, this.preparation, this.knowHow];
                }
            },
            charisma: {
                pureValue: 39,
                persuasion: {
                    name: "Persuasion",
                    baseValue: 35,
                    modifier: 2,
                    },
                leadership: {
                    name: "Commandement",
                    baseValue: 35,
                    modifier: -2,
                    },
                bravery: {
                    name: "Courage",
                    baseValue: 35,
                    modifier: +3,
                    },
                etiquette: {
                    name: "Etiquette",
                    baseValue: 35,
                    modifier: +3,
                    },
                getSkills() {return [this.persuasion, this.leadership, this.bravery, this.etiquette];}
                },
                
            },
        inventory: [],
        weapons: [],
        armor: [],
        capacities: []
    }
]