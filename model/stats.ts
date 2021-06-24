import { concat } from "rxjs";

class Skill {
    name: string;
    baseValue: number=0;
    modifier: number=0;

    constructor(name:string) {
        this.name = name;
    }
}

abstract class Category {
    pureValue: number=0;

    public abstract getSkills(): Skill[];
}

class CategoryVigor extends Category {
    athletics: Skill = new Skill("Athlétisme");
    intimidation: Skill = new Skill("Intimidation");
    melee: Skill = new Skill("Melee");
    resistance: Skill = new Skill("Résistance");

    getSkills() {
        return [this.athletics, this.intimidation, this.melee, this.resistance];
    }
}

class CategoryDexterity extends Category {
    sneak: Skill = new Skill("Discrétion");
    dodge: Skill = new Skill("Esquive");
    throw: Skill = new Skill("Tir");
    stealth: Skill = new Skill("Roublardise");

    getSkills() {
        return [this.sneak, this.dodge, this.throw, this.stealth];
    }
    
}

class CategoryIntelligence extends Category {
    knowledge: Skill = new Skill("Savoir");
    perception: Skill = new Skill("Perception");
    preparation: Skill = new Skill("Préparation");
    knowHow: Skill = new Skill("Savoir-faire");

    knowledges: {[name: string]: Skill};
    knowHows: {[name: string]: Skill};

    getSkills() {
        return [this.knowledge].concat(Object.values(this.knowledges))
                                .concat(this.perception)
                                .concat(this.preparation)
                                .concat(this.knowHow)
                                .concat(Object.values(this.knowHows));
    }
}


class CategoryCharisma extends Category {
    persuasion: Skill = new Skill("Persuasion");
    leadership: Skill = new Skill("Commandement");
    bravery: Skill = new Skill("Courage");
    etiquette: Skill = new Skill("Etiquette");

    getSkills() {
        return [this.persuasion, this.leadership, this.bravery, this.etiquette];
    }
}

export class Stats {
    vigor: CategoryVigor=new CategoryVigor();
    dexterity: CategoryDexterity=new CategoryDexterity();
    intelligence: CategoryIntelligence=new CategoryIntelligence();
    charisma: CategoryCharisma=new CategoryCharisma();
}