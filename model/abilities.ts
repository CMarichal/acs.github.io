import { CapacitiesCommons, Capacity } from "./capacities";
import { SimpleStats } from "./stats";

export class Ability {
    key: string = "";
    name: string = "";
    effects: string = "";
    modifiers: SimpleStats = {};
    embededCapacity: Capacity = null;
    linkedAbilities: string[];
    icon: string="";
}



export namespace AbilitiesCommons {
    export const ABILITY_C1C: Ability = {
        key: "C1C",
        name: "Connaissance d'Auriga",
        effects: "+20 au savoir 'Connaissances d’Auriga'. Octroie le savoir s’il n’était pas acquis.",
        modifiers: {"KNL-AUR":20},
        embededCapacity: null,
        linkedAbilities: ["C2L", "C2R"],
        icon:""
    }

    export const ABILITY_C2L: Ability = {
        key: "C2L",
        name: "Entrainement vigoureux",
        effects: "+10 à une compétence de Vigueur qui n’est pas votre meilleure compétence de la catégorie",
        modifiers: {},
        embededCapacity: null,
        linkedAbilities: ["C1L", "J2C", "C3L", "C3C"],
        icon:""
    }

    export const ABILITY_C2R: Ability = {
        key: "C2R",
        name: CapacitiesCommons.CAPACITY_QUICK_FIRST_AIDS.name,
        effects: CapacitiesCommons.CAPACITY_QUICK_FIRST_AIDS.effects,
        modifiers: {},
        embededCapacity: CapacitiesCommons.CAPACITY_QUICK_FIRST_AIDS,
        linkedAbilities: ["C1L", "R2L", "C3C", "C3R"],
        icon:""
    }

    export const ABILITY_C3L: Ability = {
        key: "C3L",
        name: "Affutage d’intellect",
        effects: "+10 à une compétence d’Intelligence qui n’est pas votre meilleure compétence de la catégorie",
        modifiers: {},
        embededCapacity: null,
        linkedAbilities: ["C2L", "C4L"],
        icon:""
    }

    export const ABILITY_C3C: Ability = {
        key: "C3C",
        name: "Méthodes d’influence charismatique",
        effects: "+10 à une compétence de Charisme qui n’est pas votre meilleure compétence de la catégorie",
        modifiers: {},
        embededCapacity: null,
        linkedAbilities: ["C2L", "C2R", "C4C"],
        icon:""
    }

    export const ABILITY_C3R: Ability = {
        key: "C3R",
        name: "Prestidigitation habile",
        effects: "+10 à une compétence de Dextérité qui n’est pas votre meilleure compétence de la catégorie",
        modifiers: {},
        embededCapacity: null,
        linkedAbilities: ["C2R", "J2L", "J4L"],
        icon:""
    }

    export const ABILITY_C4L: Ability = {
        key: "C4L",
        name: "Polyvalence",
        effects: "+10 à une compétence d’une catégorie dont la valeur pure n’est pas votre meilleure valeur pure de catégorie",
        modifiers: {},
        embededCapacity: null,
        linkedAbilities: ["C5C", "C3L"],
        icon:""
    }

    export const ABILITY_C4C: Ability = {
        key: "C4C",
        name: CapacitiesCommons.CAPACITY_TALENTED_COMIC.name,
        effects: CapacitiesCommons.CAPACITY_TALENTED_COMIC.effects,
        modifiers: {},
        embededCapacity: CapacitiesCommons.CAPACITY_TALENTED_COMIC,
        linkedAbilities: ["C5C", "C3C", "C3R"],
        icon:""
    }

    export const ABILITY_C4R: Ability = {
        key: "C4R",
        name: "Destinée exceptionnelle",
        effects: "Vous pouvez lancer le dé de destin 2 fois en début de séance. Notez que vous ne pouvez avoir qu’un point de destin maximum.",
        modifiers: {},
        embededCapacity: null,
        linkedAbilities: ["C3R", "C5C"],
        icon:""
    }

    export const ABILITY_C5C: Ability = {
        key: "C5C",
        name: CapacitiesCommons.CAPACITY_STEEL_FISTS.name,
        effects: CapacitiesCommons.CAPACITY_STEEL_FISTS.effects,
        modifiers: {},
        embededCapacity: CapacitiesCommons.CAPACITY_STEEL_FISTS,
        linkedAbilities: ["C4L", "C4C", "C4R", "J5R", "R5L"],
        icon:""
    }
}















export namespace AbilitiesJob {

    export namespace Melee {

        export const ABILITY_J1C: Ability = {
            key: "J1C",
            name: "Pharmacie de terrain",
            effects: "+15 au Savoir-faire « premiers soins »",
            modifiers: {"KNH-FSA":15},
            embededCapacity: null,
            linkedAbilities: ["J2C"],
            icon:""
        }

