
import Link from "next/link";
import React from "react";

export default function Page(){
return (
    <div className="flex gap-4 ml-auto items-center">
      <Link
        href={"#"}
        className="flex gap-4 ml-auto text-green-600"
      >
        Sign In
      </Link>
      <Link
        href={"#"}
        className="flex gap-4 ml-auto bg-green-600 text-green-200 p-2 rounded"
      >
        Sign Up
      </Link>
    </div>
  );
};
