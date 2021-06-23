export abstract class Race {
    static designation: string;

    get designation() {return Race.designation};
}

export abstract class RaceWildWalker extends Race {
    static designation = "Indomptés";
}

export abstract class RaceVaulter extends Race {
    static designation = "Exilés";
}

export abstract class RaceBrokenLord extends Race {
    static designation = "Seigneurs Déchus";
}

export abstract class RaceRovingClan extends Race {
    static designation = "Clans Errants";
}

export abstract class RaceDrakken extends Race {
    static designation = "Drakken";
}

export abstract class RaceKapaku extends Race {
    static designation = "Kapaku";
}

export abstract class RaceForgotten extends Race {
    static designation = "Oubliés";
}

export abstract class RaceSisterOfMercy extends Race {
    static designation = "Soeurs de la Miséricorde";
}

export abstract class RaceMagtay extends Race {
    static designation = "Magtay";
}

export const RacesList: Race[] = [
    RaceWildWalker,
    RaceBrokenLord,
    RaceForgotten,
    RaceDrakken,
    RaceKapaku,
    RaceMagtay,
    RaceRovingClan,
    RaceSisterOfMercy,
    RaceVaulter
]