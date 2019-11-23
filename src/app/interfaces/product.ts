export interface Product {
    id?: string;
    name?: string;
    description?: string;
    picture?: string;
    price?: string;
    createdAt?: number;
    userId?: string;
    isReserved?: boolean;
    horarios?: Array<number>;
}
