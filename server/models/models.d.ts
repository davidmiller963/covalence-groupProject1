declare namespace models {
    interface ICategory {
        id: number;
        name: string;
    }


    interface IProduct {
        id: number;
        categoryId: number;
        title: string;
        description: string;
        price: number;
        imageURL: string;

    }

    interface IPurchase {
        id: number;
        price: number;
        stripeTransactionId: string;
    }

    interface IProductPurchase {
        productId: number;
        purchaseId: number; 
    }
}