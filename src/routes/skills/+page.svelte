<script>
    import Skill from "$lib/components/Skill.svelte";
    import Shop from "$lib/components/Shop.svelte";
    import Money from "$lib/components/Money.svelte";

    import { skills } from "$lib/data/skills.js";
    import { levels } from "$lib/data/skill_levels.js";
    import { income, fanaGain } from "$lib/data/stats.js";
    import { properties } from "$lib/data/properties.js";
    import { trinkets } from "$lib/data/trinkets.js";
    import { weapons } from "$lib/data/weapons.js";
    import { servants } from "$lib/data/servants.js";
    import { display } from "$lib/utils.ts";

    let page = "shop";
</script>

<nav id="header">
    <div class="nav">
        <h2>PK:M Calculator</h2>
        <div>
            <button class={page === "skills" ? "active-link" : ""} on:click={() => {page = "skills"}}>Skills</button>
            <button class={page === "shop" ? "active-link" : ""} on:click={() => {page = "shop"}}>Shop</button>
            <button class={page === "talents" ? "active-link" : ""} on:click={() => {page = "talents"}}>Talents</button>
            <button class={page === "stats" ? "active-link" : ""} on:click={() => {page = "stats"}}>Stats</button>
        </div>
        <span/>
<!--        <div class="justify-self-end">-->
<!--            <input class="form-control me-2" type="search" id="user-id" placeholder="Used ID found in menu" aria-label="Import">-->
<!--            <button class="btn btn-outline-success" type="button" onclick="Import.getData(jQuery('#user-id').val())">Import</button>-->
<!--        </div>-->
    </div>

    <div id="stats">
        <div>Income: <Money amount={$income}/> </div>
        <div>
            <span>Fanaticism: <span class="pkm-fana">0</span></span>
            <span>Gain: (<span class="pkm-fana">{display($fanaGain)}</span>)</span>
        </div>
        <div>Brands: <span class="pkm-brands">0</span></div>
        <div>Relic Discount: <span class="pkm-brands">1</span></div>
    </div>
</nav>

{#if page === "skills"}
    <div id="skills">
        <Skill title="The Order" skills={skills.theOrder} levels={levels.theOrder} />
        <Skill title="Fundamentals" skills={skills.fundamentals} levels={levels.fundamentals} />
        <Skill title="Combat" skills={skills.combat} levels={levels.combat} />
        <Skill title="Magic" skills={skills.magic} levels={levels.magic} />
        <Skill title="Dark Magic" skills={skills.darkMagic} levels={levels.darkMagic} />
    </div>
{:else if page === "shop"}
    <div id="shop">
        <Shop title="Properties" items={properties} enabled={properties} />
        <Shop title="Trinkets" items={trinkets} enabled={properties} />
        <Shop title="Weapons" items={weapons} enabled={properties} />
        <Shop title="Servants" items={servants} enabled={properties} />
    </div>
{/if}

<div id="content" class="text-red-500 hidden">
    <nav class="container-fluid navbar sticky-top navbar-expand-lg navbar-light bg-dark border-bottom border-1 border-warning text-emerald-400">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">PK:M Calculator</a>
            <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="." data-toggle="skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="." data-toggle="shop">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="." data-toggle="talents">Talents</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="." data-toggle="stats">Stats</a>
                    </li>
                    <li class="nav-item">
                            Income: <span id="income"><span class="pkm-copper">1c</span></span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href=".">
                            Fanatacism: <span id="fanatacism" class="pkm-fana">1</span>
                            Gain: (<span id="fanatacismgain" class="pkm-fana">1</span>)
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href=".">
                            Total Brands: <span id="totalbrands" class="pkm-brands">0</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href=".">
                            Relic Discount: <span id="relicdiscount" class="pkm-brands">1</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container bg-dark" id="page-skills">Chicken</div>

    <div class="container bg-dark collapse" id="page-shop">boo</div>

    <div class="container bg-dark collapse" id="page-talents"></div>

    <div class="container bg-dark collapse" id="page-stats"></div>
</div>

<style lang="scss">
    @use "$lib/assets/scss/vars.scss";

    #header {
        margin: 0;
        padding: 1em 0.5em;
        background-color: var(--rp-surface);

        h2 {
            margin: 0;

            @media (min-width: vars.$lgMin) {
                padding-right: 2em;
            }
        }

        .nav {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: nowrap;
            padding: 0 2em 4em 2em;

            @media (max-width: vars.$smMax) {
                padding-bottom: 1em;
            }

            div {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                place-items: center;
                column-gap: 1em;
            }

            span {
                flex-grow: 1;
            }

            button {
                appearance: none;
                background: transparent;
                border: none;
                color: inherit;
                font-size: 1em;
                cursor: pointer;

                &:hover {
                    color: var(--rp-foam);
                }
            }
        }
    }

    #stats {
        color: var(--rp-subtle);

        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        place-items: center;
        text-align: center;

        @media (min-width: vars.$lgMin) {
            padding: 0 8em;
        }
    }

    .active-link {
        color: var(--rp-rose) !important;
    }
</style>
