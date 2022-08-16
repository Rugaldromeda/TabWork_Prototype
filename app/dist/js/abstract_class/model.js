export class Model {
    constructor(data, control) {
        this.dataModel = data;
        this.control = control;
    }
    get data() {
        return this.dataModel;
    }
}
