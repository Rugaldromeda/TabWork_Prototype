"use strict"

import { Model } from "../../abstract_class/model.js";
import { ControlInputTable } from "../../create_inputs/controllers/control_input_table.js";
import { IBudget } from "../../interfaces/Ibudget.js";


export class ModelBudget extends Model<IBudget, ControlInputTable>{

}