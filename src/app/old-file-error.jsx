"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex h-[79vh] flex-col justify-center items-center  space-y-3">
      <h1 className="text-xl  text-amber-600">Somthing Went Wrong</h1>
      <p className="text-lg">Please try again </p>
      <button
        onClick={() => reset()}
        className="bg-green-400 rounded-md !mt-4 font-semibold text-black border-green-500 hover:bg-green-500 px-3 py-2"
      >
        Try Again
      </button>
    </div>
  );
}
