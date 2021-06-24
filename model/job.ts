export class Job {
    name: string;
}

export namespace Jobs {
    export const JOB_MELEE: Job = {
        name: "Combattant"
    }
    export const JOB_RANGED: Job = {
        name: "A distance"
    }

    export const JOB_SUPPORT: Job = {
        name: "Soutien"
    }

    export const JOB_CAVALRY: Job = {
        name: "Monté"
    }

    export const JobList: Job[] = [
        JOB_MELEE,
        JOB_RANGED,
        JOB_SUPPORT,
        JOB_CAVALRY
    ]
}
