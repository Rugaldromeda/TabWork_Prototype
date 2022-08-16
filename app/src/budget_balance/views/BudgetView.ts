"use strict"
import { ListBudgets } from "../models/ListBudgets.js";

export class BudgetView {

    public tabContents:HTMLElement;

    constructor(tabSpace:HTMLElement){

        this.tabContents = tabSpace;
        

    }

    templateTab(model:ListBudgets) {
        this.tabContents.innerHTML = "";

        const spaceTabs = document.createElement("div");
        spaceTabs.classList.add("tabs");

        
        model.list.map((w) => {    
            const newTab = document.createElement("button");
            newTab.classList.add(`tabs__button`);
            newTab.classList.add(`tabs__${w.data.name.replace(/\s+/g, '').replace(/\.+/g , '')}`);
            newTab.classList.add(`${w.data.name.replace(/\s+/g, '').replace(/\.+/g , '')}`);
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
    
    templateContent(model:ListBudgets){

        

    }

    update(model:ListBudgets){
        this.tabContents.appendChild(this.templateTab(model));
       // this.tabContents.appendChild(this.templateContent(model));
    }

   // _formTabworkController(nameWorksheet:string,tabworkControl:BudgetControl){
        //return viewBudgetController(nameWorksheet, tabworkControl);
   // }
}