import { AbilitiesRace, Ability } from "./abilities";

export class Race {
    name: string;
    abilities: Ability[] = [];
    abilityTreeImg: string = "";
}

export namespace Races {
    export const RACE_VAULTERS: Race = {
        name: "Exilés",
        abilities: [
            AbilitiesRace.Vaulter.ABILITY_R1C,
            AbilitiesRace.Vaulter.ABILITY_R2L,
            AbilitiesRace.Vaulter.ABILITY_R3L,
            AbilitiesRace.Vaulter.ABILITY_R3R,
            AbilitiesRace.Vaulter.ABILITY_R4L,
            AbilitiesRace.Vaulter.ABILITY_R5C
        ],
        abilityTreeImg:"v-abtree"
    }

    export const RACE_WILD_WALKERS: Race = {
        name: "Indomptés",
        abilities: [],
        abilityTreeImg:"i-abtree"
    }

    export const RACE_ARDENT_MAGES: Race = {
        name: "Mages Ardents",
        abilities: [
            AbilitiesRace.ArdentMage.ABILITY_R1C,
            AbilitiesRace.ArdentMage.ABILITY_R2L,
            AbilitiesRace.ArdentMage.ABILITY_R3L,
            AbilitiesRace.ArdentMage.ABILITY_R3R,
            AbilitiesRace.ArdentMage.ABILITY_R4L,
            AbilitiesRace.ArdentMage.ABILITY_R5L
        ],
        abilityTreeImg:"am-abtree"
    }

    export const RACE_BROKEN_LORDS: Race = {
        name: "Seigneurs Déchus",
        abilities: [],
        abilityTreeImg:"bl-abtree"
    }

    export const RACE_ROVING_CLANS: Race = {
        name: "Clans Errants",
        abilities: [],
        abilityTreeImg:"rc-abtree"
    }

    export const RACE_DRAKKEN: Race = {
        name: "Drakken",
        abilities: [
            AbilitiesRace.Drakken.ABILITY_R1C,
            AbilitiesRace.Drakken.ABILITY_R2L,
            AbilitiesRace.Drakken.ABILITY_R3R,
            AbilitiesRace.Drakken.ABILITY_R4L,
            AbilitiesRace.Drakken.ABILITY_R5L,
            AbilitiesRace.Drakken.ABILITY_R5R
        ],
        abilityTreeImg:"d-abtree"
    }

    export const RACE_KAPAKU: Race = {
        name: "Kapaku",
        abilities: [],
        abilityTreeImg:"k-abtree"
    }

    export const RACE_FORGOTTENS: Race = {
        name: "Oubliés",
        abilities: [],
        abilityTreeImg:"f-abtree"
    }

    export const RACE_SISTER_OF_MERCY: Race = {
        name: "Soeurs de la Miséricorde",
        abilities: [
            AbilitiesRace.SistersOfMercy.ABILITY_R1C,
            AbilitiesRace.SistersOfMercy.ABILITY_R2L,
            AbilitiesRace.SistersOfMercy.ABILITY_R3R,
            AbilitiesRace.SistersOfMercy.ABILITY_R4C,
            AbilitiesRace.SistersOfMercy.ABILITY_R5L,
            AbilitiesRace.SistersOfMercy.ABILITY_R5R
        ],
        abilityTreeImg:"som-abtree"
    }

    export const RACE_MAGTAY: Race = {
        name: "Magtay",
        abilities: [],
        abilityTreeImg:"o-abtree"
    }

    export const RacesList: Race[] = [
        RACE_VAULTERS,
        RACE_BROKEN_LORDS,
        RACE_ARDENT_MAGES,
        RACE_DRAKKEN,
        RACE_FORGOTTENS,
        RACE_KAPAKU,
        RACE_SISTER_OF_MERCY,
        RACE_ROVING_CLANS,
        RACE_WILD_WALKERS,
        RACE_MAGTAY
    ]
}

