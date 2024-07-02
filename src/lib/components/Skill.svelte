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
            <h6 class="span">{skill.io.display}</h6>
            <div class="rows">
                <InputSkill style="grid-column-end: 2" id="skill+{skill.io.html}" data={levels[i]} placeholder="Skill Level"/>
                <InputSkill style="grid-column-end: 2" id="relic+{skill.io.html}" data={writable(1)} placeholder="Relic Level"/>
                <div class="{skill.effect.html}" id="result">
    <!--                TODO - invalid skillValue causes incorrect value-->
                    {skill.effect.display} {skill.effect.symbol} {
                        display((currentLevels[i] - 1) * skill.effectValue *
                        (skill.io.html === overall.fundamentals[1].io.html ? 1 : $skillEffect)
                        + 1)
                    }
                </div>
                <p class=""><Money amount={currentLevels[i] * 11} /></p>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
  @use "$lib/assets/scss/vars";

  h6 {
    color: var(--rp-foam);
  }

  h4 {
    padding-left: 2em;
    margin-top: 1em;
    color: var(--rp-pine);

    @media (max-width: vars.$smMax) {
      text-align: center;
    }
  }

    .skills {
      @media (max-width: vars.$smMax) {
        border-bottom: solid var(--rp-highlight-med) 0.1em;
      }
    }

    .skill {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      place-items: center;
      place-content: space-around;
      column-gap: 1em;
      padding: 0;

      .rows {
        grid-template-rows: none;
        grid-template-columns: subgrid;
        display: grid;
        grid-column: span 4 / span 4;
        place-items: center;
        place-content: space-around;
        column-gap: 1em;
        padding: 0;
        text-align: center;
      }

      @media (max-width: vars.$smMax) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        padding: 0 0 1.5em 1em;
        row-gap: 0;

        .rows {
          grid-column: span 2 / span 2;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        h6 {
          position: relative;
          top: 45%;
          text-align: center;
        }
      }
    }

    .span {
      @media (max-width: vars.$smMax) {
        height: 100%;
      }
    }
</style>
