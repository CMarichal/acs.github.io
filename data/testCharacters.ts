import { Character } from "model/character";
import { JobMelee } from "model/job";
import { Race, RaceBrokenLord } from "model/race";
import { HealthStatus } from "model/character";

export const testCharacter: Character = new Character("Bob Morane", new RaceBrokenLord(), new JobMelee());

export const testCharacters: Character[] = [
    {
        id:0,
        name:"Bob Morane",
        race:new RaceBrokenLord(),
        job:new JobMelee(),
        subgroup:"Nouvelle Ambre",
        goal:"Tuer le Comte Sanglant",
        archetype:"Vengeur solitaire",
        destinyPoint:true,
        healthStatus: HealthStatus.DIZZY,
        dustLevel: 3,
        stats: {
            vigor: {
                pureValue: 75,
                skills: {
                    "athlethics": {
                        name: "Athlétisme",
                        baseValue: 35,
                        modifier: 2,
                    },
                    "resistance": {
                        name: "Résistance",
                        baseValue: 35,
                        modifier: -2,
                    },
                    "melee": {
                        name: "Mêlee",
                        baseValue: 35,
                        modifier: +3,
                    },
                    "intimidation": {
                        name: "Intimidation",
                        baseValue: 35,
                        modifier: +3,
                    }
                }
            },
            dexterity: {
                pureValue: 65,
                skills: {
                    "sneak": {
                        name: "Discrétion",
                        baseValue: 35,
                        modifier: 2,
                    },
                    "dodge": {
                        name: "Esquive",
                        baseValue: 35,
                        modifier: -2,
                    },
                    "stealth": {
                        name: "Roublardise",
                        baseValue: 35,
                        modifier: +3,
                    },
                    "shoot": {
                        name: "Tir",
                        baseValue: 35,
                        modifier: +3,
                    }
                }
            },
            intelligence: {
                pureValue: 53,
                skills: {
                    "knowledge": {
                        name: "Savoir",
                        baseValue: 35,
                        modifier: 2,
                    },
                    "perception": {
                        name: "Perception",
                        baseValue: 35,
                        modifier: -2,
                    },
                    "preparation": {
                        name: "Préparation",
                        baseValue: 35,
                        modifier: +3,
                    },
                    "know-how": {
                        name: "Savoir-faire",
                        baseValue: 35,
                        modifier: +3,
                    }
                },
                knowHows: {},
                knowledges: {}
            },
            charisma: {
                pureValue: 39,
                skills: {
                    "persuasion": {
                        name: "Persuasion",
                        baseValue: 35,
                        modifier: 2,
                    },
                    "leadership": {
                        name: "Commandement",
                        baseValue: 35,
                        modifier: -2,
                    },
                    "bravery": {
                        name: "Courage",
                        baseValue: 35,
                        modifier: +3,
                    },
                    "etiquette": {
                        name: "Etiquette",
                        baseValue: 35,
                        modifier: +3,
                    }
                }
            }
        },
        inventory: [],
        weapons: [],
        armor: [],
        capacities: []
    }
]