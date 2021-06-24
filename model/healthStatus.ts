
export class HealthStatus {
    description: string;
    malus: number;
    recovery: string;
}

export namespace HealthStatuses {
    export const HEALTH_NORMAL: HealthStatus = {
        description: "Normal",
        malus: 0,
        recovery: "-"
    }
    export const HEALTH_DIZZY: HealthStatus = {
        description : "Secoué",
        malus : -5,
        recovery : "5 min"
    }

    export const HEALTH_SLIGHTLY_HARMED: HealthStatus = {
        description : "Légèrement blessé",
        malus : -10,
        recovery : "1 jour / Premiers soins"
    }

    export const HEALTH_SEVERELY_HARMED: HealthStatus = {
        description: "Gravement blessé",
        malus: -25,
        recovery: "1 semaine / chirurgie"
    }

    export const HEALTH_DEAD: HealthStatus = {
        description: "Mort",
        malus: 0,
        recovery: "-"
    }

    export const HealthStatusesList: HealthStatus[] = [
        HEALTH_NORMAL,
        HEALTH_DIZZY,
        HEALTH_SLIGHTLY_HARMED,
        HEALTH_SEVERELY_HARMED,
        HEALTH_DEAD
    ]
}

