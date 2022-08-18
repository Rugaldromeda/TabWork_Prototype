"use strict"
import { constructorTabwork } from "./create_tabwork/controllers/Constructor-tabwork.js";
import { initTabs } from "./functions/initTabs.js";
import { closeModal } from "./functions/modalBox.js";


initTabs();


const $ = document.querySelector.bind(document);
const formAdd = $(".form-add");
function callController(event:Event) {
    event.preventDefault();
    tabworkConstructor.add();
    initTabs()
    formAdd.reset();
    closeModal(modal);

};
const tabworkConstructor = new constructorTabwork();

formAdd.addEventListener('submit' , callController);


const modal = $('[data-modalbox]');
const closeButton = $('[data-close-modalbox]');
closeButton.addEventListener('click', () => closeModal(modal));