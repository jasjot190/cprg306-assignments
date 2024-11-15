import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  doc,
  setDoc,
} from "firebase/firestore";

import React from "react";

const getItems = async (userId) => {
  const itemsCollectionRef = collection(doc(db, "users", userId), "items");
  const itemsSnapshot = await getDocs(itemsCollectionRef);
  const items = itemsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return items;
};

const addItem = async (userId, item) => {
  const itemsRef = collection(doc(db, "users", userId), "items");
  let newItem = {
    name: item.name,
    quantity: item.quantity,
    category: item.category,
  };
  console.log(newItem);
  const itemSent = await addDoc(itemsRef, newItem);
};

// const deleteItem = async (userId, item) => {
//   const itemsRef = doc(db, "users", userId, "items", item);
//   const itemDeleted = await deleteDoc(itemsRef);
//   return itemDeleted;
// };

const deleteItem = async (userId, item) => {
  const itemsRef = doc(db, "users", userId, "items", item);
  await deleteDoc(itemsRef);
  return true;
};

const clearList = async (userId) => {
  const Data = await getItems(userId);
  Data.map((element) => {
    deleteItem(userId, element.id);
  });
};

export { getItems, addItem, deleteItem, clearList };
