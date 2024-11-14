import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

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
  const itemSent = await addDoc(itemsRef, item);
  return itemSent.id;
};

const deleteItem = async (userId, item) => {
  const itemsRef = collection(doc(db, "users", userId), "items");
  const itemDeleted = await deleteDoc(itemsRef, item);
  return itemDeleted;
};

const clearList = async (userId) => {
  const userRef = collection(doc(db, "users", userId), "items");
  const listDeleted = await deleteDoc(userRef);
  return listDeleted;
};

export { getItems, addItem, deleteItem, clearList };
