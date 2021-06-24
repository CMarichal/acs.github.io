export class Race {
    name: string;
}

export namespace Races {
    export const RACE_VAULTERS: Race = {
        name: "Exilés"
    }

    export const RACE_WILD_WALKERS: Race = {
        name: "Indomptés"
    }

    export const RACE_BROKEN_LORDS: Race = {
        name: "Seigneurs Déchus"
    }

    export const RACE_ROVING_CLANS: Race = {
        name: "Clans Errants"
    }

    export const RACE_DRAKKEN: Race = {
        name: "Drakken"
    }

    export const RACE_KAPAKU: Race = {
        name: "Kapaku"
    }

    export const RACE_FORGOTTENS: Race = {
        name: "Oubliés"
    }

    export const RACE_SISTER_OF_MERCY: Race = {
        name: "Soeurs de la Miséricorde"
    }

    export const RACE_MAGTAY: Race = {
        name: "Magtay"
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

