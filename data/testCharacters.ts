import { Character } from "model/character";
import { Jobs } from "model/job";
import { Races } from "model/race";
import { HealthStatuses } from "model/healthStatus";

export const testCharacter: Character = new Character("Bob Morane", Races.RACE_BROKEN_LORDS, Jobs.JOB_MELEE);

export const testCharacters: Character[] = [
    {
        id:0,
        name:"Bob Morane",
        race: Races.RACE_DRAKKEN,
        job: Jobs.JOB_MELEE,
        subgroup:"Nouvelle Ambre",
        goal:"Tuer le Comte Sanglant",
        archetype:"Vengeur solitaire",
        destinyPoint:true,
        healthStatus: HealthStatuses.HEALTH_NORMAL,
        dustLevel: 3,
        stats: {
            vigor: {
                pureValue: 75,
                key:"VIG",
                athletics: {
                    name: "Athlétisme",
                    baseValue: 35,
                    modifier: 2,
                    expert: false,
                    key:"ATH"
                },
                resistance: {
                    name: "Résistance",
                    baseValue: 35,
                    modifier: -2,
                    expert: false,
                    key:"RES"
                },
                melee: {
                    name: "Mêlée",
                    baseValue: 35,
                    modifier: +3,
                    expert: false,
                    key:"MEL"
                },
                intimidation: {
                    name: "Intimidation",
                    baseValue: 35,
                    modifier: +3,
                    expert: false,
                    key:"ITM"
                    }
                },
            dexterity: {
                pureValue: 65,
                key:"DEX",
                sneak: {
                    name: "Discrétion",
                    baseValue: 35,
                    modifier: 2,
                    expert: false,
                    key:"SNK"
                    },
                dodge: {
                    name: "Esquive",
                    baseValue: 35,
                    modifier: -2,
                    expert: false,
                    key:"DDG"
                    },
                stealth: {
                    name: "Roublardise",
                    baseValue: 35,
                    modifier: +3,
                    expert: false,
                    key:"STL"
                    },
                throw: {
                    name: "Tir",
                    baseValue: 35,
                    modifier: +3,
                    expert: false,
                    key:"THR"
                    }
                },  
            intelligence: {
                pureValue: 53,
                key:"INT",
                knowledge: {
                    name:"Savoir",
                    baseValue: 35,
                    modifier: 2,
                    expert: false,
                    key:"KNL"
                    },
                perception: {
                    name:"Perception",
                    baseValue: 35,
                    modifier: -2,
                    expert: false,
                    key:"PCP"
                    },
                preparation: {
                    name:"Préparation",
                    baseValue: 35,
                    modifier: 3,
                    expert: false,
                    key:"PRP"
                    },
                knowHow: {
                    name: "Savoir-faire",
                    baseValue: 35,
                    modifier: +3,
                    expert: false,
                    key:"KNH"
                    },
                knowHows: [
                    {
                        name: "Charpenterie",
                        baseValue: 30,
                        modifier: 8,
                        expert: false,
                        key:"KNH-CHP"
                    }
                ],
                knowledges: [
                     {
                        name: "Culture d'Auriga",
                        baseValue: 30,
                        modifier: 8,
                        expert: false,
                        key:"KNL-AUR",
                    }       
                ]
            },
            charisma: {
                pureValue: 39,
                key:"CHM",
                persuasion: {
                    name: "Persuasion",
                    baseValue: 35,
                    modifier: 2,
                    expert: false,
                    key:"PRS"
                    },
                leadership: {
                    name: "Commandement",
                    baseValue: 35,
                    modifier: -2,
                    expert: false,
                    key:"LDS"
                    },
                bravery: {
                    name: "Courage",
                    baseValue: 35,
                    modifier: +3,
                    expert: false,
                    key:"BRV"
                    },
                etiquette: {
                    name: "Etiquette",
                    baseValue: 35,
                    modifier: +3,
                    expert: false,
                    key:"ETQ"
                    }
            },
        },
        inventory: [],
        weapons: [],
        armor: [],
        capacities: [],
        abilitiesCommon: [],
        abilitiesJob: [],
        abilitiesRace: []
    }
]