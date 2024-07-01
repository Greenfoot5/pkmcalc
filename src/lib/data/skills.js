import { derived } from 'svelte/store';
import { faith, zeal, devotion, fervour,
    productivity, concentration, bargaining, meditation,
    strength, muscleMemory, battleTactics,
    manaControl, lifeEssence, resilience, materialism,
    fanaticalDevotion, ardentBelief, zealousConviction, extremePiety,
    absoluteFaith, devoutMastery, doggedPerseverance, blazingFervour} from '$lib/data/skill_levels.js';

const effectTypes = {
    income: {
        symbol: "×", html: "pkm-emerald", display: "Income / day"
    },
    allPrice: {
        symbol: "÷", html: "pkm-gold", display: "All prices"
    },
    happiness: {
        symbol: "×", html: "pkm-amethyst", display: "Happiness"
    },
    shopPrice: {
        symbol: "÷", html: "pkm-shop-price", display: "Shop prices"
    },
    skillEffect: {
        symbol: "×", html: "pkm-skill-effect", display: "Skill effects"
    },
    atkPower: {
        symbol: "×", html: "pkm-gold", display: "Attack power",
    },
    atkDuration: {
        symbol: "÷", html: "pkm-atk-dur", display: "Attack duration",
    },
    enAtkDuration: {
        symbol: "×", html: "pkm-en-atk-dur", display: "En attack duration",
    },
    atkResistance: {
        symbol: "×", html: "pkm-atk-res", display: "Attack resistance",
    },
    fanaGain: {
        symbol: "×", html: "pkm-fana", display: "Fanatacism gain",
    },
    greed: {
        symbol: "×", html: "pkm-res", display: "Greed",
    },
    bonusRelicLevel: {
        symbol: "%", html: "pkm-skill-relic", display: "Bonus Relic Level",
    }
}

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

export let skillEffect = derived([])

export let income = derived([faith, productivity, devoutMastery],
    ([$faith, $productivity, $devoutMastery]) =>
        (($faith - 1) * skills.theOrder[0].effectValue + 1) *
        (($productivity - 1) * skills.fundamentals[0].effectValue + 1) *
        (($devoutMastery - 1) * skills.darkMagic[5].effectValue + 1));

export let happiness = derived([devotion, meditation, fanaticalDevotion, extremePiety],
    ([$devotion, $meditation, $fanaticalDevotion, $extremePiety]) =>
        (($devotion - 1) * skills.theOrder[1].effectValue + 1) *
        (($meditation - 1) * skills.fundamentals[1].effectValue + 1) *
        (($fanaticalDevotion - 1) * skills.darkMagic[0].effectValue + 1) *
        (($extremePiety - 1) * skills.darkMagic[3].effectValue + 1));
