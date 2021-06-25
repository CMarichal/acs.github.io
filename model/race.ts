import { AbilitiesRace, Ability } from "./abilities";

export class Race {
    name: string;
    abilities: Ability[] = [];
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
        ]
    }

    export const RACE_WILD_WALKERS: Race = {
        name: "Indomptés",
        abilities: []
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
        ]
    }

    export const RACE_BROKEN_LORDS: Race = {
        name: "Seigneurs Déchus",
        abilities: []
    }

    export const RACE_ROVING_CLANS: Race = {
        name: "Clans Errants",
        abilities: []
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
        ]
    }

    export const RACE_KAPAKU: Race = {
        name: "Kapaku",
        abilities: []
    }

    export const RACE_FORGOTTENS: Race = {
        name: "Oubliés",
        abilities: []
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
        ]
    }

    export const RACE_MAGTAY: Race = {
        name: "Magtay",
        abilities: []
    }

    export const RacesList: Race[] = [
        RACE_VAULTERS,
        RACE_BROKEN_LORDS,
        RACE_DRAKKEN,
        RACE_FORGOTTENS,
        RACE_KAPAKU,
        RACE_SISTER_OF_MERCY,
        RACE_ROVING_CLANS,
        RACE_WILD_WALKERS,
        RACE_MAGTAY
    ]
}

