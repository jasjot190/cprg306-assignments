"use client";
import Form from "./new-item.js";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import { useState, useEffect } from "react";
import MealIdea from "./meal-idea";
import Link from "next/link.js";
import {
  getItems,
  addItem,
  clearList,
} from "../_services/shopping-list-service.js";

export default function Index() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const { user, firebaseSignOut } = useUserAuth();
  const logout = async () => await firebaseSignOut();
  const handleAddItem = async (newItem) => {
    await addItem(user.uid, newItem);
    loadItems();
  };

  const handleItemSelect = (name) => {
    setSelectedItemName(name);
  };
  const loadItems = async () => {
    let items_recieved = await getItems(user.uid);
    setItems(items_recieved);
  };

  const handleClear = async () => {
    await clearList(user.uid);
    setSelectedItemName(null);
    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  if (user) {
    return (
      <main>
        <div className="bg-slate-950 flex items-center p-4 px-8 m-8 justify-between font-bold text-lg">
          <div>Welcome, {user.displayName}!</div>
          <div>
            Week-9 Assignment --- Implementing Authentication using firebase
          </div>
          <button
            onClick={logout}
            className="outline-slate-300 p-2 rounded-lg bg-red-800 text-sm hover:text-yellow-500"
          >
            LogOut
          </button>
        </div>
        <div className="bg-slate-950 p-4 mx-8 flex justify-around my-8">
          <div className="w-5/12">
            <h1 className="m-2 font-bold text-3xl">Shopping List</h1>
            <div className="flex items-center w-fit">
              <Form onAddItem={handleAddItem} />
            </div>
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
              itemRemoved={loadItems}
            />
            <button
              onClick={() => {
                handleClear();
              }}
              className={`outline-slate-300 p-2 px-8 rounded-lg bg-red-800 text-sm hover:text-yellow-500 mx-48 my-3 ${
                items.length > 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              Clear
            </button>
          </div>
          <div className="p-4 w-5/12">
            <MealIdea ingredient={selectedItemName} />
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="absolute bg-[url(/bg.png)] w-full bg-cover h-full blur-sm"></div>
        <div className=" bg-white z-10 p-10 py-12 rounded-md font-bold text-slate-950">
          <div className="flex flex-col justify-center items-center gap-8">
            <img className="w-44" src="/AccessDenied.png" />
            <p className="flex gap-1">
              <Link href={"./"} className=" text-green-600 hover:underline">
                Log-In
              </Link>
              to access this page
            </p>
          </div>
        </div>
      </div>
    );
  }
}
