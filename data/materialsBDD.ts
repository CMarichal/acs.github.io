import { ItemManagement } from "model/item"

export namespace MaterialCommons  {
    export const MATERIAL_UNKNOWN: ItemManagement.MaterialUnknown = {
        name: "Inconnu",
        modifier: 0,
        icon: "u"
    }

    export const MATERIAL_LEATHER: ItemManagement.MaterialLight = {
        name: "Cuir",
        modifier: 0,
        icon: "u"
    }

    export const MATERIAL_NOT_IN_BASE: ItemManagement.MaterialUnknown = {
        name: "Non repertorié",
        modifier: 0,
        icon: "u"
    }

    export const MATERIAL_IRON: ItemManagement.MaterialLight = {
        name: "Fer",
        modifier: 0,
        icon: "i"
    }

    export const MATERIAL_GLASSTEEL: ItemManagement.MaterialLight = {
        name: "Verre d'acier",
        modifier: 5,
        icon:"gs"
    }

    export const MATERIAL_PALLADIAN: ItemManagement.MaterialLight = {
        name: "Palladian",
        modifier: 10,
        icon:"p"
    }

    export const MATERIAL_MITHRITE: ItemManagement.MaterialLight = {
        name: "Mithrite",
        modifier: 20,
        icon:"m"
    }

    export const MATERIAL_STEEL: ItemManagement.MaterialHeavy = {
        name: "Acier",
        modifier: 0,
        icon:"s"
    }

    export const MATERIAL_TITANIUM: ItemManagement.MaterialHeavy = {
        name: "Titanium",
        modifier: 5,
        icon:"t"
    }

    export const MATERIAL_ADAMANTIUM: ItemManagement.MaterialHeavy = {
        name: "Adamantium",
        modifier: 10,
        icon:"a"
    }

    export const MATERIAL_HYPERIUM: ItemManagement.MaterialHeavy = {
        name: "Hypérium",
        modifier: 20,
        icon:"h"
    }

    export const MATERIAL_DUST_1: ItemManagement.MaterialDust = {
        name: "Brume forgée",
        modifier: 5,
        icon:"dust"
    }

    export const MATERIAL_DUST_2: ItemManagement.MaterialDust = {
        name: "Brume forgée de qualité",
        modifier: 10,
        icon:"dust"
    }

    export const MATERIAL_DUST_3: ItemManagement.MaterialDust = {
        name: "Brume forgée exceptionelle",
        modifier: 20,
        icon:"dust"
    }

    export const MATERIAL_PEARL: ItemManagement.MaterialDust = {
        name: "Perles d'Auriga",
        modifier: 20,
        icon:"pearl"
    }

    export const MaterialList: ItemManagement.Material[] = [
        MATERIAL_IRON,
        MATERIAL_STEEL,
        MATERIAL_GLASSTEEL,
        MATERIAL_TITANIUM,
        MATERIAL_PALLADIAN,
        MATERIAL_ADAMANTIUM,
        MATERIAL_MITHRITE,
        MATERIAL_HYPERIUM,
        MATERIAL_DUST_1,
        MATERIAL_DUST_2,
        MATERIAL_DUST_3,
        MATERIAL_PEARL,
        MATERIAL_UNKNOWN,
        MATERIAL_LEATHER,
        MATERIAL_NOT_IN_BASE
    ]
}