export interface Catalog {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    active: boolean;
}

export interface CatalogDTO {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    active: boolean;
} 