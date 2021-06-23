export abstract class Job {
    static designation: string;
    get designation() {return Job.designation;}
}

export abstract class JobRanged extends Job {
    static designation = "A distance";
}

export abstract class JobMelee extends Job {
    static designation = "Combattant";
}

export abstract class JobSupport extends Job {
    static designation = "Soutien";
}

export abstract class JobCavalry extends Job {
    static designation = "Monté";
}