"use strict"
import { ListBudgets } from "../models/ListBudgets.js";

export class BudgetView {

    public tabContents:HTMLElement;
    private tab_name:string;

    constructor(tabName:string){
        this.tab_name = tabName; 

    }

    templateTab(model:ListBudgets) {
        this.tabContents.innerHTML = "";

        const spaceTabs = document.createElement("div");
        spaceTabs.classList.add("tabs");

        
        model.list.map((w) => {    
            const newTab = document.createElement("button");
            newTab.classList.add(`tabs__button`);
            newTab.classList.add(`${this.tab_name}`);
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
        const spaceContents = document.createElement("section");
        spaceContents.classList.add("contents");
        
        model.list.map((b) =>{
            const areaContent = document.createElement("section");
            areaContent.classList.add("tab__content");
            areaContent.classList.add(`${this.tab_name}`);
            areaContent.setAttribute("id", `tabs__${b.data.name.replace(/\s+/g, '').replace(/\.+/g , '')}`);
            areaContent.classList.add("invisible");

            const areaInput = document.createElement("div");
            
            const areaTable = document.createElement("div");


            areaContent.appendChild(areaInput);
            areaContent.appendChild(areaTable);

            spaceContents.appendChild(areaContent);
        })

        return spaceContents;
    }

    update(model:ListBudgets){
        this.tabContents = document.querySelector(`[data-${this.tab_name}]`) as HTMLElement;
        if(model.list.length !==0 && this.tabContents !== null){
            
            this.tabContents.appendChild(this.templateTab(model));
            this.tabContents.appendChild(this.templateContent(model));
        }
        
    }

   
}