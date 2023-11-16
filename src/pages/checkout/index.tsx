import React, { use, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
export default function index() {
  const router = useRouter();
  const [closeFrom, setclose] = useState(true);
  const [newData, setnewData] = useState(false);
  const [bgn2, setbgn2] = useState(true);
  const [bgnpart2, setbgnpart2] = useState(false);
  const [bgn3, setbgn3] = useState(true);
  const [bgnpart3, setbgnpart3] = useState(false);
  const [totalPrice, settotal] = useState();
  const [email, setemail] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [company, setCompany] = useState("");
  const [addres, setAddres] = useState("");
  const [home, setHome] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [Phone, setPhone] = useState("");
  const [standart, setstandart] = useState(true);
  const [standartNew, setstandartNew] = useState(false);
  const [Express, setexpress] = useState(true);
  const [expressNew, setexpressNew] = useState(false);
  const [payment, setpayment] = useState(true);
  const [paymentTrue, setpaymenttrue] = useState(false);
  const [priceh, setprice] = useState("");
  const [ambildata, setambil] = useState([]);
  const cookies = new Cookies();

  const savedata = (
    email: any,
    Fname: any,
    Lname: any,
    company: any,
    addres: any,
    home: any,
    code: any,
    city: any,
    country: any,
    state: any,
    Phone: any
  ) => {
    setbgn2(false);
    setbgnpart2(true);
    setclose(false);
    setnewData(true);
    const newItem = {
      email,
      Fname,
      Lname,
      company,
      addres,
      home,
      code,
      city,
      country,
      state,
      Phone,
    };
    cookies.set("saveFrom", newItem);
  };

  const getCok = cookies.get("item");
  const getcookies = getCok || [];

  const karkulator = (data: any) => {
    let price = 0;
    data.forEach((item: any) => {
      price += parseFloat(item.price);
    });
    return price;
  };

  const total = karkulator(getcookies);
  const getC = cookies.get("saveFrom") || [];

  const validateStandart = () => {
    setstandart(false);
    setstandartNew(true);
    setexpress(true);
    setexpressNew(false);
    setbgn3(false);
    setbgnpart3(true);
    let deliverd = 15;
    cookies.set("priceDelivery", deliverd);
    const newdata = "Standart";
    const popst = cookies.set("delivery", newdata);
  };

  const validateExpress = () => {
    setexpress(false);
    setexpressNew(true);
    setstandart(true);
    setstandartNew(false);
    setbgn3(false);
    setbgnpart3(true);
    let deliverd = 20;
    cookies.set("priceDelivery", deliverd);

    const newdata = "Express";
    const popst = cookies.set("delivery", newdata);
  };
  const validatebayar = () => {
    setpayment(false);
    setpaymenttrue(true);
    let price = parseFloat(cookies.get("total")); // Convert to number
    let delivery = parseFloat(cookies.get("priceDelivery")); // Convert to number
    let subtotal = price + delivery;
    cookies.set("subtotal", subtotal);
  };
  const subtotal = cookies.get("subtotal");
  const price = cookies.get("total");
  const delivery = cookies.get("priceDelivery");

  useEffect(() => {
    const ambil = cookies.get("item");
    setambil(ambil);

    setprice(price);
  }, []);
  const topayment = (ambildata: any) => {
    const existingData = cookies.get("dataOrder") || [];

    // Add the new item to the existing data
    const updatedData = [...existingData, ambildata];

    // Save the updated data to cookies
    cookies.set("dataOrder", JSON.stringify(updatedData), { path: "/" });

    const url = `/order`;
    router.push({ pathname: url });
  };

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
              <a href="/store" className="font-light text-sm py-2">
                BACK TO SHOOPING CART
              </a>
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
        <div className="flex justify-center py-12 ">
          {closeFrom && (
            <div className="w-7/12 bg-white mx-5 h-auto">
              <div className="flex pt-4 mx-10 py-2">
                <div className="w-10 h-10 ">
                  <img
                    src="/number-one_3840581.png"
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
                <div className="">
                  <span className="font-semibold text-xl">
                    Shipping address
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <input
                  type="email"
                  className="border border-gray-200 w-11/12 h-12 text-sm"
                  placeholder="   Email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="flex mx-10 py-4">
                <div className="w-6/12">
                  <input
                    type="text"
                    placeholder="  Fisrt Name"
                    className="border border-gray-200 w-full h-12 text-sm"
                    id="fName"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="w-6/12 pl-4 ">
                  <input
                    type="text"
                    placeholder="  Last Name"
                    className="border border-gray-200 w-full h-12 text-sm"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center ">
                <input
                  type="text"
                  className="border border-gray-200 w-11/12 h-12 text-sm"
                  placeholder="   Company"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="flex justify-center py-4">
                <input
                  type="text"
                  className="border border-gray-200 w-11/12 h-12 text-sm"
                  placeholder="   Address"
                  onChange={(e) => setAddres(e.target.value)}
                />
              </div>
              <div className="flex justify-center ">
                <input
                  type="text"
                  className="border border-gray-200 w-11/12 h-12 text-sm"
                  placeholder="   Aparments,suite,etc."
                  onChange={(e) => setHome(e.target.value)}
                />
              </div>
              <div className="flex mx-10 py-4">
                <div className="w-2/12">
                  <input
                    type="text"
                    placeholder="  Postal Code"
                    className="border border-gray-200 w-full h-12 text-sm"
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="w-10/12 pl-4 ">
                  <input
                    type="text"
                    placeholder="  City"
                    className="border border-gray-200 w-full h-12 text-sm"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center py">
                <select
                  name=""
                  id=""
                  className="w-11/12 border border-gray-200 h-10 text-sm"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapura">Singapur</option>
                </select>
              </div>
              <div className="flex justify-center py-4">
                <input
                  type="text"
                  className="border border-gray-200 w-11/12 h-12 text-sm"
                  placeholder="   State/Province"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="text"
                  className="border border-gray-200 w-11/12 h-12 text-sm"
                  placeholder="   Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="pl-10 py-6">
                <button
                  className="w-60 h-10 bg-black text-white font-light text-xs"
                  onClick={() =>
                    savedata(
                      email,
                      Fname,
                      Lname,
                      company,
                      addres,
                      home,
                      code,
                      city,
                      country,
                      state,
                      Phone
                    )
                  }
                >
                  CONTINUE TO DELIVERY
                </button>
              </div>
            </div>
          )}
          {newData && (
            <div className="w-7/12 bg-white mx-5 h-1/6 ">
              <div className="flex pt-4 mx-10 py-2 ">
                <div className="w-10 h-10 ">
                  <img
                    src="/number-one_3840581.png"
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
                <div className="">
                  <span className="font-semibold text-xl">
                    Shipping address
                  </span>
                </div>
              </div>
              <div className="flex bg-gray-50 w-full h-auto ">
                <div className="w-28 pl-10">
                  <img src="checked_190411.png" alt="" className="w-10" />
                </div>
                <div className="w-96">
                  <ul className="font-light text-sm p-4">
                    <li>{getC.email}</li>
                    <li>
                      {getC.Fname}, {getC.Lname}
                    </li>
                    <li>{getC.company}</li>
                    <li>{getC.addres}</li>
                    <li>{getC.home}</li>
                    <li>
                      {getC.code},{getC.city}
                    </li>
                    <li>{getC.country}</li>
                    <li>{getC.state}</li>
                    <li>{getC.Phone}</li>
                  </ul>
                </div>
                <div className="ml-auto p-7">
                  <button className="font-light text-sm">edit</button>
                </div>
              </div>
            </div>
          )}
          {payment && (
            <div className="bg-white w-96  ">
              <div className="grid grid-cols-2 p-6">
                <div className="">
                  <ul className="">
                    <li className="font-medium text-sm">Subtotal</li>
                    <li className="font-light text-xs py-2">Shooping</li>
                    <li className="font-light text-xs">Taxes</li>
                  </ul>
                </div>
                <div className="ml-auto">
                  <ul>
                    <li className="font-medium text-sm">€{priceh}</li>
                    <li className="font-light text-xs py-2">0</li>
                    <li className="font-light text-xs">0</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="border-b border-black mt w-11/12 "></div>
              </div>
              <div className="grid grid-cols-2 flex p-6">
                <div>
                  <span className="font-semibold text-sm">Total</span>
                </div>
                <div className="ml-auto">
                  <span className="font-normal text-sm ">€0</span>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  disabled
                  className="w-11/12 h-10  bg-black text-white opacity-50  text-sm"
                >
                  SELECT A PAYMENNT METHOD
                </button>
              </div>
              <div className="w-full h-10 bg-gray-100 mt-6"></div>
              <div className="mx-6 mt-4 py-2">
                <span className="font-semibold text-sm">Discount</span>
              </div>
              <div className="flex justify-center">
                <div className="p-2">
                  <input
                    type="text"
                    className="border border-gray-200 w-64 h-10"
                    placeholder="   Code"
                  />
                </div>
                <div className="">
                  <button className="w-20 h-10 bg-black text-white mx-2 text-sm">
                    APPLY
                  </button>
                </div>
              </div>
            </div>
          )}
          {paymentTrue && (
            <div className="bg-white w-96  ">
              <div className="grid grid-cols-2 p-6">
                <div className="">
                  <ul className="">
                    <li className="font-medium text-sm">Subtotal</li>
                    <li className="font-light text-xs py-2">Shooping</li>
                    <li className="font-light text-xs">Taxes</li>
                  </ul>
                </div>
                <div className="ml-auto">
                  <ul className="font-medium text-sm">€{total}</ul>
                  <ul className="font-light text-xs py-2">€{delivery}</ul>
                  <ul className="font-light text-xs">0</ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="border-b border-black mt w-11/12 "></div>
              </div>
              <div className="grid grid-cols-2 flex p-6">
                <div>
                  <span className="font-semibold text-sm">Total</span>
                </div>
                <div className="ml-auto">
                  <span className="font-normal text-sm ">€{subtotal}</span>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="w-11/12 h-10  bg-black text-white hover:bg-gray-800  text-sm"
                  onClick={() => topayment(ambildata)}
                >
                  CHECKOUT
                </button>
              </div>
              <div className="w-full h-10 bg-gray-100 mt-6"></div>
              <div className="mx-6 mt-4 py-2">
                <span className="font-semibold text-sm">Discount</span>
              </div>
              <div className="flex justify-center">
                <div className="p-2">
                  <input
                    type="text"
                    className="border border-gray-200 w-64 h-10"
                    placeholder="   Code"
                  />
                </div>
                <div className="">
                  <button className="w-20 h-10 bg-black text-white mx-2 text-sm">
                    APPLY
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-auto bg-gray-100 ">
        {bgn2 && (
          <div className="w-7/12 bg-white h-40 ml-40  opacity-50 ">
            <div className="flex justify-center w-56 p-7">
              <div>
                <img src="number-2_3841714.png" alt="" className="w-9" />
              </div>
              <div className=" pt pl-2">
                <span className="font-medium text-2xl">Delivery</span>
              </div>
            </div>
            <div className="pl-10">
              <span className="font-light">
                Enter you andress to see available options.
              </span>
            </div>
          </div>
        )}
        {bgnpart2 && (
          <div className="w-7/12 bg-white h-auto ml-40 ">
            <div className="flex justify-center w-56 p-7">
              <div>
                <img src="number-2_3841714.png" alt="" className="w-9" />
              </div>
              <div className="pl-2">
                <span className="font-medium text-2xl">Delivery</span>
              </div>
            </div>
            {standart && (
              <div className="">
                <div className="hover:bg-gray-50 hover:border-b hover:border-gray-200">
                  <div
                    className="flex w-full h-14  pl-12 py-4"
                    onClick={() => validateStandart()}
                  >
                    <div className="py-1">
                      <img src="new-moon_636967.png" alt="" className="w-4" />
                    </div>
                    <div className="pl-2">
                      <span className="font-light text-sm">
                        PostFake Standart
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {standartNew && (
              <div className="">
                <div className="bg-gray-200 hover:border-b hover:border-gray-200">
                  <div className="flex w-full h-14  pl-12 py-4">
                    <div className="py-1">
                      <img src="record_2088576.png" alt="" className="w-4" />
                    </div>
                    <div className="pl-2">
                      <span className="font-medium text-sm">
                        PostFake Standart
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {Express && (
              <div className="">
                <div className="hover:bg-gray-50 hover:border-b hover:border-gray-200">
                  <div
                    className="flex w-full h-14  pl-12 py-4"
                    onClick={() => validateExpress()}
                  >
                    <div className="py-1">
                      <img src="new-moon_636967.png" alt="" className="w-4" />
                    </div>
                    <div className="pl-2">
                      <span className="font-light text-sm">
                        PostFake Express
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {expressNew && (
              <div className="">
                <div className="bg-gray-200 hover:border-b hover:border-gray-200">
                  <div className="flex w-full h-14  pl-12 py-4">
                    <div className="py-1">
                      <img src="record_2088576.png" alt="" className="w-4" />
                    </div>
                    <div className="pl-2">
                      <span className="font-medium text-sm">
                        PostFake Express
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <br />
        {bgn3 && (
          <div className="w-7/12 bg-white h-40 ml-40 opacity-50">
            <div className="flex justify-center w-56 p-7">
              <div>
                <img src="number-3_3841715.png" alt="" className="w-9" />
              </div>
              <div className=" pt pl-2">
                <span className="font-medium text-2xl">Payment</span>
              </div>
            </div>
            <div className="pl-10">
              <span className="font-light">
                Enter you andress to see available payment options.
              </span>
            </div>
          </div>
        )}
        {bgnpart3 && (
          <div className="w-7/12 bg-white h-40 ml-40  ">
            <div className="flex justify-center w-56 p-7">
              <div>
                <img src="number-3_3841715.png" alt="" className="w-9" />
              </div>
              <div className=" pt pl-2">
                <span className="font-medium text-2xl">Payment</span>
              </div>
            </div>
            <div
              className="bg-gray-200 hover:border-b hover:border-gray-200"
              onClick={() => validatebayar()}
            >
              <div className="flex w-full h-20  pl-12 py-4">
                <div className="py-1">
                  <img src="record_2088576.png" alt="" className="w-4" />
                </div>
                <div className="pl-2">
                  <span className="font-medium text-sm">Payment Test</span>
                  <div>
                    <span className="font-light text-xs">
                      Payment using bank Al-rafly
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
