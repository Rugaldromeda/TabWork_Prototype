"use strict"

import { Iinput } from "../../interfaces/IInputs.js"

export class ModelInput{
    private modelInput:Iinput;

    constructor(model:Iinput){
        this.modelInput = model;
    }
}