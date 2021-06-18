export abstract class Job {
    name: string;
}

export class JobRanged extends Job {
    name = "A distance";
}

export class JobMelee extends Job {
    name = "Combattant";
}

export class JobSupport extends Job {
    name = "Soutien";
}

export class JobCavalry extends Job {
    name = "Monté";
}