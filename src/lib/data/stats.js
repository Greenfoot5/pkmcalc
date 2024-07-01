import {derived} from "svelte/store";
import { faith, zeal, devotion, fervour,
    productivity, concentration, bargaining, meditation,
    strength, muscleMemory, battleTactics,
    manaControl, lifeEssence, resilience, materialism,
    fanaticalDevotion, ardentBelief, zealousConviction, extremePiety,
    absoluteFaith, devoutMastery, doggedPerseverance, blazingFervour} from '$lib/data/skill_levels.js';
import {skills} from "$lib/data/skills.js";


// Main
export let skillEffect = derived([concentration],
    ([$concentration]) =>
        (($concentration - 1) * skills.fundamentals[1].effectValue + 1));

export let income = derived([faith, productivity, devoutMastery,
        skillEffect],
    ([$faith, $productivity, $devoutMastery,
         $skillEffect]) =>
        (($faith - 1) * skills.theOrder[0].effectValue * $skillEffect + 1) *
        (($productivity - 1) * skills.fundamentals[0].effectValue * $skillEffect + 1) *
        (($devoutMastery - 1) * skills.darkMagic[5].effectValue * $skillEffect + 1));

// Prices
export let allPrices = derived([zeal, bargaining, manaControl, zealousConviction,
        skillEffect],
    ([$zeal, $bargaining, $manaControl, $zealousConviction,
         $skillEffect]) =>
        (($zeal - 1) * skills.theOrder[1].effectValue * $skillEffect + 1) *
        (($bargaining - 1) * skills.fundamentals[2].effectValue * $skillEffect + 1) *
        (($manaControl - 1) * skills.magic[0].effectValue * $skillEffect + 1) *
        (($zealousConviction - 1) * skills.darkMagic[2].effectValue * $skillEffect + 1));

export let happiness = derived([devotion, meditation, fanaticalDevotion, extremePiety,
        skillEffect, allPrices],
    ([$devotion, $meditation, $fanaticalDevotion, $extremePiety,
         $skillEffect, $allPrices]) =>
        (($devotion - 1) * skills.theOrder[1].effectValue * $skillEffect + 1) *
        (($meditation - 1) * skills.fundamentals[1].effectValue * $skillEffect + 1) *
        (($fanaticalDevotion - 1) * skills.darkMagic[0].effectValue * $skillEffect + 1) *
        (($extremePiety - 1) * skills.darkMagic[3].effectValue * $skillEffect + 1) *
        $allPrices);

export let shopPrices = derived([fervour, doggedPerseverance,
        skillEffect, allPrices],
    ([$fervour, $doggedPerseverance,
         $skillEffect, $allPrices]) =>
        (($fervour - 1) * skills.theOrder[3].effectValue * $skillEffect + 1) *
        (($doggedPerseverance - 1) * skills.darkMagic[6].effectValue * $skillEffect + 1) *
        $allPrices);

// Combat
export let atkPower = derived([strength, skillEffect],
    ([$strength, $skillEffect]) =>
        (($strength - 1) * skills.combat[0].effectValue * $skillEffect + 1));

export let atkDuration = derived([muscleMemory, skillEffect],
    ([$muscleMemory, $skillEffect]) =>
        (($muscleMemory - 1) * skills.combat[1].effectValue * $skillEffect + 1));

export let enAtkDuration = derived([battleTactics, skillEffect],
    ([$battleTactics, $skillEffect]) =>
        (($battleTactics - 1) * skills.combat[2].effectValue * $skillEffect + 1));

export let atkResistance = derived([resilience, skillEffect],
    ([$resilience, $skillEffect]) =>
        (($resilience - 1) * skills.magic[2].effectValue * $skillEffect + 1));

// Prestige

export let greed = derived([materialism, blazingFervour, skillEffect],
    ([$materialism, $blazingFervour, $skillEffect]) =>
        (($materialism - 1) * skills.magic[3].effectValue * $skillEffect + 1) *
        (($blazingFervour - 1) * skills.darkMagic[7].effectValue * $skillEffect + 1));

export let fanaGain = derived([lifeEssence, ardentBelief, absoluteFaith, skillEffect],
    ([$lifeEssence, $ardentBelief, $absoluteFaith, $skillEffect]) =>
        (($lifeEssence - 1) * skills.magic[1].effectValue * $skillEffect + 1) *
        (($ardentBelief - 1) * skills.darkMagic[1].effectValue * $skillEffect + 1) *
        (($absoluteFaith - 1) * skills.darkMagic[4].effectValue * $skillEffect + 1));