        export const ABILITY_J2C: Ability = {
            key: "J2C",
            name: "Exercices intensifs",
            effects: "+10 à votre compétence de Vigueur la plus basse",
            modifiers: {},
            embededCapacity: null,
            linkedAbilities: ["J1C", "J3C", "C2L"],
            icon:""
        }

        export const ABILITY_J3C: Ability = {
            key: "J3C",
            name: "Nerfs de la guerre",
            effects: "+10 en Courage et Commandement",
            modifiers: {"BRV":10, "LDS":10},
            embededCapacity: null,
            linkedAbilities: ["J2C", "J4L"],
            icon:""
        }

        export const ABILITY_J4L: Ability = {
            key: "J4L",
            name: CapacitiesCommons.CAPACITY_STEEL_GUARD.name,
            effects: CapacitiesCommons.CAPACITY_STEEL_GUARD.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_STEEL_GUARD,
            linkedAbilities: ["J3C", "J4R"],
            icon:""
        }

        export const ABILITY_J4R: Ability = {
            key: "J4R",
            name: CapacitiesCommons.CAPACITY_BATTLE_CRY.name,
            effects: CapacitiesCommons.CAPACITY_BATTLE_CRY.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_BATTLE_CRY,
            linkedAbilities: ["J4L", "J5R"],
            icon:""
        }

        export const ABILITY_J5R: Ability = {
            key: "J5R",
            name: CapacitiesCommons.CAPACITY_KEEP_COOL.name,
            effects: CapacitiesCommons.CAPACITY_KEEP_COOL.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_KEEP_COOL,
            linkedAbilities: ["J4R","C5C"],
            icon:""
        }
    }


    export namespace Ranged {

        export const ABILITY_J1C: Ability = {
            key: "J1C",
            name: "Corps agile",
            effects: "+5 en athlétisme et esquive",
            modifiers: {"ATH":5,"DDG":5},
            embededCapacity: null,
            linkedAbilities: ["J2C"],
            icon:""
        }

        export const ABILITY_J2C: Ability = {
            key: "J2C",
            name: "OEil d’aigle",
            effects: "+ 10 en perception",
            modifiers: {"PCP":10},
            embededCapacity: null,
            linkedAbilities: ["J1C", "J3C"],
            icon:""
        }

        export const ABILITY_J3C: Ability = {
            key: "J3C",
            name: "Expert en rangement",
            effects: "+10 en préparation",
            modifiers: {"PRP":10},
            embededCapacity: null,
            linkedAbilities: ["J2C", "J4L"],
            icon:""
        }

        export const ABILITY_J4L: Ability = {
            key: "J4L",
            name: CapacitiesCommons.CAPACITY_BURST_SHOOTING.name,
            effects: CapacitiesCommons.CAPACITY_BURST_SHOOTING.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_BURST_SHOOTING,
            linkedAbilities: ["J3C", "J4R"],
            icon:""
        }

        export const ABILITY_J4R: Ability = {
            key: "J4R",
            name: "Equilibre parfait",
            effects: "+10 à votre compétence de dextérité la plus basse",
            modifiers: {},
            embededCapacity: null,
            linkedAbilities: ["J4L", "J5R"],
            icon:""
        }

        export const ABILITY_J5R: Ability = {
            key: "J5R",
            name: CapacitiesCommons.CAPACITY_CUSTOM_AMMOS.name,
            effects: CapacitiesCommons.CAPACITY_CUSTOM_AMMOS.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_CUSTOM_AMMOS,
            linkedAbilities: ["J4R"],
            icon:""
        }
    }

    export namespace Support {

        export const ABILITY_J1C: Ability = {
            key: "J1C",
            name: "Stratège hors-pair",
            effects: "+5 en athlétisme et esquive",
            modifiers: {"ATH":5,"DDG":5},
            embededCapacity: null,
            linkedAbilities: ["J2C"],
            icon:""
        }

        export const ABILITY_J2C: Ability = {
            key: "J2C",
            name: "OEil de corbeau",
            effects: "+10 en perception et discrétion",
            modifiers: {"PCP":10, "SNK":10},
            embededCapacity: null,
            linkedAbilities: ["J1C", "J3L", "C2L"],
            icon:""
        }

        export const ABILITY_J3L: Ability = {
            key: "J3L",
            name: CapacitiesCommons.CAPACITY_PRESTO_ALLEGRO.name,
            effects: CapacitiesCommons.CAPACITY_PRESTO_ALLEGRO.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_PRESTO_ALLEGRO,
            linkedAbilities: ["J2C"],
            icon:""
        }

