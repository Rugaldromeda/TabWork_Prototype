"use strict";
export class BudgetView {
    constructor(tabSpace) {
        this.tabContents = tabSpace;
    }
    templateTab(model) {
        this.tabContents.innerHTML = "";
        const spaceTabs = document.createElement("div");
        spaceTabs.classList.add("tabs");
        model.list.map((w) => {
            const newTab = document.createElement("button");
            newTab.classList.add(`tabs__button`);
            newTab.classList.add(`tabs__${w.data.name.replace(/\s+/g, '').replace(/\.+/g, '')}`);
            newTab.classList.add(`${w.data.name.replace(/\s+/g, '').replace(/\.+/g, '')}`);
            newTab.innerHTML = `${w.data.name}`;
            const deletTab = document.createElement("span");
            deletTab.classList.add("close__delete");
            deletTab.setAttribute("data-exclude", "");
            deletTab.innerHTML = " &#128473;";
            newTab.appendChild(deletTab);
            spaceTabs.appendChild(newTab);
        });
        return spaceTabs;
    }
    templateContent(model) {
    }
    update(model) {
        this.tabContents.appendChild(this.templateTab(model));
    }
}
