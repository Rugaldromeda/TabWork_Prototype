"use strict";
import { ControlInputTable } from "../../create_inputs/controllers/control_input_table.js";
import { ListBudgets } from "../models/ListBudgets.js";
import { ModelBudget } from "../models/ModelBudget.js";
import { BudgetView } from "../views/BudgetView.js";
export class BudgetControl {
    constructor(nameArea) {
        this.name_budget = nameArea.toLowerCase().replace(/\s+/g, '').replace(/\.+/g, '');
        this.listBudget = new ListBudgets();
    }
    add(name, type) {
        this.listBudget.add(this.createBudget({ name, type }));
        const areaTabWork = document.querySelector(`[data-${this.name_budget}]`);
        this.budgetView = new BudgetView(areaTabWork);
        this.budgetView.update(this.listBudget);
    }
    createBudget(data) {
        return new ModelBudget(data, new ControlInputTable());
    }
    get listB() {
        return this.listBudget;
    }
}