        export const ABILITY_J3R: Ability = {
            key: "J3R",
            name: "Lumière dans les ténèbres",
            effects: "+10 à votre compétence d’Intelligence la plus basse (influe sur tous les savoirs et savoir-faire)",
            modifiers: {},
            embededCapacity: null,
            linkedAbilities: ["C2C", "J4R"],
            icon:""
        }

        export const ABILITY_J4R: Ability = {
            key: "J4R",
            name: CapacitiesCommons.CAPACITY_TEAM_COORDINATION.name,
            effects: CapacitiesCommons.CAPACITY_TEAM_COORDINATION.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_TEAM_COORDINATION,
            linkedAbilities: ["J3R", "J5R"],
            icon:""
        }

        export const ABILITY_J5R: Ability = {
            key: "J5R",
            name: "Préparé au pire",
            effects: "+10 en Préparation et Courage",
            modifiers: {"PRP":10, "BRV":10},
            embededCapacity: null,
            linkedAbilities: ["J4R", "C5C"],
            icon:""
        }
    }
}










export namespace AbilitiesRace {

    export namespace Vaulter {

        export const ABILITY_R1C: Ability = {
            key: "R1C",
            name: CapacitiesCommons.CAPACITY_ALCHEMIC_SCIENCES.name,
            effects: CapacitiesCommons.CAPACITY_ALCHEMIC_SCIENCES.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_ALCHEMIC_SCIENCES,
            linkedAbilities: ["R2L"],
            icon:""
        }

        export const ABILITY_R2L: Ability = {
            key: "R2L",
            name: "Mécanique utilitariste",
            effects: "+20 au Savoir-faire « Mécanique », +10 en Roublardise",
            modifiers: {"KNH-MEC":20, "STL":10},
            embededCapacity: null,
            linkedAbilities: ["R1C", "C2R","R3L", "R3R"],
            icon:""
        }

        export const ABILITY_R3L: Ability = {
            key: "R3L",
            name: CapacitiesCommons.CAPACITY_INGENIOUS_MIND.name,
            effects: CapacitiesCommons.CAPACITY_INGENIOUS_MIND.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_INGENIOUS_MIND,
            linkedAbilities: ["R2L","R4L", "C3R"],
            icon:""
        }

        export const ABILITY_R3R: Ability = {
            key: "R3R",
            name: "Endurcissement",
            effects: "+5 en Résistance et Préparation",
            modifiers: {"RES":5, "PRP":5},
            embededCapacity: null,
            linkedAbilities: ["R2L","R4L"],
            icon:""
        }

        export const ABILITY_R4L: Ability = {
            key: "R4L",
            name: "Commun des mortels",
            effects: "+5 en Discrétion",
            modifiers: {"SNK":5},
            embededCapacity: null,
            linkedAbilities: ["C4R","R3L","R2R", "R5C"],
            icon:""
        }
        
        export const ABILITY_R5C: Ability = {
            key: "R5C",
            name: CapacitiesCommons.CAPACITY_DUST_PUPPETEER.name,
            effects: CapacitiesCommons.CAPACITY_DUST_PUPPETEER.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_DUST_PUPPETEER,
            linkedAbilities: ["R4L"],
            icon:""
        }
    }

    export namespace ArdentMage {

        export const ABILITY_R1C: Ability = {
            key: "R1C",
            name: "Renaissance dans la douleur",
            effects: "+5 en Résistance",
            modifiers: {"RES":5},
            embededCapacity: null,
            linkedAbilities: ["R2L", "R3R"],
            icon:""
        }

        export const ABILITY_R2L: Ability = {
            key: "R2L",
            name: CapacitiesCommons.CAPACITY_DUST_ENCHANTEMENT.name,
            effects: CapacitiesCommons.CAPACITY_DUST_ENCHANTEMENT.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_DUST_ENCHANTEMENT,
            linkedAbilities: ["C2R","R3L", "R1C"],
            icon:""
        }

        export const ABILITY_R3L: Ability = {
            key: "R3L",
            name: CapacitiesCommons.CAPACITY_EXECUTION.name,
            effects: CapacitiesCommons.CAPACITY_EXECUTION.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_EXECUTION,
            linkedAbilities: ["R2L","R4L", "R3R", "C3R"],
            icon:""
        }

        export const ABILITY_R3R: Ability = {
            key: "R3R",
            name: "Sciences académiques",
            effects: "+10 à toutes les Savoirs",
            modifiers: {},
            embededCapacity: null,
            linkedAbilities: ["R1C", "R3L","R5L"],
            icon:""
        }

        export const ABILITY_R4L: Ability = {
            key: "R4L",
            name: "Expertise en torture",
            effects: "+10 en Intimidation et +5 en Persuasion+",
            modifiers: {"ITM":5, "PRS":5},
            embededCapacity: null,
            linkedAbilities: ["C4R","R3L", "R5L"],
            icon:""
        }
        
