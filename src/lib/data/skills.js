const effectTypes = {
    income: {
        symbol: "×", html: "pkm-emerald", display: "Income / day"
    },
    allprice: {
        symbol: "÷", html: "pkm-gold", display: "All prices"
    },
    happiness: {
        symbol: "×", html: "pkm-amethyst", display: "Happiness"
    },
    shopprice: {
        symbol: "÷", html: "pkm-diamond", display: "Shop prices"
    },
    skilleffects: {
        symbol: "×", html: "skilleffects", display: "Skill effects"
    },
    attackpower: {
        symbol: "×", html: "attackpower", display: "Attack power",
    },
    attackduration: {
        symbol: "÷", html: "attackduration", display: "Attack duration",
    },
    enattackduration: {
        symbol: "×", html: "enattackduration", display: "En attack duration",
    },
    attackresistance: {
        symbol: "×", html: "attackresistance", display: "Attack resistance",
    },
    fanatacismgain: {
        symbol: "×", html: "fanatacismgain", display: "Fanatacism gain",
    },
    greed: {
        symbol: "×", html: "greed", display: "Greed",
    },
    bonusreliclevel: {
        symbol: "%", html: "bonusreliclevel", display: "Bonus Relic Level",
    }
}
let _skills = {
    theorder: [{
            effect: effectTypes.income,
            effectvalue: 0.205,
            baseprice: 1,
            io: {
                html: "faith", display: "Faith", import: "faith"
            }
        },
        {
            effect: effectTypes.allprice,
            effectvalue: 0.12,
            baseprice: 1,
            io: {
                html: "zeal", display: "Zeal", import: "zeal"
            }
        },
        {
            effect: effectTypes.happiness,
            effectvalue: 0.135,
            baseprice: 1,
            io: {
                html: "devotion", display: "Devotion", import: "devotion"
            }
        },
        {
            effect: effectTypes.shopprice,
            effectvalue: 0.0135,
            baseprice: 1,
            io: {
                html: "fervour", display: "Fervour", import: "fervour"
            }
        }
    ],
    fundamentals: [
        {
            effect: effectTypes.income,
            effectvalue: 0.03,
            baseprice: 1,
            io: {
                html: "productivity", display: "Productivity", import: "productivity"
            }
        },
        {
            effect: effectTypes.skilleffects,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "concentration", display: "Concentration", import: "concentration"
            }
        },
        {
            effect: effectTypes.allprice,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "bargaining", display: "Bargaining", import: "bargaining"
            }
        },
        {
            effect: effectTypes.happiness,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "meditation", display: "Meditation", import: "meditation"
            }
        }
    ],
    combat: [
        {
            effect: effectTypes.attackpower,
            effectvalue: 0.015,
            baseprice: 1,
            io: {
                html: "strength", display: "Strength", import: "strength"
            }
        },
        {
            effect: effectTypes.attackduration,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "musclememory", display: "Muscle Memory", import: "muscle memory"
            }
        },
        {
            effect: effectTypes.enattackduration,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "battletactics", display: "Battle Tactics", import: "battle tactics"
            }
        }
    ],
    magic: [
        {
            effect: effectTypes.allprice,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "manacontrol", display: "Mana Control", import: "mana control"
            }
        },
        {
            effect: effectTypes.fanatacismgain,
            effectvalue: 0.02,
            baseprice: 1,
            io: {
                html: "lifeessence", display: "Life Essence", import: "life essence"
            }
        },
        {
            effect: effectTypes.attackresistance,
            effectvalue: 0.005,
            baseprice: 1,
            io: {
                html: "resilience", display: "Resilience", import: "resilience"
            }
        },
        {
            effect: effectTypes.greed,
            effectvalue: 0.04,
            baseprice: 1,
            io: {
                html: "materialism", display: "Materialism", import: "materialism"
            }
        }
    ],
    darkmagic: [
        {
            effect: effectTypes.happiness,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "fanaticaldevotion", display: "Fanatical Devotion", import: "fanatical devotion"
            }
        },
        {
            effect: effectTypes.fanatacismgain,
            effectvalue: 0.03,
            baseprice: 1,
            io: {
                html: "ardentbelief", display: "Ardent Belief", import: "ardent belief"
            }
        },
        {
            effect: effectTypes.allprice,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "zealousconviction", display: "Zealous Conviction", import: "zealous conviction"
            }
        },
        {
            effect: effectTypes.happiness,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "extremepiety", display: "Extreme Piety", import: "extreme piety"
            }
        },
        {
            effect: effectTypes.fanatacismgain,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "absolutefaith", display: "Absolute Faith", import: "absolute faith"
            }
        },
        {
            effect: effectTypes.income,
            effectvalue: 0.002,
            baseprice: 1,
            io: {
                html: "devoutmastery", display: "Devout Mastery", import: "devout mastery"
            }
        },
        {
            effect: effectTypes.shopprice,
            effectvalue: 0.003,
            baseprice: 1,
            io: {
                html: "doggedperseverance", display: "Dogged Perseverance", import: "dogged perseverance"
            }
        },
        {
            effect: effectTypes.greed,
            effectvalue: 0.0027,
            baseprice: 1,
            io: {
                html: "blazingfervour", display: "Blazing Fervor", import: "blazing fervor"
            }
        }
    ]
};

export default _skills;
