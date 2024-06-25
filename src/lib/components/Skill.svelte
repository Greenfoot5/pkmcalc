<script>
    export let title = "";
    export let skills = [];
</script>

<h4>{title}</h4>
<div class="skills">
    {#each skills as skill}
        <div class="skill grid grid-cols-5 items-center gap-x-4 py-2">
            <h6 class="flex-auto">{skill.io.display}</h6>
            <label class="grid grid-rows-2 ring-2 rounded-md">
                Skill Level
                <input type="number" min="1" value="1">
            </label>
            <label class="grid grid-rows-2">
                Relic Level
                <input name="relic" type="number" min="1" value="1"/>
            </label>
            <div class="flex-auto {skill.effect.html}" id="result">{skill.effect.display} {skill.effect.symbol} 1.00</div>
            <div class="pkm-copper flex-auto">1c</div>
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
      padding: 1em;
    }

    .skill {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .input {
      margin: 1em;
      height: 2em;
    }

    label {
      color: var(--rp-subtle);

      input {
        background-color: var(--rp-base);
        color: var(--rp-text);
        border: none;

      }
    }
</style>
