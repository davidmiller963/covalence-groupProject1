import {row, rows, empty} from "../config/db";

export function create(price: number, stripe: string) {
    return row("newCharge", [price, stripe])
};