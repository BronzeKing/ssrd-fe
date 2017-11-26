import { Model as BaseModel, ModelRecipe } from "rawmodel";

// defining a basic model
export abstract class Model extends BaseModel {
    public errors: { [x: string]: string } = {};
    public init() {
        let instance: any, field: any;
        Object.keys(this._fields).forEach(name => {
            field = this.getField(name);
            if (typeof field.type === "function") {
                instance = () => field.type();
                this.populate({ [name]: instance });
            }
            this.errors[name] = "";
        });
    }
}
