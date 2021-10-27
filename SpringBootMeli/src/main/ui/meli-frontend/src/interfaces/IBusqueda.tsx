import { IAuthor } from "./IAuthor";
import { IItems } from "./IItems";

export default interface IBusqueda {
    author: IAuthor;
    categories: Array<string>;
    items: Array<IItems>;
}
