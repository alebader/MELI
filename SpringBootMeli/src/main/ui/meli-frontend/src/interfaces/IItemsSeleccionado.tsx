import { IItems } from "./IItems";

export default interface IItemSeleccionado extends IItems {
    sold_quantity: number;
    description: string;
}