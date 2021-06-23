
export abstract class HealthStatus {
    static description: string;
    static malus: number;
    static recovery: string;

    get description() {return HealthStatus.description;}
    get malus() {return HealthStatus.malus;}
    get recovery() {return HealthStatus.recovery;}
}

export abstract class HealthStatusNormal extends HealthStatus{
    static description = "Normal";
    static malus = 0;
    static recovery = "-";
}

abstract class HealthStatusDizzy extends HealthStatus{
    static description = "Secoué";
    static malus = -5;
    static recovery = "5 min";
}

abstract class HealthStatusSlightlyHarmed extends HealthStatus{
    static description = "Légèrement blessé";
    static malus = -10;
    static recovery = "1 jour / Premiers soins";
}

abstract class HealthStatusSeverelyHarmed extends HealthStatus{
    static description = "Gravement blessé";
    static malus = -25;
    static recovery = "1 semaine / chirurgie";
}

abstract class HealthStatusDead extends HealthStatus{
    static description = "Mort";
    static malus = 0;
    static recovery = "-";
}

export const HealthStatusList = [
    HealthStatusNormal, 
    HealthStatusDizzy, 
    HealthStatusSlightlyHarmed, 
    HealthStatusSeverelyHarmed, 
    HealthStatusDead]