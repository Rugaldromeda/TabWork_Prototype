import { closeContent, tabActive } from "./tabs.js";
export const initTabs = () => {
    const listTabs = document.querySelectorAll(".tabs__button");
    for (let counter = 0; counter < listTabs.length; counter++) {
        const tabsList = listTabs[counter];
        const divContent = tabsList.classList[3];
        const tabKey = tabsList.classList[1];
        const idContent = `#tabs__${divContent}`;
        const idTab = `.tabs__${divContent}`;
        tabsList.onclick = () => {
            closeContent(tabKey);
            tabActive(idContent, idTab);
        };
    }
};
