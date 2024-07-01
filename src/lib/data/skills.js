import { effectTypes} from "$lib/data/effects.js";

export let skills = {
    theOrder: [
        {
            effect: effectTypes.income,
            effectValue: 0.205,
            basePrice: 1,
            io: {
                html: "faith", display: "Faith", import: "faith"
            }
        },
        {
            effect: effectTypes.allPrice,
            effectValue: 0.12,
            basePrice: 1,
            io: {
                html: "zeal", display: "Zeal", import: "zeal"
            }
        },
        {
            effect: effectTypes.happiness,
            effectValue: 0.135,
            basePrice: 1,
            io: {
                html: "devotion", display: "Devotion", import: "devotion"
            }
        },
        {
            effect: effectTypes.shopPrice,
            effectValue: 0.0135,
            basePrice: 1,
            io: {
                html: "fervour", display: "Fervour", import: "fervour"
            }
        }
    ],
    fundamentals: [
        {
            effect: effectTypes.income,
            effectValue: 0.03,
            basePrice: 1,
            io: {
                html: "productivity", display: "Productivity", import: "productivity"
            }
        },
        {
            effect: effectTypes.skillEffect,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "concentration", display: "Concentration", import: "concentration"
            }
        },
        {
            effect: effectTypes.allPrice,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "bargaining", display: "Bargaining", import: "bargaining"
            }
        },
        {
            effect: effectTypes.happiness,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "meditation", display: "Meditation", import: "meditation"
            }
        }
    ],
    combat: [
        {
            effect: effectTypes.atkPower,
            effectValue: 0.015,
            basePrice: 1,
            io: {
                html: "strength", display: "Strength", import: "strength"
            }
        },
        {
            effect: effectTypes.atkDuration,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "musclememory", display: "Muscle Memory", import: "muscle memory"
            }
        },
        {
            effect: effectTypes.enAtkDuration,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "battletactics", display: "Battle Tactics", import: "battle tactics"
            }
        }
    ],
    magic: [
        {
            effect: effectTypes.allPrice,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "manacontrol", display: "Mana Control", import: "mana control"
            }
        },
        {
            effect: effectTypes.fanaGain,
            effectValue: 0.02,
            basePrice: 1,
            io: {
                html: "lifeessence", display: "Life Essence", import: "life essence"
            }
        },
        {
            effect: effectTypes.atkResistance,
            effectValue: 0.005,
            basePrice: 1,
            io: {
                html: "resilience", display: "Resilience", import: "resilience"
            }
        },
        {
            effect: effectTypes.greed,
            effectValue: 0.04,
            basePrice: 1,
            io: {
                html: "materialism", display: "Materialism", import: "materialism"
            }
        }
    ],
    darkMagic: [
        {
            effect: effectTypes.happiness,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "fanaticaldevotion", display: "Fanatical Devotion", import: "fanatical devotion"
            }
        },
        {
            effect: effectTypes.fanaGain,
            effectValue: 0.03,
            basePrice: 1,
            io: {
                html: "ardentbelief", display: "Ardent Belief", import: "ardent belief"
            }
        },
        {
            effect: effectTypes.allPrice,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "zealousconviction", display: "Zealous Conviction", import: "zealous conviction"
            }
        },
        {
            effect: effectTypes.happiness,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "extremepiety", display: "Extreme Piety", import: "extreme piety"
            }
        },
        {
            effect: effectTypes.fanaGain,
            effectValue: 0.01,
            basePrice: 1,
            io: {
                html: "absolutefaith", display: "Absolute Faith", import: "absolute faith"
            }
        },
        {
            effect: effectTypes.income,
            effectValue: 0.002,
            basePrice: 1,
            io: {
                html: "devoutmastery", display: "Devout Mastery", import: "devout mastery"
            }
        },
        {
            effect: effectTypes.shopPrice,
            effectValue: 0.003,
            basePrice: 1,
            io: {
                html: "doggedperseverance", display: "Dogged Perseverance", import: "dogged perseverance"
            }
        },
        {
            effect: effectTypes.greed,
            effectValue: 0.0027,
            basePrice: 1,
            io: {
                html: "blazingfervour", display: "Blazing Fervor", import: "blazing fervor"
            }
        }
    ]
};
