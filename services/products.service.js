import {
  getAllProductsModel,
  getProductByIdModel,
  createProductModel,
  deleteProductModel
} from '../models/products.model.js';

export async function getAllProductsService() {
  return await getAllProductsModel();
}

export async function getProductByIdService(id) {
  return await getProductByIdModel(id);
}

export async function createProductService(product) {
  if (!product.name || !product.price || !product.stock) {
    throw new Error('Faltan datos obligatorios: name, price o stock');
  }
  return await createProductModel(product);
}

export async function deleteProductService(id) {
  return await deleteProductModel(id);
}
