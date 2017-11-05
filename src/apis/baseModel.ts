export const a = "b";
import { Model as BaseModel, ModelRecipe } from "rawmodel";

// defining a basic model
export abstract class Model extends BaseModel {
    static provides: { [x: string]: Array<string> } = {};
    public errors: { [x: string]: string } = {};
    public constructor(recipe?: ModelRecipe) {
        super(recipe);
        Model.provides[getName(this.constructor)].forEach(field => {
            this.defineField(field, {
                type: Model.provides[field],
                validate: []
            });
        });
        Object.keys(this._fields).forEach(name => {
            this.errors[name] = "";
        });
        this.populate(recipe);
        this.commit();
    }
}

function getName(constructor: any) {
    let name = constructor.toString();
    return name.match(/\w+/g)[1];
}
export function Provide(
    target: Model, // The prototype of the class
    propertyKey: string // The name of the property
): void {
    const name = getName(target.constructor);

    if (!Model.provides[name]) {
        Model.provides[name] = [];
    }
    Model.provides[name].push(propertyKey);
}

