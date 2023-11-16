import exp from "constants";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const MyNavbar: React.FC = () => {
  const cookies = new Cookies();

  return (
    <div className="h-16  w-full bg-white  border-b-2 border-stone-700">
      <div className="">
        <a className="text-black mx-5 absolute py-4 flex-row" href="/store">
          Store
        </a>
      </div>
      <div className="" style={{ marginLeft: "770px" }}>
        <a href="/" className="text-black absolute py-4 font-bold text-3xl">
          ACME
        </a>
      </div>
      <div className="" style={{ marginLeft: "1520px" }}>
        <span className="text-black absolute py-4 flex-row">Account</span>
      </div>
      <div className="" style={{ marginLeft: "1600px" }}>
        <a href="/card" className="text-black absolute py-4 flex-row">
          My Bag
        </a>
      </div>
    </div>
  );
};

export default MyNavbar;
