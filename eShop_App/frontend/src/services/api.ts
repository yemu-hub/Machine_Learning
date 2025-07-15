import axios from 'axios';
import { Catalog, CatalogDTO } from '../types';

const API_BASE_URL = 'http://localhost:8085/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const catalogApi = {
    getAllCatalogs: () => api.get<CatalogDTO[]>('/catalogs'),
    getCatalogById: (id: number) => api.get<CatalogDTO>(`/catalogs/${id}`),
    createCatalog: (catalog: CatalogDTO) => api.post<CatalogDTO>('/catalogs', catalog),
    updateCatalog: (id: number, catalog: CatalogDTO) => api.put<CatalogDTO>(`/catalogs/${id}`, catalog),
    deleteCatalog: (id: number) => api.delete(`/catalogs/${id}`),
    getCatalogsByCategory: (category: string) => api.get<CatalogDTO[]>(`/catalogs/category/${category}`),
    getActiveCatalogs: () => api.get<CatalogDTO[]>('/catalogs/active'),
    searchCatalogs: (name: string) => api.get<CatalogDTO[]>(`/catalogs/search?name=${name}`),
};

export default api; 