<script>
    import { display } from "$lib/utils.ts";

    import Money from "./Money.svelte"

    import { shopPrices } from "$lib/data/stats.js";
    import Toggle from "$lib/components/Toggle.svelte";

    export let title = "";
    export let items = [];
    //export let enabled = [];

    let currentLevels = [];
    // levels.forEach((level, i) =>
    // {
    //     currentLevels.push(1);
    //     level.subscribe((value) => {
    //         currentLevels[i] = value;
    //     })
    // });


</script>

<h4>{title}</h4>
<div class="shop-category">
    {#each items as item, i}
        <div class="item">
            <h6 class="span">{item.io.display}</h6>
            <div class="rows">
                <div>
                    <Toggle />
                </div>
                <div class="{item.effect.html}" id="result">
                    {item.effect.display} {item.effect.symbol} {
                    display(item.effectValue)
                }
                </div>
                <p class=""><Money amount={item.basePrice / $shopPrices} /></p>
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

    .shop-category {
        @media (max-width: vars.$smMax) {
            border-bottom: solid var(--rp-highlight-med) 0.1em;
        }
    }

    .item {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        place-items: center;
        place-content: space-around;
        column-gap: 1em;
        padding: 0;

        .rows {
            grid-template-rows: none;
            grid-template-columns: subgrid;
            display: grid;
            grid-column: span 3 / span 3;
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