        export const ABILITY_R5L: Ability = {
            key: "R5L",
            name: CapacitiesCommons.CAPACITY_BURNING_SOUL.name,
            effects: CapacitiesCommons.CAPACITY_BURNING_SOUL.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_BURNING_SOUL,
            linkedAbilities: ["C4R","R4L","R3R"],
            icon:""
        }
    }

    export namespace Drakken {

        export const ABILITY_R1C: Ability = {
            key: "R1C",
            name: "Ecailles épaisses",
            effects: "+5 en Résistance",
            modifiers: {"RES":5},
            embededCapacity: null,
            linkedAbilities: ["R2L", "R3R"],
            icon:""
        }

        export const ABILITY_R2L: Ability = {
            key: "R2L",
            name: CapacitiesCommons.CAPACITY_INTIMIDATING_CRY.name,
            effects: CapacitiesCommons.CAPACITY_INTIMIDATING_CRY.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_INTIMIDATING_CRY,
            linkedAbilities: ["R1C", "C1C","C2R","R4L"],
            icon:""
        }

        export const ABILITY_R3R: Ability = {
            key: "R3R",
            name: "Esthète d’Auriga",
            effects: "+10 au Savoir 'Connaissance d’Auriga' et en +10 en étiquette",
            modifiers: {"KNL-AUR":10, "ETQ":10},
            embededCapacity: CapacitiesCommons.CAPACITY_EXECUTION,
            linkedAbilities: ["R1C","R4L", "R5R"],
            icon:""
        }

        export const ABILITY_R4L: Ability = {
            key: "R4L",
            name: CapacitiesCommons.CAPACITY_FEDERATION_INFLUENCE.name,
            effects: CapacitiesCommons.CAPACITY_FEDERATION_INFLUENCE.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_FEDERATION_INFLUENCE,
            linkedAbilities: ["C3R","R2L","R3R", "R5R", "R5L"],
            icon:""
        }
        
        export const ABILITY_R5L: Ability = {
            key: "R5L",
            name: "Archiviste passionné",
            effects: "+20 au savoir 'Connaissance des Endless'",
            modifiers: {"KNL-END":20},
            embededCapacity: null,
            linkedAbilities: ["R4L","C4R"],
            icon:""
        }

        export const ABILITY_R5R: Ability = {
            key: "R5R",
            name: CapacitiesCommons.CAPACITY_BURNING_SOUL.name,
            effects: CapacitiesCommons.CAPACITY_BURNING_SOUL.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_BURNING_SOUL,
            linkedAbilities: ["R4L","R3R"],
            icon:""
        }
    }

    export namespace SistersOfMercy {

        export const ABILITY_R1C: Ability = {
            key: "R1C",
            name: "Noble cause",
            effects: "+5 en Courage et Etiquette",
            modifiers: {"BRV":5, "ETQ":5},
            embededCapacity: null,
            linkedAbilities: ["R3R"],
            icon:""
        }

        export const ABILITY_R2L: Ability = {
            key: "R2L",
            name: CapacitiesCommons.CAPACITY_SISTERS_BLESSING.name,
            effects: CapacitiesCommons.CAPACITY_SISTERS_BLESSING.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_SISTERS_BLESSING,
            linkedAbilities: ["C1C", "C2R","R3R"],
            icon:""
        }

        export const ABILITY_R3R: Ability = {
            key: "R3R",
            name: CapacitiesCommons.CAPACITY_ESPRIT_DE_CORPS.name,
            effects: CapacitiesCommons.CAPACITY_ESPRIT_DE_CORPS.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_ESPRIT_DE_CORPS,
            linkedAbilities: ["R1C","R2L", "R4C","R5R"],
            icon:""
        }

        export const ABILITY_R4C: Ability = {
            key: "R4C",
            name: "Armure des justes",
            effects: "+5 en Résistance",
            modifiers: {"RES":5},
            embededCapacity: null,
            linkedAbilities: ["C3R","R3R", "R5R", "R5L"],
            icon:""
        }
        
        export const ABILITY_R5L: Ability = {
            key: "R5L",
            name: "Abondance de foi",
            effects: "+10 en Préparation, +10 au Savoir-faire « Premier soins »",
            modifiers: {"KNH-FSA":10,"PRP":10},
            embededCapacity: null,
            linkedAbilities: ["R4C","C4R"],
            icon:""
        }

        export const ABILITY_R5R: Ability = {
            key: "R5R",
            name: CapacitiesCommons.CAPACITY_NO_MERCY_MISERICORD.name,
            effects: CapacitiesCommons.CAPACITY_NO_MERCY_MISERICORD.effects,
            modifiers: {},
            embededCapacity: CapacitiesCommons.CAPACITY_NO_MERCY_MISERICORD,
            linkedAbilities: ["R4C","R3R"],
            icon:""
        }
    }
}