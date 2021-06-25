import { AbilitiesCommons, AbilitiesJob, Ability } from "./abilities";

export class Job {
    name: string;
    abilities: Ability[];
    abilityTreeImg: string;
}

export namespace Jobs {
    export const JOB_MELEE: Job = {
        name: "Combattant",
        abilities: [
            AbilitiesJob.Melee.ABILITY_J1C,
            AbilitiesJob.Melee.ABILITY_J2C,
            AbilitiesJob.Melee.ABILITY_J3C,
            AbilitiesJob.Melee.ABILITY_J4L,
            AbilitiesJob.Melee.ABILITY_J4R,
            AbilitiesJob.Melee.ABILITY_J5R
        ],
        abilityTreeImg:"j-m-abtree"
    }
    export const JOB_RANGED: Job = {
        name: "A distance",
        abilities: [
            AbilitiesJob.Ranged.ABILITY_J1C,
            AbilitiesJob.Ranged.ABILITY_J2C,
            AbilitiesJob.Ranged.ABILITY_J3C,
            AbilitiesJob.Ranged.ABILITY_J4L,
            AbilitiesJob.Ranged.ABILITY_J4R,
            AbilitiesJob.Ranged.ABILITY_J5R
        ],
        abilityTreeImg:"j-r-abtree"
    }

    export const JOB_SUPPORT: Job = {
        name: "Soutien",
        abilities: [
            AbilitiesJob.Support.ABILITY_J1C,
            AbilitiesJob.Support.ABILITY_J2C,
            AbilitiesJob.Support.ABILITY_J3L,
            AbilitiesJob.Support.ABILITY_J3R,
            AbilitiesJob.Support.ABILITY_J4R,
            AbilitiesJob.Support.ABILITY_J5R
        ],
        abilityTreeImg:"j-s-abtree"
    }

    export const JOB_CAVALRY: Job = {
        name: "Monté",
        abilities: [],
        abilityTreeImg:"j-b-abtree"
    }

    export const JobList: Job[] = [
        JOB_MELEE,
        JOB_RANGED,
        JOB_SUPPORT,
        JOB_CAVALRY
    ]
}
