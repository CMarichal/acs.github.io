
export class Skill {
    name: string;
    key: string;
    baseValue: number=0;
    expert: boolean=false;
    modifier: number=0;
}

class SkillAthletics extends Skill{
    name="Athlétisme";
    key="ATH";
}

class SkillIntimidation extends Skill{
    name="Intimidation";
    key="ITM";
}

class SkillMelee extends Skill{
    name="Mêlée";
    key="MEL";
}

class SkillResistance extends Skill{
    name="Résistance";
    key="RES";
}

class SkillSneak extends Skill{
    name="Discrétion";
    key="SNK";
}

class SkillDodge extends Skill{
    name="Esquive";
    key="DDG";
}

class SkillThrow extends Skill{
    name="Tir";
    key="THR";
}

class SkillStealth extends Skill{
    name="Roublardise";
    key="STL";
}

class SkillKnowledge extends Skill{
    name="Savoir";
    key="KNL";
}

class SkillKnowHow extends Skill{
    name="Savoir-faire";
    key="KNH";
}

class SkillPerception extends Skill{
    name="Perception";
    key="PCP";
}

class SkillPreparation extends Skill{
    name="Préparation";
    key="PRP";
}

class SkillPersuasion extends Skill{
    name="Persuasion";
    key="PRS";
}

class SkillLeadership extends Skill{
    name="Commandement";
    key="LDS";
}

class SkillBravery extends Skill{
    name="Courage";
    key="BRV";
}

class SkillEtiquette extends Skill{
    name="Etiquette";
    key="ETQ";
}

abstract class Category {
    pureValue: number=0;
    key: string;
}

class CategoryVigor extends Category {
    athletics: SkillAthletics       = new SkillAthletics();
    intimidation: SkillIntimidation = new SkillIntimidation();
    melee: SkillMelee               = new SkillMelee();
    resistance: SkillResistance     = new SkillResistance();
    key = "VIG";

}

class CategoryDexterity extends Category {
    sneak: SkillSneak       = new SkillSneak();
    dodge: SkillDodge       = new SkillDodge();
    throw: SkillThrow       = new SkillThrow();
    stealth: SkillStealth   = new SkillStealth();
    key="DEX";
    
}

class CategoryIntelligence extends Category {
    knowledge: SkillKnowledge       = new SkillKnowledge();
    perception: SkillPerception     = new SkillPerception();
    preparation: SkillPreparation   = new SkillPreparation();
    knowHow: SkillKnowHow           = new SkillKnowHow();
    key="INT";

    knowledges: Skill[] = [];
    knowHows: Skill[] = [];
}


class CategoryCharisma extends Category {
    persuasion: SkillPersuasion = new SkillPersuasion();
    leadership: SkillLeadership = new SkillLeadership();
    bravery: SkillBravery       = new SkillBravery();
    etiquette: SkillEtiquette   = new SkillEtiquette();
    key="CHM;"
}

export class Stats {
    vigor: CategoryVigor                =new CategoryVigor();
    dexterity: CategoryDexterity        =new CategoryDexterity();
    intelligence: CategoryIntelligence  =new CategoryIntelligence();
    charisma: CategoryCharisma          =new CategoryCharisma();
}

export type SimpleStats = {[key: string]:number};