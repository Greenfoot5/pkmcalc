import { effectTypes } from "$lib/data/effects.js";

export const weapons = [
    {
        effect: effectTypes.enAtkDuration,
        effectValue: 2,
        basePrice: 626,
        io: {
            html: "small_shield", display: "Small Shield", import: "small shield"
        }
    },
    {
        effect: effectTypes.atkResistance,
        effectValue: 1.5,
        basePrice: 130434,
        io: {
            html: "war_paint", display: "War Paint", import: "war paint"
        }
    },
    {
        effect: effectTypes.enAtkDuration,
        effectValue: 2,
        basePrice: 27197214,
        io: {
            html: "short_bow", display: "Sshort Bow", import: "short bow"
        }
    },
    {
        effect: effectTypes.atkResistance,
        effectValue: 2,
        basePrice: 5670988944,
        io: {
            html: "steel_longsword", display: "Steel Longsword", import: "steel longsword"
        }
    },
    {
        effect: effectTypes.atkResistance,
        effectValue: 1.5,
        basePrice: 1182478320247,
        io: {
            html: "knight_armor", display: "Knight Armor", import: "knight armor"
        }
    },
    {
        effect: effectTypes.atkResistance,
        effectValue: 2,
        basePrice: 246562811476569,
        io: {
            html: "war_horse", display: "War Horse", import: "war horse"
        }
    },
    {
        effect: effectTypes.shopPrice,
        effectValue: 1.5,
        basePrice: 51411699447100780,
        io: {
            html: "magic_sword", display: "Magic Sword", import: "magic sword"
        }
    }
]
