let SkillPage = {
    getGroupName: {
        'theorder': 'The Order',
        'fundamentals': 'Fundamentals',
        'combat': 'Combat',
        'magic': 'Magic',
        'darkmagic': 'Dark Magic'
    },

    skillHTML: (group, groupname) => {
        let skillHTML = ``;
        for (let [name, values] of Object.entries(group)) {
            let htmlSkillName = values.io.html;
            let displaySkillName = values.io.display
            let importSkillName = values.io.import;
            let baseSkillEffect = values.effectvalue;

            let effectSymbol = values.effect.symbol;
            let effectType = values.effect.display;

            let skillLevel = Player.skills[importSkillName].level;
            let relicLevel = Player.skills[importSkillName].relicLevel;

            let skillCost = getSkillPrice(
                skillLevel,
                groupname == "theorder",
                getAllPrice(),
                getHappiness(),
                relicLevel,
                groupname == "darkmagic",
                Player.fanaticism < 1 ? 1 : Player.fanaticism,
                getBoostStatus('happiness')
            );

            let skillEffect = getEffect(
                baseSkillEffect,
                skillLevel,
                getSkillEffect(),
                htmlSkillName == "concentration"
            );

            skillHTML = skillHTML + `
                <div class="flex justify-between pr-20">
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        ${displaySkillName}
                    </div>
                    <div class="">
                        <div class="form-floating">
                            <input type="number" class="text-gray-900" id="${htmlSkillName}-skill-level" placeholder="1" value="${skillLevel}">
                            <label for="${htmlSkillName}-skill-level">Skill Level</label>
                        </div>
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="${htmlSkillName}-relic-level" placeholder="1" value="${relicLevel}">
                            <label for="${htmlSkillName}-relic-level">Relic Level</label>
                        </div>
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        ${effectType} ${effectSymbol}<span id="${htmlSkillName}-skill-effect">${skillEffect.toFixed(2)}</span>
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        <span id="${htmlSkillName}-skill-price">${convertIntToCurrency(Math.round(skillCost))}</span>
                    </div>
                </div><br/>
            `;
        }

        let groupHTML = `
<div class="py-4 px-6">
<div class="rounded-md border border-gray-700 mt-2 sm:col-span-2 sm:mt-0 px-4 py-2 bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl">
            <div class="row py-1 text-lg font-semibold pb-2" onclick="toggleGroup('${groupname}')" style="cursor: pointer">
                <div class="col-auto" id="header-${groupname}">
                    <h5 class="amethyst">▼ ${SkillPage.getGroupName[groupname]}</h5>
                </div>
            </div>
            <div id="${groupname}"> <!-- class="hidden" ▶ ▼ -->
<!--                <hr class="" />-->
                ${skillHTML}
            </div>
            </div>
<!--            <hr class="" />-->
</div>
        `;
        return groupHTML;
    },

    init: () => {
        let theorder = _skills.theorder;
        let fundamentals = _skills.fundamentals;
        let combat = _skills.combat;
        let magic = _skills.magic;
        let darkmagic = _skills.darkmagic;

        let skillHTML = ``;

        skillHTML = `
            ${SkillPage.skillHTML(theorder, 'theorder')}
            ${SkillPage.skillHTML(fundamentals, 'fundamentals')}
            ${SkillPage.skillHTML(combat, 'combat')}
            ${SkillPage.skillHTML(magic, 'magic')}
            ${SkillPage.skillHTML(darkmagic, 'darkmagic')}
        `;

        jQuery("#page-skills").html(`<br/>${skillHTML}`);
    }
}
