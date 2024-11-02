"use client";

import { useUserAuth } from "../_utils/auth-context";

const page = () => {
  const { user } = useUserAuth();
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="absolute bg-[url(/bg.png)] min-h-screen w-full blur-sm"></div>
        <div className=" bg-red-600 z-10">
          <span className="bg-blue-500">smaple div</span>
        </div>
      </div>
    );
  }
  return <div>You must be login to this page</div>;
};

export default page;
