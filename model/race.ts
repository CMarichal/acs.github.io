export abstract class Race {
    name: string;
}

export class RaceWildWalker extends Race {
    name = "Indomptés";
}

export class RaceVaulter extends Race {
    name = "Exilés";
}

export class RaceBrokenLord extends Race {
    name = "Seigneurs Déchus";
}

export class RaceRovingClan extends Race {
    name = "Clans Errants";
}

export class RaceDrakken extends Race {
    name = "Drakken";
}

export class RaceKapaku extends Race {
    name = "Kapaku";
}

export class RaceForgotten extends Race {
    name = "Oubliés";
}

export class RaceSisterOfMercy extends Race {
    name = "Soeurs de la Miséricorde";
}

export class RaceMagtay extends Race {
    name = "Magtay";
}

export const RacesList: Race[] = [
    new RaceWildWalker(),
    new RaceBrokenLord(),
    new RaceForgotten(),
    new RaceDrakken(),
    new RaceKapaku(),
    new RaceMagtay(),
    new RaceRovingClan(),
    new RaceSisterOfMercy(),
    new RaceVaulter()
]