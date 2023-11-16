import React, { useState } from "react";
import MyNavbar from "../components/MyNavbar";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import MyComponent from "../components/MyComponent";
import MyFooter from "../components/MyFooter";

export default function index() {
  const router = useRouter(); // Use useRouter() from Next.js
  const cookies = new Cookies();
  const datacookies = cookies.get("fotoh");
  const [label, setlabel] = useState(false);

  const retrievedFotoh = datacookies || [];
  const data1 = retrievedFotoh[0];
  const data2 = retrievedFotoh[1];
  const data3 = retrievedFotoh[2];
  const data4 = retrievedFotoh[3];
  const data5 = retrievedFotoh[4];
  const data6 = retrievedFotoh[5];
  const data7 = retrievedFotoh[6];

  const toDetail = (data1: any, title: any) => {
    cookies.set("Detail", data1);

    const url = `product/${title}`;
    router.push({
      pathname: url,
    });
  };
  return (
    <>
      <MyNavbar />

      <div className="flex">
        <div className="w-3/12">
          <div className="ml-10 mt-20">
            <div className="">
              <span className=" font-semibold text-lg ">Collection</span>
            </div>
            <div className="flex items-center mb-4 mt-4">
              <input
                type="checkbox"
                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                id="mycek"
              />
              <span className="font-light text-sm mx-2">Hoodies</span>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <span className="font-light text-sm mx-2">Bags</span>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <span className="font-light text-sm mx-2">T-shirts</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="py-8">
            <div className="grid grid-cols-4">
              <>
                <div
                  className="cursor-pointer"
                  onClick={() => toDetail(data1, data1.title)}
                >
                  <img
                    src="/baju1.jpg"
                    alt=""
                    className="w-10/12 object-center object-cover h-5/6"
                  />
                  <span className="font-light">T-Shirt North America</span>
                  <div>
                    <span className="font-semibold">€19.50</span>
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => toDetail(data2, data2.title)}
                >
                  <img
                    src="/baju1.1.jpg"
                    alt=""
                    className="w-10/12 object-center object-cover h-5/6"
                  />
                  <span className="font-light">T-Shirt Europe</span>
                  <div>
                    <span className="font-semibold">€19.50</span>
                  </div>
                </div>
              </>
              <div
                className="cursor-pointer"
                onClick={() => toDetail(data3, data3.title)}
              >
                <img
                  src="/baju2.jpg"
                  alt=""
                  className="w-10/12 object-center object-cover h-5/6"
                />
                <span className="font-light">Hoodie Sounth America</span>
                <div>
                  <span className="font-semibold">€36.50</span>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => toDetail(data4, data4.title)}
              >
                <img
                  src="/baju2.1.jpg"
                  alt=""
                  className="w-10/12 object-center object-cover h-5/6"
                />
                <span className="font-light">Hoodie Africa</span>
                <div>
                  <span className="font-semibold">€36.50</span>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => toDetail(data6, data6.title)}
              >
                <img
                  src="/baju3.jpg"
                  alt=""
                  className="w-10/12 object-center object-cover h-5/6"
                />
                <span className="font-light">Tote Bag Australia</span>
                <div>
                  <span className="font-semibold">€18.00</span>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => toDetail(data7, data7.title)}
              >
                <img
                  src="/baju3.1.jpg"
                  alt=""
                  className="w-10/12 object-center object-cover h-5/6"
                />
                <span className="font-light">Tote Bag Asia</span>
                <div>
                  <span className="font-semibold">€18.00</span>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => toDetail(data5, data5.title)}
              >
                <img
                  src="/baju2.2.jpg"
                  alt=""
                  className="w-10/12 object-center object-cover h-5/6"
                />
                <span className="font-light">Hoodie EPEP</span>
                <div>
                  <span className="font-semibold">€100.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyComponent />
      <MyFooter />
    </>
  );
}
