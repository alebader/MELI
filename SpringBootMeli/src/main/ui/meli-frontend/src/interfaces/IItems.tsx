import { IPrice } from "./IPrice";

export interface IItems {
    id: string;
    title: string;
    condition: string;
    free_shipping: boolean;
    picture: string;
    price: IPrice;
}
