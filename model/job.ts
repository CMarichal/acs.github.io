export abstract class Job {
    name: string;
}

class JobRanged extends Job {
    name = "A distance";
}

class JobMelee extends Job {
    name = "Combattant";
}

class JobSupport extends Job {
    name = "Soutien";
}

class JobCavalry extends Job {
    name = "Monté";
}