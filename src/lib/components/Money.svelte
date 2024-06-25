<script lang="ts">
    export let amount = 0;

    $: copper = amount % 1e2;
    $: silver = Math.floor((amount % 1e4 - copper) / 1e2);
    $: gold = Math.floor((amount % 1e6 - silver) / 1e4);
    $: platinum = Math.floor((amount % 1e8 - gold) / 1e6);
    $: emerald = Math.floor((amount % 1e10 - platinum) / 1e8);
    $: amethyst = Math.floor((amount % 1e12 - emerald) / 1e10);
    $: ruby = Math.floor((amount % 1e14 - amethyst) / 1e12);
    $: topaz = Math.floor((amount % 1e16 - ruby) / 1e14);
    $: diamond = Math.floor((amount - topaz) / 1e16);
</script>

{#if diamond > 0}
    <span class="pkm-diamond">{diamond}d </span>
{/if}
{#if topaz > 0}
    <span class="pkm-topaz">{topaz}t </span>
{/if}
{#if ruby > 0}
    <span class="pkm-ruby">{ruby}r </span>
{/if}
{#if amethyst > 0}
    <span class="pkm-amethyst">{amethyst}a </span>
{/if}
{#if emerald > 0}
    <span class="pkm-emerald">{emerald}e </span>
{/if}
{#if platinum > 0}
    <span class="pkm-platinum">{platinum}p </span>
{/if}
{#if gold > 0}
    <span class="pkm-gold">{gold}g </span>
{/if}
{#if silver > 0}
    <span class="pkm-silver">{silver}s </span>
{/if}
{#if copper > 0}
    <span class="pkm-copper">{copper}c </span>
{/if}
