import {writable} from "svelte/store";

export let faith = writable(1);
export let zeal = writable(1);
export let devotion = writable(1);
export let fervour = writable(1);
export let theOrder = [faith, zeal, devotion, fervour];

export let productivity = writable(1);
export let concentration = writable(1);
export let bargaining = writable(1);
export let meditation = writable(1);
export let fundamentals = [productivity, concentration, bargaining, meditation];

export let strength = writable(1);
export let muscleMemory = writable(1);
export let battleTactics = writable(1);
export let combat = [strength, muscleMemory, battleTactics];

export let manaControl = writable(1);
export let lifeEssence = writable(1);
export let resilience = writable(1);
export let materialism = writable(1);
export let magic = [manaControl, lifeEssence, resilience, materialism];

export let fanaticalDevotion = writable(1);
export let ardentBelief = writable(1);
export let zealousConviction = writable(1);
export let extremePiety = writable(1);
export let absoluteFaith = writable(1);
export let devoutMastery = writable(1);
export let doggedPerseverance = writable(1);
export let blazingFervour = writable(1);
export let darkMagic = [fanaticalDevotion, ardentBelief, zealousConviction, extremePiety,
    absoluteFaith, devoutMastery, doggedPerseverance, blazingFervour];

export let income = [faith, productivity, devoutMastery];
export let happiness = [devotion, meditation, fanaticalDevotion, extremePiety];
export let fanaGain = [lifeEssence, ardentBelief, absoluteFaith];
export let skillEffect = [concentration];
export let allPrices = [zeal, bargaining, manaControl, zealousConviction];
export let shopPrices = [fervour, doggedPerseverance];
export let atkPower = [strength];
export let greed = [materialism, blazingFervour];
export let atkDuration = [muscleMemory];
export let enAtkDuration = [battleTactics];
export let atkResistance = [resilience];

export let levels = {theOrder: theOrder, fundamentals: fundamentals, combat: combat, magic: magic, darkMagic: darkMagic};
