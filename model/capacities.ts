import { SimpleStats } from "./stats";

export class Capacity {
    id: number=-1;
    isFromAbility: boolean = false;
    name: string="";
    effects: string="";
    modifiers: SimpleStats = {};
    difficulty: number=100;
}

export class CapacityFromAbility extends Capacity {
    id = 199;
    isFromAbility = true;
}

export namespace CapacitiesCommons {

    export const CAPACITY_QUICK_FIRST_AIDS: CapacityFromAbility = {
        id: 200,
        isFromAbility: true,
        name: "Premiers soins rapides",
        effects: "Permet de soigner un allié légèrement blessé durant un combat. Une fois par jour",
        modifiers: {},
        difficulty: 30
    }

    export const CAPACITY_TALENTED_COMIC: CapacityFromAbility = {
        id: 201,
        isFromAbility: true,
        name: "Comédien de talent",
        effects: "+5 en Persuasion et Commandement envers les PNJ en parlant directement à travers votre personnage",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_STEEL_FISTS: CapacityFromAbility = {
        id: 202,
        isFromAbility: true,
        name: "Poings d'acier",
        effects: "+15 en Mêlée dans un combat à mains nues",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_BURST_SHOOTING: CapacityFromAbility = {
        id: 203,
        isFromAbility: true,
        name: "Tir en rafale",
        effects: "Effectuez 3 tirs dans le même tour. Une fois par combat. Nécessite un tour de préparation.",
        modifiers: {},
        difficulty: 30
    }

    export const CAPACITY_CUSTOM_AMMOS: CapacityFromAbility = {
        id: 204,
        isFromAbility: true,
        name: "Munitions personnalisées",
        effects: "Ajoutez un effet à vos munitions. A préparer avant le combat. Effets disponibles : Munitions enflammées, empoisonnées (léger), ou sifflantes.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_STEEL_GUARD: CapacityFromAbility = {
        id: 205,
        isFromAbility: true,
        name: "Défense d'acier",
        effects: "Bloquez à coup sûr une attaque vous visant. Nécessite une pièce d'armure lourde. Une fois par combat.",
        modifiers: {},
        difficulty: 40
    }

    export const CAPACITY_BATTLE_CRY: CapacityFromAbility = {
        id: 206,
        isFromAbility: true,
        name: "Cri de guerre",
        effects: "Vos alliés gagnent +10 en Mêlée pour un tour. Une fois par combat.",
        modifiers: {},
        difficulty: 40
    }

    export const CAPACITY_KEEP_COOL: CapacityFromAbility = {
        id: 207,
        isFromAbility: true,
        name: "Sang froid",
        effects: "Vous ne subissez plus les malus de l'état 'Secoué'",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_PRESTO_ALLEGRO: CapacityFromAbility = {
        id: 208,
        isFromAbility: true,
        name: "Presto allegro",
        effects: "Obtenez l'initiative au prochain tour.",
        modifiers: {},
        difficulty: 35
    }

    export const CAPACITY_TEAM_COORDINATION: CapacityFromAbility = {
        id: 209,
        isFromAbility: true,
        name: "Coordination d'équipe",
        effects: "Vous pouvez effectuer vos actions simultanément avec un allié.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_BEAST_MASTER: CapacityFromAbility = {
        id: 210,
        isFromAbility: true,
        name: "Maître des bêtes",
        effects: "Appaisez l'ennemi s'il s'agit d'une bête.",
        modifiers: {},
        difficulty: 50
    }

    export const CAPACITY_FATAL_CHARGE: CapacityFromAbility = {
        id: 211,
        isFromAbility: true,
        name: "Charge fatale",
        effects: "Foncez sur un ennemi blessé avec une arme de Mêlée et infligez de lourds dégats. Une fois par combat.",
        modifiers: {},
        difficulty: 40
    }

    export const CAPACITY_LATENT_SHARING: CapacityFromAbility = {
        id: 212,
        isFromAbility: true,
        name: "Partage latent",
        effects: "Soyez aux faits et gestes autour de vous tandis que vous dormez.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_WILDLIFE_UNDERSTANDING: CapacityFromAbility = {
        id: 213,
        isFromAbility: true,
        name: "Compréhension de la faune",
        effects: "Interpretez les émotions des animaux pour en tirer des informations.",
        modifiers: {},
        difficulty: 35
    }

    export const CAPACITY_XYLOMANTIC_ENGINEERING: CapacityFromAbility = {
        id: 214,
        isFromAbility: true,
        name: "Ingénierie xylomantique",
        effects: "Après être entré en Partage avec un arbre, vous pouvez influer sur sa croissance pour le modeler légèrement.",
        modifiers: {},
        difficulty: 35
    }

    export const CAPACITY_ALCHEMIC_SCIENCES: CapacityFromAbility = {
        id: 215,
        isFromAbility: true,
        name: "Sciences alchimiques",
        effects: "Créez des alliages de métal et de brume en forgeant qui sont plus résistants et tranchants.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_INGENIOUS_MIND: CapacityFromAbility = {
        id: 216,
        isFromAbility: true,
        name: "Esprit ingénieux",
        effects: "Utilisez un savoir-faire que vous n'avez pas mais qu'un de vos compagnons possède. Utilise les statistiques de votre compagnon.",
        modifiers: {},
        difficulty: 60
    }

    export const CAPACITY_DUST_PUPPETEER: CapacityFromAbility = {
        id: 217,
        isFromAbility: true,
        name: "Marionnettiste brumique",
        effects: "A l'aide d'un alliage brumique et d'une source de brume, vous pouvez créer un petit robot alimenté en brume et aux faibles capacités.",
        modifiers: {},
        difficulty: 50
    }

    export const CAPACITY_DUST_ENCHANTEMENT: CapacityFromAbility = {
        id: 218,
        isFromAbility: true,
        name: "Enchantement brumique",
        effects: "Ajoutez temporairement un enchantement de brume à une arme de mêlée pour la rendre lumineuse et plus puissante (+5 en Mêlée). Une fois par combat.",
        modifiers: {},
        difficulty: 40
    }
    
    export const CAPACITY_EXECUTION: CapacityFromAbility = {
        id: 219,
        isFromAbility: true,
        name: "Mise à mort",
        effects: "La victime est lacérée par de violents flux de brume tranchants. Une fois par combat. Nécessite un tour de préparation.",
        modifiers: {},
        difficulty: 65
    }
    
    export const CAPACITY_BURNING_SOUL: CapacityFromAbility = {
        id: 220,
        isFromAbility: true,
        name: "Brûlure de l'âme",
        effects: "Les sorts de brume sont plus puissants et possèdent désormais un effet incendiaire.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_HARDENED_NOMAD: CapacityFromAbility = {
        id: 221,
        isFromAbility: true,
        name: "Nomade endurci",
        effects: "Une nuit de sommeil vous soigne immédiatement si vous êtes légèrement blessé. Si vous êtes gravement blessé, vous passez en légèrement blessé.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_EFFICIENT_BARGAINING: CapacityFromAbility = {
        id: 222,
        isFromAbility: true,
        name: "Marchandage efficace",
        effects: "Sortez de bons arguments et obtenez une ristourne de 50% chez un commerçant.",
        modifiers: {},
        difficulty: 40
    }

    export const CAPACITY_SHADY_AGREEMENTS: CapacityFromAbility = {
        id: 223,
        isFromAbility: true,
        name: "Accords obscurs",
        effects: "Pour un certain prix, vous pouvez forcer les PNJ non-hostiles à vous vendre leur équipement",
        modifiers: {},
        difficulty: 35
    }

    export const CAPACITY_INTIMIDATING_CRY: CapacityFromAbility = {
        id: 224,
        isFromAbility: true,
        name: "Hurlement intimidant",
        effects: "Poussez un grand hurlement afin de destabiliser le PNJ combattu. Une fois par combat.",
        modifiers: {},
        difficulty: 50
    }

    export const CAPACITY_FEDERATION_INFLUENCE: CapacityFromAbility = {
        id: 225,
        isFromAbility: true,
        name: "Influence de la fédération",
        effects: "+10 en Commandement sur les PNJ de la Fédération des Nations Drakkens.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_RELEASING_BEAST_FORCE: CapacityFromAbility = {
        id: 226,
        isFromAbility: true,
        name: "Hurlement intimidant",
        effects: "Libérez vos instincs primaires. Vos plages de critiques sont désomrais entre 1 et 10 et 91 et 100 jusqu'à la fin du combat.",
        modifiers: {},
        difficulty: 35
    }

    export const CAPACITY_INNATE_NYCTALOPIA: CapacityFromAbility = {
        id: 227,
        isFromAbility: true,
        name: "Nyctalopie innée",
        effects: "Voyez dans la nuit comme en plein jour.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_VICIOUS_VENOM: CapacityFromAbility = {
        id: 228,
        isFromAbility: true,
        name: "Venin vicieux",
        effects: "Trouvez aisément de quoi empoisonner vos armes (poison léger). A préparer avant le combat.",
        modifiers: {},
        difficulty: 35
    }

    export const CAPACITY_GHOSTLY_DISAPPEARANCE: CapacityFromAbility = {
        id: 229,
        isFromAbility: true,
        name: "Disparition fantomatique",
        effects: "Faîtes disparaitre une ou plusieurs parties de votre corps temporairement (+20 en Discrétion).",
        modifiers: {},
        difficulty: 45
    }

    export const CAPACITY_GEOMANTIC_VULCANOLOGY: CapacityFromAbility = {
        id: 230,
        isFromAbility: true,
        name: "Volcanologie géomantique",
        effects: "Influez sur l'écoulement des flux de laves.",
        modifiers: {},
        difficulty: 50
    }

    export const CAPACITY_IMPROVISED_FORGE: CapacityFromAbility = {
        id: 231,
        isFromAbility: true,
        name: "Forge improvisée",
        effects: "Fabriquez une petite forge basique à l'aide d'un environnement rocheux.",
        modifiers: {},
        difficulty: 40
    }

    export const CAPACITY_MAGMATIC_BLOOD: CapacityFromAbility = {
        id: 232,
        isFromAbility: true,
        name: "Sang magmatique",
        effects: "Un ennemi qui vous blesse subit lui aussi des dégâts au contact de votre sang.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_SISTERS_BLESSING: CapacityFromAbility = {
        id: 233,
        isFromAbility: true,
        name: "Bénédiction des Soeurs",
        effects: "Renforcez vos pouvoirs curatifs et soignez un allié gravement blessé vers l'état 'Légèrement blessé' sans matériel spécifique.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_ESPRIT_DE_CORPS: CapacityFromAbility = {
        id: 234,
        isFromAbility: true,
        name: "Esprit de corps",
        effects: "Encaissez ses dommages à la place d'un allié.",
        modifiers: {},
        difficulty: 30
    }

    export const CAPACITY_NO_MERCY_MISERICORD: CapacityFromAbility = {
        id: 235,
        isFromAbility: true,
        name: "Miséricorde sans pitié",
        effects: "Entrez dans une rage de combat jusqu'à sa fin. +15 en Mêlée et Athlétisme, -30 en Esquive et Résistance. Vous ne pouvez épargnez la victime.",
        modifiers: {},
        difficulty: 40
    }

    export const CAPACITY_SENSITIVE_INTERNAL_CLOCK: CapacityFromAbility = {
        id: 236,
        isFromAbility: true,
        name: "Horloge interne sensible",
        effects: "Vous ne perdez pas le compte des jours et des heures. Vous vous réveillez si on vous assaille pendant votre sommeil.",
        modifiers: {},
        difficulty: 0
    }

    export const CAPACITY_WINTER_CALM: CapacityFromAbility = {
        id: 236,
        isFromAbility: true,
        name: "Calme hivernal",
        effects: "Remplacez le jet d'opposition demandé par un jet de Courage.",
        modifiers: {},
        difficulty: 40
    }

    export const CAPACITY_FLASH_OF_PASSION: CapacityFromAbility = {
        id: 236,
        isFromAbility: true,
        name: "Eclair de fougue",
        effects: "Pendant un tour, +10 à toutes vos compétences de Vigueur, -20 à toutes les autres. Une fois par combat. Vous pouvez jouer juste après l'activation de cette compétence. ",
        modifiers: {},
        difficulty: 50
    }


}