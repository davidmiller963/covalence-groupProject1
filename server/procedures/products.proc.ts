import {row, rows, empty} from "../config/db";

export function all(categoryid: number): Promise<Array<models.ICategory>> {
    return rows("allProducts")
}

export function single(id: number): Promise<Array<models.IProduct>> {
    return rows("singleProduct")
}