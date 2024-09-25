import React from "react";

const page = () => {
  return (
    <main className="w-100px">
      <div className="flex bg-white p-2 justify-items-end">
        <div className="bg-black min-w-4">1</div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 px-3 rounded-md">
            -
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 px-3 rounded-md">
            +
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
