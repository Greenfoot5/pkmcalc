<script>
    import { github, patreon } from "$lib/config.js";
</script>

<div>
    <p>
        Psst, hey, check out the <a href={github} target="_blank">GitHub</a>
        or consider donating to help keep this running on <a href={patreon}
                                                             target="_blank">Patreon</a>
    </p>
</div>

<style lang="scss">
    div {
      background-color: var(--rp-overlay);
      padding-left: 1em;
      padding-right: 1em;

      p {
        padding: 1em;
        margin: 0;
      }
    }
</style>
