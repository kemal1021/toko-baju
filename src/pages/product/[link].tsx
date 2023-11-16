import React, { useEffect, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import MyComponent from "../components/MyComponent";
import MyFooter from "../components/MyFooter";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

export default function link() {
  const router = useRouter();
  const cookies = new Cookies();
  const [openproduk, setinfo] = useState(false);
  const [openretrun, setretrun] = useState(true);
  const [baju, setbaju] = useState(false);
  const [hoodie, setHoodie] = useState(false);
  const [opsional, setOpsional] = useState(false);
  const [bags, setBags] = useState(false);
  const [foto, setFoto] = useState("");
  const [tipe, setTipe] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [label, setlabel] = useState("");
  const [ukuran, setUkuran] = useState(""); // Declare the ukuran state
  const [warna, setWarna] = useState("");
  const [data, setData] = useState([]);

  const opensnip = () => {
    setretrun(true);
    setinfo(false);
  };
  const openinfo = () => {
    setinfo(true);
    setretrun(false);
  };
  const Mdata = cookies.get("fotoh");

  const retrievedFotoh = Mdata || [];

  const data1 = retrievedFotoh[0];
  const data2 = retrievedFotoh[1];
  const data3 = retrievedFotoh[2];
  const data4 = retrievedFotoh[3];
  const data5 = retrievedFotoh[4];
  const data6 = retrievedFotoh[5];
  const data7 = retrievedFotoh[6];

  const ToDetail = (title: any) => {
    const url = `${title}`;
    router.push({
      pathname: url,
    });
  };

  useEffect(() => {
    const Mdata = cookies.get("Detail");

    const retrievedFotoh = Mdata || [];
    if (retrievedFotoh.tipe === "tshirt") {
      setbaju(true);
    }
    if (retrievedFotoh.tipe === "Hoodies") {
      setHoodie(true);
    }
    if (retrievedFotoh.tipe === "Bags") {
      setBags(true);
    }
    if (retrievedFotoh.tipe === "tshirt" || retrievedFotoh.tipe === "Hoodies") {
      setOpsional(true);
    }

    setTitle(retrievedFotoh.title);
    setDesc(retrievedFotoh.desc);
    setPrice(retrievedFotoh.price);
    setTipe(retrievedFotoh.tipe);
    const urel = `/${retrievedFotoh.foto}.jpg`;
    setFoto(urel);
  });
  const toCard = (
    foto: any,
    ukuran: any,
    warna: any,
    price: any,
    title: any
  ) => {
    const newItem = { foto, ukuran, warna, price, title };

    // Get the existing data from cookies
    const existingData = cookies.get("item") || [];

    // Add the new item to the existing data
    const updatedData = [...existingData, newItem];

    // Save the updated data to cookies
    cookies.set("item", JSON.stringify(updatedData), { path: "/" });

    const url = `/card`;
    router.push({
      pathname: url,
    });
  };

  return (
    <div>
      <MyNavbar />
      <div className="grid grid-cols-2 ml-56 mt-10  ">
        <div className=" w-full h-5/6 flex">
          <img
            src={foto}
            className="w-full object-cover object-center "
            alt=""
          />
        </div>

        <div className=" ml-28 w-7/12 text-sm">
          <div>
            <a href="" className="text-gray-400">
              {tipe}
            </a>
          </div>
          <div className="pt-4">
            <span className="text-3xl ">{title}</span>
          </div>
          <div className="pt-4">
            <span>{desc}</span>
          </div>
          {opsional && (
            <>
              <select
                name="ukuran"
                id="ukuran"
                className="flex mt-10"
                onChange={(e) => setUkuran(e.target.value)}
              >
                <option value="" disabled selected>
                  Select Size
                </option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>

              <select
                name="warna"
                id="warna"
                className="flex mt-10"
                onChange={(e) => setWarna(e.target.value)}
              >
                <option value="" disabled selected>
                  Select Color
                </option>
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
            </>
          )}
          <div className="pt-10 font-semibold text-xl">
            <span>€{price}</span>
          </div>
          <div className="pt-6">
            <button
              className="rounded-none bg-black text-white w-full h-12 text-sm"
              onClick={() => toCard(foto, ukuran, warna, price, title)}
            >
              ADD TO CARD
            </button>
          </div>
          <div className="grid grid-cols-2 pt-2 mt-10">
            <div className="font-medium text-sm antialiased">
              <span className="font-medium text-xs" onClick={openinfo}>
                PRODUCT INFORMATION
              </span>
              {openproduk && (
                <div className="border-b border-black mt-2 "></div>
              )}
            </div>
            <div className="font-medium text-sm antialiased">
              <span className="font-medium text-xs" onClick={opensnip}>
                SHIPPING & RETRUNS
              </span>
              {openretrun && (
                <div className="border-b border-black mt-2 "></div>
              )}
            </div>
          </div>

          {openproduk && (
            <div>
              <div className="grid grid-cols-2 mt-8">
                <div className="">
                  <span className="font-semibold text-xs">Material</span>
                  <p className="font-extralight text-xs">100% cotton</p>
                </div>
                <div className="">
                  <span className="font-semibold text-xs">Weight</span>
                  <p className="font-extralight text-xs">-</p>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-8">
                <div className="">
                  <span className="font-semibold text-xs">
                    Country Of Origin
                  </span>
                  <p className="font-extralight text-xs">-</p>
                </div>
                <div className="">
                  <span className="font-semibold text-xs">Dimensions</span>
                  <p className="font-extralight text-xs">-</p>
                </div>
              </div>{" "}
              <div className="grid grid-cols-2 mt-8">
                <div className="">
                  <span className="font-semibold text-xs">Type</span>
                  <p className="font-extralight text-xs">-</p>
                </div>
              </div>
            </div>
          )}

          {openretrun && (
            <div>
              <div className="flex mt-8">
                <svg
                  className="h-6 w-6 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="7" cy="17" r="2" />{" "}
                  <circle cx="17" cy="17" r="2" />{" "}
                  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />{" "}
                  <line x1="3" y1="9" x2="7" y2="9" />
                </svg>
                <ul className="ml-2">
                  <li className="font-bold text-xs">Fast Delivery</li>
                  <li className="text-xs">
                    Your package will arrive in 3-5 business days at your pick
                    up location or in the comfort of your home.
                  </li>
                </ul>
              </div>{" "}
              <div className="flex mt-2 mt-8">
                <svg
                  className="h-6 w-6 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <polyline points="23 4 23 10 17 10" />{" "}
                  <polyline points="1 20 1 14 7 14" />{" "}
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
                <ul className="ml-2">
                  <li className="font-bold text-xs">Fast Delivery</li>
                  <li className="text-xs">
                    Your package will arrive in 3-5 business days at your pick
                    up location or in the comfort of your home.
                  </li>
                </ul>
              </div>
              <div className="flex mt-2 mt-8">
                <svg
                  className="h-6 w-6 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <polyline points="1 4 1 10 7 10" />{" "}
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
                <ul className="ml-2">
                  <li className="font-bold text-xs">Fast Delivery</li>
                  <li className="text-xs">
                    Your package will arrive in 3-5 business days at your pick
                    up location or in the comfort of your home.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      {baju && (
        <div className="h-screen w-full">
          <div className="">
            <span className="flex justify-center font-light text-sm">
              Related Product
            </span>
            <span className="flex justify-center text-xl font-medium">
              You might also want to check out these products.
            </span>
          </div>
          <div className="flex grid grid-cols-4 mt-40 ml-40">
            <div className="" onClick={() => ToDetail(data1.title)}>
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
            <div onClick={() => ToDetail(data2.title)}>
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
          </div>
        </div>
      )}
      {hoodie && (
        <div className="h-screen w-full">
          <div className="mt-40">
            <span className="flex justify-center font-light text-sm">
              Related Product
            </span>
            <span className="flex justify-center text-xl font-medium">
              You might also want to check out these products.
            </span>
          </div>
          <div className="flex grid grid-cols-4 mt-40 ml-40">
            <div className="">
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
            <div>
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
            <div>
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
      )}
      {bags && (
        <div className="h-screen w-full">
          <div className="mt-40">
            <span className="flex justify-center font-light text-sm">
              Related Product
            </span>
            <span className="flex justify-center text-xl font-medium">
              You might also want to check out these products.
            </span>
          </div>
          <div className="flex grid grid-cols-4 mt-40 ml-40">
            <div className="">
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
            <div>
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
          </div>
        </div>
      )}

      <MyComponent />
      <MyFooter />
    </div>
  );
}
