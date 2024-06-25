<script>
    import Money from "./Money.svelte"
    export let title = "";
    export let skills = [];
</script>

<h4>{title}</h4>
<div class="skills">
    {#each skills as skill}
        <div class="skill">
            <h6>{skill.io.display}</h6>
            <div class="input">
                <input id='skill+{skill.io.html}' type="number" min="1" bind:value={skill.value}>
                <label for="skill+{skill.io.html}">Skill Level</label>
            </div>
            <div class="input">
                <input id='relic+{skill.io.html}' type="number" min="1" value="1"/>
                <label for="relic+{skill.io.html}" >Relic Level</label>
            </div>
            <div class="{skill.effect.html}" id="result">{skill.effect.display} {skill.effect.symbol} 1.00</div>
            <Money amount={skill.value * 11} />
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
      place-items: center;
      column-gap: 1em;
      padding: 0.5em;
    }

    .input {
      position: relative;

      border-radius: 0.375em;
      border-color: var(--rp-gold);
      border-width: 1em;
      box-shadow: 0 0 0 0.2em var(--rp-muted);

      :focus {
        border-radius: 0.375em;
        border-color: var(--rp-rose);
        border-width: 1em;
        box-shadow: 0 0 0 0.3em var(--rp-rose);
      }

      input {
        height: 2em;
        background-color: transparent;
        background-clip: padding-box;
        color: var(--rp-text);
        border: none;
        font-size: 1rem;
        appearance: none;
        padding: 0.5em;
      }

      label {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-100%) scale(0.75);
        color: var(--rp-subtle);
        background-color: var(--rp-base);
        padding: 0.2em;
      }
    }

    input:invalid {
      color: var(--rp-love);
    }

    //label {
    //  color: var(--rp-subtle);
    //  font-size: 0.75rem;
    //
    //  position: absolute;
    //  inset: 1rem 0.375rem;
    //  content: "";
    //  background-color: var(--bs-body-bg);
    //  border-radius: var(--bs-border-radius);
    //
    //  :focus {
    //    box-shadow: 0 0 0 0.2em var(--rp-foam);
    //  }
    //}

      //input {
      //  background-color: transparent;
      //  background-clip: padding-box;
      //  color: var(--rp-text);
      //  border: none;
      //  font-size: 1rem;
      //  appearance: none;
      //
      //  display: block;
      //
      //  border-radius: 0.375em;
      //  border-color: var(--rp-gold);
      //  border-width: 1em;
      //  box-shadow: 0 0 0 0.2em var(--rp-muted);
      //
      //  :focus {
      //    box-shadow: 0 0 0 0.2em var(--rp-foam);
      //  }
      //
      //  label::before {
      //    color: var(--rp-subtle);
      //    font-size: 0.75rem;
      //
      //    z-index: 5;
      //    position: absolute;
      //
      //    //position: absolute;
      //    //inset: 1rem 0.375rem;
      //    content: ""
      //  }
      //}
</style>
