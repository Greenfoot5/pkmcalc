<script>
    import { writable } from "svelte/store";
    import { display } from "$lib/utils.ts";

    import Money from "./Money.svelte"
    import InputSkill from "$lib/components/InputSkill.svelte";

    import { skills as overall } from "$lib/data/skills.js";
    import { skillEffect } from "$lib/data/stats.js";

    export let title = "";
    export let skills = [];
    export let levels = [];

    let currentLevels = [];
    levels.forEach((level, i) =>
    {
        currentLevels.push(1);
        level.subscribe((value) => {
            currentLevels[i] = value;
        })
    });
</script>

<h4>{title}</h4>
<div class="skills">
    {#each skills as skill, i}
        <div class="skill">
            <h6>{skill.io.display}</h6>
            <InputSkill id="skill+{skill.io.html}" data={levels[i]} placeholder="Skill Level"/>
            <InputSkill id="relic+{skill.io.html}" data={writable(1)} placeholder="Relic Level"/>
            <div class="{skill.effect.html}" id="result">
<!--                TODO - invalid skillValue causes incorrect value-->
                {skill.effect.display} {skill.effect.symbol} {
                display((currentLevels[i] - 1) * skill.effectValue *
                (skill.io.html === overall.fundamentals[1].io.html ? 1 : $skillEffect)
                    + 1)
            }
            </div>
            <p><Money amount={currentLevels[i] * 11} /></p>
        </div>
    {/each}
</div>

<style lang="scss">
  h6 {
    color: var(--rp-foam);
  }

  h4 {
    padding-left: 2em;
    margin-top: 1em;
    color: var(--rp-pine);
  }

    .skills {
      padding: 0.5em;
    }

    .skill {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      place-items: center;
      column-gap: 1em;
      padding: 0;
    }
</style>
