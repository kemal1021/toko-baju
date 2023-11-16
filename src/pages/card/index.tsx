import MyNavbar from "../components/MyNavbar";
import MyComponent from "../components/MyComponent";
import MyFooter from "../components/MyFooter";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function index() {
  const [getcok, setget] = useState([]);
  const [hasil, sethasil] = useState("");
  const [warungclose, setwarung] = useState(true);
  const [warungopen, setwarungop] = useState(false);
  const router = useRouter();
  const cookies = new Cookies();

  const deleteData = (index: any) => {
    const del = cookies.get("item") || [];
    const removedItem = del.splice(index, 1)[0]; // Menghapus item dari array dan mendapatkan item yang dihapus

    cookies.set("item", del); // Mengupdate array yang sudah diubah ke cookies
    cookies.remove(removedItem); // Menghapus cookie yang memiliki nama sesuai dengan item yang dihapus
    window.location.reload();
  };
  const calculateTotalPrice = (data: any) => {
    let totalPrice = 0;
    data.forEach((item: any) => {
      totalPrice += parseFloat(item.price); // Convert price to float and add to total
    });
    return totalPrice;
  };
  const getC = cookies.get("item");

  // If 'getC' is null or undefined, initialize an empty array
  const retrievedFotoh = getC || [];
  const totalAmount = calculateTotalPrice(retrievedFotoh);
  console.log(retrievedFotoh);

  useEffect(() => {
    sethasil(totalAmount);
    const getC = cookies.get("item");
    // If 'getC' is null or undefined, initialize an empty array
    const retrievedFotoh = getC || [];
    setget(retrievedFotoh);
    cookies.set("total", totalAmount);
  }, []);

  const toCheckout = () => {
    const url = `/checkout`;
    router.push({
      pathname: url,
    });
  };
  useEffect(() => {
    if (retrievedFotoh.length >= 1) {
      setwarungop(true);
      setwarung(false);
    }
  });

  return (
    <>
      <MyNavbar />
      <div className="h-auto pb-40 w-full bg-gray-100">
        <div className="flex relative">
          <div className="w-7/12 h-3/6 bg-white mx-10 mt-16 ml-28">
            <div className="flex grid grid-cols-2 w-11/12 mt-7 ml-10">
              <span className="font-medium text-2xl ">
                Already have an account?
              </span>

              <div className="ml-auto">
                <button className="bg-black py-2 mx-3 px-5 text-white ">
                  sign in
                </button>
              </div>
              <div>
                <span className="font-light text-sm">
                  Sign in for a better experience.
                </span>
              </div>
            </div>
            <div className="ml-10 mt-16">
              <span className="font-medium text-2xl">Shooping Bag</span>
            </div>
            <div className="flex justify-center">
              <div className="border-b border-black mt-4 w-11/12 "></div>
            </div>
            {warungopen && (
              <div>
                {getcok.map((item: any, index: any) => (
                  <div key={index} className="flex mt-10">
                    <div className="w-2/12 h-44 ml-10">
                      <img
                        src={item.foto}
                        alt=""
                        className="w-11/12 object-center object-cover h-5/6"
                      />
                    </div>
                    <div className="relative">
                      <span className="font-medium text-sm subpixel-antialiased ">
                        {item.title}
                      </span>
                      <div>
                        <span className="font-light text-sm">
                          Size: {item.ukuran}
                        </span>
                      </div>
                      <div className="mt-20">
                        <button
                          className="flex font-light text-sm opacity-60"
                          onClick={() => deleteData(index)}
                        >
                          <img
                            src="bin_484611.png"
                            alt=""
                            className="w-3 h-3 mt-1"
                          />
                          remove
                        </button>
                      </div>
                    </div>

                    <div className="ml-auto w-20 ">
                      <div className="mt-24">
                        <span className="font-light text-sm">
                          €{item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {warungclose && (
              <div>
                <div className="flex mt-10">
                  <span>smdksma</span>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white w-96 mt-16 ">
            <div className="grid grid-cols-2 p-6">
              <div className="">
                <ul className="">
                  <li className="font-medium text-sm">Subtotal</li>
                  <li className="font-light text-xs py-2">Shooping</li>
                  <li className="font-light text-xs">Taxes</li>
                </ul>
              </div>
              <div className="ml-auto">
                <ul className="font-medium text-sm">€{hasil}</ul>
                <ul className="font-light text-xs py-2">0</ul>
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
                <span className="font-normal text-sm ">€0</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="w-11/12 h-10  bg-black text-white "
                onClick={() => toCheckout()}
              >
                GO TO CHECKOUT
              </button>
            </div>
            <div className="w-full h-10 bg-gray-100"></div>
            <div className="mx-6 mt-4 py-2">
              <span className="font-semibold text-sm">Discount</span>
            </div>
            <div className="flex justify-center">
              <div>
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
        </div>
      </div>

      <MyComponent />
      <MyFooter />
    </>
  );
}
