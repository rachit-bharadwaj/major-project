"use client";

import { useState } from "react";

// icons
import { TiLockClosed, TiUser } from "react-icons/ti";
import { IoIosMail } from "react-icons/io";
import { BsFileEarmarkLock2Fill } from "react-icons/bs";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

const Form = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);

  return (
    <form className="flex flex-col gap-3 max-w-xs w-full">
      <div className="flex gap-1 rounded-xl border p-3">
        <TiUser className="text-2xl" />
        <input
          type="text"
          placeholder="Full Name"
          className="bg-transparent outline-none flex-1"
        />
      </div>
      <div className="flex gap-1 rounded-xl border p-3">
        <IoIosMail className="text-2xl" />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent outline-none flex-1"
        />
      </div>
      <div className="flex gap-1 rounded-xl border p-3">
        <TiLockClosed className="text-2xl" />
        <input
          type={viewPassword ? "text" : "password"}
          placeholder="Password"
          className="bg-transparent outline-none flex-1"
        />

        <button
          type="button"
          onClick={() => setViewPassword(!viewPassword)}
          className="bg-transparent"
        >
          {viewPassword ? <HiEyeSlash /> : <HiEye />}
        </button>
      </div>

      <div className="flex gap-1 rounded-xl border p-3">
        <BsFileEarmarkLock2Fill className="text-2xl" />
        <input
          type={viewConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="bg-transparent outline-none flex-1"
        />
        <button
          type="button"
          onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
          className="bg-transparent"
        >
          {viewConfirmPassword ? <HiEyeSlash /> : <HiEye />}
        </button>
      </div>

      <button className="p-3 bg-green-400 rounded-xl my-3 text-xl">
        Register
      </button>
    </form>
  );
};

export default Form;
