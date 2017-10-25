import {row, rows, empty} from "../config/db";

export function all(categoryid: number): Promise<Array<models.ICategory>> {
    return rows("allProducts", [categoryid])
}

export function single(id: number): Promise<Array<models.IProduct>> {
    return row("singleProduct", [id])
}