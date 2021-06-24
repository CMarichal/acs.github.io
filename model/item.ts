import { MaterialCommons } from "data/materialsBDD";
import { SimpleStats } from "./stats";

export namespace ItemManagement {
    export class Item {
        id:number=0;
        name: string="";
        effects: string="";
        statModifiers: SimpleStats = {};
    }
    
    export abstract class Material {
        name: string;
        modifier: number;
    }
    
    export class MaterialUnknown extends Material {
    }
    
    export class MaterialHeavy extends Material {
    }
    
    export class MaterialLight extends Material {
    }
    
    export class MaterialDust extends Material {
    }
    
    
    abstract class Equipement extends Item {
        type: string="";
        material: Material = MaterialCommons.MATERIAL_UNKNOWN;
        equiped: boolean = false;
    }
    
    export class Weapon extends Equipement {
    }
    
    export class Armor extends Equipement {
    }
}
