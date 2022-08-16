
export abstract class Model<I,C=unknown> {
    private dataModel:I;
    private control:C|undefined;

    constructor(data:I, control?:C){
        this.dataModel = data;
        this.control = control;
    }

    get data(){
        return this.dataModel;
    }

}