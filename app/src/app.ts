"use strict"
import { constructorTabwork } from "./create_tabwork/controllers/Constructor-tabwork.js";
import { closeModal } from "./functions/modalBox.js";
import { closeContent, tabActive } from "./functions/tabs.js";

const initTabs = () => {
    const listTabs = document.querySelectorAll(".tabs__button");
    for (let counter = 0; counter < listTabs.length; counter++) {
        const tabsList = listTabs[counter] as HTMLElement;
        const divContent = tabsList.classList[2];
        const idContent = `#tabs__${divContent}`;
        const idTab = `.tabs__${divContent}`;

        tabsList.onclick = () => {
            closeContent()
            tabActive(idContent, idTab);
        }
    
    }

}

initTabs()


const $ = document.querySelector.bind(document);
const formAdd = $(".form-add");
function callController(event:Event) {
    event.preventDefault();
    tabworkConstructor.add();
    initTabs()
    formAdd.reset();
    closeModal(modal);

    console.log(tabworkConstructor)
};
const tabworkConstructor = new constructorTabwork();

formAdd.addEventListener('submit' , callController);


const modal = $('[data-modalbox]');
const closeButton = $('[data-close-modalbox]');
closeButton.addEventListener('click', () => closeModal(modal));