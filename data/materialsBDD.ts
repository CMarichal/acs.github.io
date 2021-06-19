import { ItemManagement } from "model/item"

export namespace MaterialCommons  {
    export const MATERIAL_IRON: ItemManagement.MaterialLight = {
        name: "fer",
        modifier: 0
    }

    export const MATERIAL_GLASSTEEL: ItemManagement.MaterialLight = {
        name: "verre d'acier",
        modifier: 5
    }

    export const MATERIAL_PALLADIAN: ItemManagement.MaterialLight = {
        name: "titanium",
        modifier: 10
    }

    export const MATERIAL_MITHRITE: ItemManagement.MaterialLight = {
        name: "mithrite",
        modifier: 20
    }

    export const MATERIAL_STEEL: ItemManagement.MaterialHeavy = {
        name: "acier",
        modifier: 0
    }

    export const MATERIAL_TITANIUM: ItemManagement.MaterialHeavy = {
        name: "titanium",
        modifier: 5
    }

    export const MATERIAL_ADAMANTIUM: ItemManagement.MaterialHeavy = {
        name: "adamantium",
        modifier: 10
    }

    export const MATERIAL_HYPERIUM: ItemManagement.MaterialHeavy = {
        name: "hypérium",
        modifier: 20
    }

    export const MATERIAL_DUST_1: ItemManagement.MaterialDust = {
        name: "brume forgée",
        modifier: 5
    }

    export const MATERIAL_DUST_2: ItemManagement.MaterialDust = {
        name: "brume forgée de qualité",
        modifier: 10
    }

    export const MATERIAL_DUST_3: ItemManagement.MaterialDust = {
        name: "brume forgée exceptionelle",
        modifier: 20
    }

    export const MATERIAL_PEARL: ItemManagement.MaterialDust = {
        name: "perles d'Auriga",
        modifier: 20
    }

}