import { effectTypes } from "$lib/data/effects.js";

export const servants = [
    {
        effect: effectTypes.shopPrice,
        effectValue: 1.5,
        basePrice: 3476,
        io: {
            html: "squire", display: "Squire", import: "squire"
        }
    },
    {
        effect: effectTypes.income,
        effectValue: 2,
        basePrice: 982146,
        io: {
            html: "bookkeeper", display: "Bookkeeper", import: "bookkeeper"
        }
    },
    {
        effect: effectTypes.happiness,
        effectValue: 1.5,
        basePrice: 277530931,
        io: {
            html: "butler", display: "Butler", import: "butler"
        }
    },
    {
        effect: effectTypes.allPrice,
        effectValue: 2,
        basePrice: 22160637303640,
        io: {
            html: "banker", display: "Banker", import: "banker"
        }
    },
    {
        effect: effectTypes.bonusRelicLevel,
        effectValue: 1,
        basePrice: 6262066462777030,
        io: {
            html: "seer", display: "Seer", import: "seer"
        }
    },
    {
        effect: effectTypes.atkResistance,
        effectValue: 2,
        basePrice: 1769510318992327700,
        io: {
            html: "bodyguard", display: "Bodyguard", import: "bodyguard"
        }
    },
    {
        effect: effectTypes.shopPrice,
        effectValue: 1.5,
        basePrice: 500021324850607700000,
        io: {
            html: "holyman", display: "Holy Man", import: "holy man"
        }
    },
    {
        effect: effectTypes.greed,
        effectValue: 1.5,
        basePrice: 141294075893117760000000,
        io: {
            html: "smuggler", display: "Smuggler", import: "smuggler"
        }
    }
]
