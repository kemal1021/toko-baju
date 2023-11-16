import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import MyComponent from "../components/MyComponent";
import { useRouter } from "next/router";

export default function index() {
  const cookies = new Cookies();
  const [carRandom, setca] = useState("");
  const [deli, setdeli] = useState("");
  const [sub, setSub] = useState("");
  const [tol, setTol] = useState("");
  const [predeli, setPredeli] = useState("");
  const router = useRouter();
  const [ray, setray] = useState([]);
  const [dataf, setdataf] = useState([]);
  const [dataOrder, setorder] = useState([]);
  // Generate a random string
  const generateRandomString = (length: any) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const randomString = generateRandomString(23); // Change the length as needed
  useEffect(() => {
    const delivery = cookies.get("delivery");
    const subtotal = cookies.get("subtotal");
    const total = cookies.get("total");
    const prdel = cookies.get("priceDelivery");
    setdeli(delivery);
    setSub(subtotal);
    setTol(total);
    setPredeli(prdel);
    setca(randomString);

    const item = cookies.get("item");
    const raycok = item || [];
    setray(raycok);
    const from = cookies.get("saveFrom");
    const datafrom = from || [];
    setdataf(datafrom);
  }, []);

  const backtocard = () => {
    cookies.remove("item");
    const url = `store`;

    router.push({
      pathname: url,
    });
  };

  const dataor = cookies.get("dataOrder");
  const ara = dataor || [];
  useEffect(() => {
    setorder(ara);
  }, []);
  const today = new Date();
  const iyah = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString(undefined, iyah);

  return (
    <>
      <nav className="w-full h-16 bg-white">
        <div className="flex py-4">
          <div className="w-96 flex justify-center">
            <div className="flex ">
              <div>
                <img
                  src="/previous_318477.png"
                  alt=""
                  className="w-5 py-2 mx-2"
                />
              </div>
              <button
                className="font-light text-sm py-2"
                onClick={() => backtocard()}
              >
                BACK TO SHOOPING
              </button>
            </div>
          </div>
          <div className="w-6/12 flex justify-center">
            <a href="" className="font-semibold text-2xl">
              ACME
            </a>
          </div>
        </div>
      </nav>

      <div className="w-full h-auto bg-gray-100">
        <div className="flex justify-center pt-10 h-auto ">
          <div className="w-7/12 h-auto bg-white border-b border-gray-200 ">
            <div className="pl-8 pt-6">
              <span className="font-light text-xs">
                {" "}
                THANK YOU, YOUR ORDER WAS SUCCSESFULLY PLACED
              </span>
            </div>
            <div className="pl-8 py-2">
              <span className="font-semibold text-3xl">
                #{dataOrder.length}
              </span>
            </div>
            <div className="pl-8">
              <span className="font-light text-xl">{carRandom}</span>
            </div>
            <div className="pl-8 py-2 pb-6">
              <span className="font-light text-sm">{formattedDate}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-auto  ">
          <div className="w-7/12 h- bg-white border-b border-gray-200 ">
            {ray.map((data: any, ind: any) => (
              <div key={ind}>
                <div className=" flex py-8 pl-8 ">
                  <div className=" w-40 h-40 flex ">
                    <img
                      src={data.foto}
                      className="w-full object-cover object-center "
                      alt=""
                    />
                  </div>
                  <div className="w-4/12 pl-3 ">
                    <ul className="">
                      <li className="font-medium text-lg">{data.title}</li>
                      <li className="font-light text-sm">Size:{data.ukuran}</li>
                      <li className="font-light text-sm ">
                        Color:{data.warna}
                      </li>
                    </ul>
                  </div>
                  <div className="ml-auto pr-6">
                    <span className="font-light text-sm">€{data.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center  h-auto ">
          <div className="w-7/12 h-auto bg-white border-b border-gray-200 ">
            <div className="flex">
              <div className="p-7">
                <ul>
                  <li className="font-medium text-lg pt-2">Delivery</li>
                  <li className="text-xs font-light pt-1">Address</li>
                  <li className="text-sm pt-1">
                    {dataf.Fname}
                    {dataf.Lname}
                  </li>
                  <li className="text-sm pt-1">
                    {dataf.addres},{dataf.company}
                  </li>
                  <li className="text-sm pt-1">
                    {dataf.city},{dataf.country}
                  </li>
                  <li className="pt-2 font-light text-xs">Delivery Method</li>
                  <li className="text-sm font-medium pt-1">{deli}</li>
                </ul>
              </div>

              <div className="p-7 ml-auto ">
                <ul>
                  <li className="font-medium text-lg pt-2">Order Summary</li>
                  <li className="text-sm font-normal pt-1">Subtotal</li>
                  <li className="text-xs pt-1 font-light">Shipping</li>
                  <li className="text-xs pt-1 border-b-2 border-gray-100">
                    Taxes
                  </li>
                  <li className=""></li>
                  <li className="pt-2 font-medium text-sm">Total</li>
                </ul>
              </div>
              <div className="p-7 pr-40">
                <ul className="pt-7">
                  <li className="font-medium text-lg pt-2"></li>
                  <li className="text-sm font-normal pt-1">€{tol}</li>
                  <li className="text-xs pt-1 font-light">€{predeli}</li>
                  <li className="text-xs mt-5 border-b-2 border-gray-100"></li>
                  <li className=""></li>
                  <li className="pt-2 font-medium text-sm">€{sub}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-12 h-auto ">
          <div className="w-7/12 h-auto bg-white border-b border-gray-200 ">
            <div className="p-10">
              <ul>
                <li className="font-medium text-sm ">Need Help?</li>
                <li>
                  <a href="" className="font-light pt-5 text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="" className="font-light pt-5 text-sm">
                    Retruns & Exchanges
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <MyComponent />
    </>
  );
}
