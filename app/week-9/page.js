"use client";
import { useUserAuth } from "./_utils/auth-context";
import Index from "./shopping-list/page";
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => await gitHubSignIn();

  if (user) {
    return <div>{<Index />}</div>;
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
