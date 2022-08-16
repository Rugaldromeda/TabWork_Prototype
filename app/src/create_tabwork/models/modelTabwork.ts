"use strict"
import { BudgetControl } from "../../budget_balance/controllers/Budget-controller.js";

export class ModelTabwork {
    private nameTabwork:string;
    public tabworkControl: BudgetControl;

    constructor(name:string){
        this.nameTabwork = name;
        this.tabworkControl = new BudgetControl(this.nameTabwork);
    }

    get name():string{
        return this.nameTabwork;
    }
}