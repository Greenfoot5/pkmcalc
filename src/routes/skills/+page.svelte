<script>
    import Skill from "$lib/components/Skill.svelte";

    import skills from "$lib/data/skills.js";
</script>

<nav id="header">
    <div class="flex flex-row content-center flex-nowrap pb-4 pl-4 pr-8">
        <h2 class="lg:pr-32 pr-4">PK:M Calculator</h2>
        <div class="grid grid-cols-4 place-items-center gap-x-4">
            <span style="color: var(--rp-rose)">Skills</span>
            <span>Shop</span>
            <span>Talents</span>
            <span>Stats</span>
        </div>
        <div class="grow" />
        <div class="justify-self-end">
            <input class="form-control me-2" type="search" id="user-id" placeholder="Used ID found in menu" aria-label="Import">
            <button class="btn btn-outline-success" type="button" onclick="Import.getData(jQuery('#user-id').val())">Import</button>
        </div>
    </div>

    <div id="stats" class="grid grid-cols-4 place-items-center lg:px-32">
        <div>Income: <span class="pkm-copper">1c</span> </div>
        <div>Fanaticism: <span class="pkm-fana">0</span> Gain: (<span class="pkm-fana">1</span>)</div>
        <div>Total Brands: <span class="pkm-brands">0</span></div>
        <div>Relic Discount: <span class="pkm-brands">1</span></div>
    </div>
</nav>

<div id="skills">
    <Skill title="The Order" skills={skills.theorder}/>
    <Skill title="Fundamentals" skills={skills.fundamentals}/>
    <Skill title="Combat" skills={skills.combat}/>
    <Skill title="Magic" skills={skills.magic}/>
    <Skill title="Dark Magic" skills={skills.darkmagic}/>
</div>

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
    #header {
        margin: 0;
        padding: 1em 0.5em;
        background-color: var(--rp-surface);

        h2 {
            margin: 0;
        }
    }

    #stats {
      color: var(--rp-subtle);
    }
</style>
