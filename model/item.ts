
export namespace ItemManagement {
    export class Item {
        name: string="";
        effects: string="";
    }
    
    abstract class Material {
        name: string;
        modifier: number;
    }
    
    export class MaterialUnknown extends Material {
        name="";
        modifier=0;
    }
    
    export class MaterialHeavy extends Material {
        name="";
        modifier=0;
    }
    
    export class MaterialLight extends Material {
    }
    
    export class MaterialDust extends Material {
    }
    
    
    abstract class Equipement extends Item {
        type: string="";
        material: Material;
    }
    
    export class Weapon extends Equipement {
    }
    
    export class Armor extends Equipement {
    }
}
