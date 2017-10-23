import {row, rows, empty} from "../config/db";

export function all(): Promise<Array<models.ICategory>> {
    return rows("allProducts")
}

export function single(): Promise<Array<models.IProduct>> {
    return rows("singleProduct")
}