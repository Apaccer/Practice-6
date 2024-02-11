import apiInstance from '../services/api';

export async function getAllProducts() {
  const result = await apiInstance.get('/products');
  return result.data;
}

export async function getProductById(id) {
  const result = await apiInstance.get(`/products/${id}`);
  return result.data;
}
