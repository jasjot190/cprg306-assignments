"use client";
import { useUserAuth } from "./_utils/auth-context";
import Page from "./shopping-list/page";
export default function page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => await gitHubSignIn();
  const logout = async () => await firebaseSignOut();

  if (user) {
    return (
      <div className="">
        <div className="bg-slate-950 flex items-center p-4 px-8 m-8 justify-between font-bold text-lg">
          <div>Welcome, {user.name}!</div>
          <div>
            Week-9 Assignment --- Implementing Authentication using firebase
          </div>
          <button
            onClick={logout}
            className="outline-slate-300 p-2 rounded-lg bg-red-800 text-sm"
          >
            LogOut
          </button>
        </div>
        {<Page />}
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute bg-[url(/bg.png)] w-full bg-cover h-full blur-sm"></div>
      <div className=" bg-white z-10 p-8 py-12 rounded-md">
        <div className="flex flex-col justify-center items-center gap-8">
          <img className="w-20" src="/githubLogo.svg" />
          <button
            onClick={login}
            className="bg-lime-700 p-2 px-4 rounded-xl hover:bg-lime-900"
          >
            LogIn with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
