"use strict"
import { ControlInputTable } from "../../create_inputs/controllers/control_input_table.js";
import { initTabs } from "../../functions/initTabs.js";

import { IBudget } from "../../interfaces/Ibudget.js";
import { ListBudgets } from "../models/ListBudgets.js";
import { ModelBudget } from "../models/ModelBudget.js";
import { BudgetView } from "../views/BudgetView.js";

export class BudgetControl {
    private name_budget:string;
    private listBudget:ListBudgets;
    private budgetView: BudgetView;
    constructor(nameArea:string){

        this.name_budget = nameArea.toLowerCase().replace(/\s+/g, '').replace(/\.+/g , '');
        this.budgetView = new BudgetView(this.name_budget);
        this.listBudget = new ListBudgets();
        this.budgetView.update(this.listB);
        
    }

    add(name:string, type:string){
        
        this.listBudget.add(this.createBudget({name, type}));
        
        this.budgetView.update(this.listBudget);

        initTabs();
        
    }

    createBudget(data:IBudget){
        return new ModelBudget(data, new ControlInputTable());
    }

    get listB(){
        return this.listBudget;
    }
    
    update(){
        this.budgetView.update(this.listBudget);
    }
}