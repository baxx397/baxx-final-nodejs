// models/products.model.js
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { db } from './firebase.js';

const productsCollection = collection(db, 'products');

export async function getAllProductsModel() {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getProductByIdModel(id) {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) throw new Error('Producto no encontrado');
  return { id: docSnap.id, ...docSnap.data() };
}

export async function createProductModel(product) {
  const docRef = await addDoc(productsCollection, product);
  return { id: docRef.id, ...product };
}

export async function deleteProductModel(id) {
  const docRef = doc(db, 'products', id);
  await deleteDoc(docRef);
}
