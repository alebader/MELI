import { IAuthor } from "./IAuthor";
import IItemsSeleccionado from "./IItemsSeleccionado";

export default interface IProductoSeleccionado {
    author: IAuthor; 
    item: IItemsSeleccionado;
}