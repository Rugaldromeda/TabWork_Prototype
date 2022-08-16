"use strict";
import { ModelTabwork } from "../models/modelTabwork.js";
import { ListTabworks } from "../models/ListTabworks.js";
import { TabworkView } from "../views/TabworkView.js";
export class constructorTabwork {
    constructor() {
        const $ = document.querySelector.bind(document);
        this.nameWorksheet = $('[data-name-worksheet]');
        this.typeWorksheet = $('[data-type-worksheet]');
        this.listTabwork = new ListTabworks();
        this.tabworkView = new TabworkView($('.budget'));
        this.tabworkView.update(this.listTabwork);
    }
    add() {
        const verify = this.listTabwork.list.find(element => element.name.replace(/\s+/g, '').replace(/\.+/g, '') === this.nameWorksheet.value.replace(/\s+/g, '').replace(/\.+/g, ''));
        if (verify == undefined && this.nameWorksheet.value.replace(/\s+/g, '') !== "") {
            this.listTabwork.add(this.createWorksheet());
            this.tabworkView.update(this.listTabwork);
        }
        else if (this.nameWorksheet.value.replace(/\s+/g, '') === "") {
            alert("Campo vazio, por favor insira um valor válido!");
        }
        else {
            alert("Esse nome já existe, por favor escolha outro");
        }
    }
    createWorksheet() {
        return new ModelTabwork(this.nameWorksheet.value);
    }
}
