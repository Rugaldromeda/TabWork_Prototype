"use strict";
import { ControlInputTable } from "../../create_inputs/controllers/control_input_table.js";
import { initTabs } from "../../functions/initTabs.js";
import { ListBudgets } from "../models/ListBudgets.js";
import { ModelBudget } from "../models/ModelBudget.js";
import { BudgetView } from "../views/BudgetView.js";
export class BudgetControl {
    constructor(nameArea) {
        this.name_budget = nameArea.toLowerCase().replace(/\s+/g, '').replace(/\.+/g, '');
        this.budgetView = new BudgetView(this.name_budget);
        this.listBudget = new ListBudgets();
        this.budgetView.update(this.listB);
    }
    add(name, type) {
        this.listBudget.add(this.createBudget({ name, type }));
        this.budgetView.update(this.listBudget);
        initTabs();
    }
    createBudget(data) {
        return new ModelBudget(data, new ControlInputTable());
    }
    get listB() {
        return this.listBudget;
    }
    update() {
        this.budgetView.update(this.listBudget);
    }
}
