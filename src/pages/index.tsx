import React, { useEffect, useState } from "react";
import MyComponent from "./components/MyComponent";
import MyFooter from "./components/MyFooter";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

function My() {
  const router = useRouter(); // Use useRouter() from Next.js
  const cookies = new Cookies();

  const [bg, setbg] = useState("");

  const fotoh = [
    {
      foto: "baju1",
      title: "T-Shirt North America",
      desc: "A comfortable T-shirt from North America that's perfect for everyday wear.",
      price: "19.50",
      tipe: "tshirt",
      material: "100%",
      wieght: "ee",
      conintry: "e",
      dimensions: "e",
      type: "e",
    },
    {
      foto: "baju1.1",
      title: "T-Shirt Europe",
      desc: "A comfortable T-shirt from North America that's perfect for everyday wear.",
      price: "19.50",
      tipe: "tshirt",
      material: "100%",
      wieght: "-",
      conintry: "",
      dimensions: "-",
      type: "-",
    },
    {
      foto: "baju2",
      title: "Hoodie Sounth America",
      desc: "A soft, warm hoodie from South America that's perfect for keeping you cozy.  ",
      price: "36.50",
      tipe: "Hoodies",
      material: "100%",
      wieght: "-",
      conintry: "-",
      dimensions: "-",
      type: "-",
    },
    {
      foto: "baju2.1",
      title: "Hoodie Africa",
      desc: "A soft, warm hoodie from South America that's perfect for keeping you cozy.  ",
      price: "36.50",
      tipe: "Hoodies",
      material: "100%",
      wieght: "-",
      conintry: "-",
      dimensions: "-",
      type: "-",
    },
    {
      foto: "baju2.2",
      title: "Hoodie EPEP",
      desc: "A soft, warm hoodie from South America that's perfect for keeping you cozy.  ",
      price: "36.50",
      tipe: "Hoodies",
      material: "100%",
      wieght: "-",
      conintry: "-",
      dimensions: "-",
      type: "-",
    },
    {
      foto: "baju3",
      title: "Tote Bag Australia",
      desc: "A stylish tote bag from Australia that's perfect for carrying your essentials.",
      price: "18.00",
      tipe: "Bags",
      material: "100%",
      wieght: "500 g",
      conintry: "AU",
      dimensions: "100 x 100W x 20H",
      type: "-",
    },
    {
      foto: "baju3.1",
      title: "Tote Bag Asia",
      desc: "A stylish tote bag from Australia that's perfect for carrying your essentials.",
      price: "18.00",
      tipe: "Bags",
      material: "100%",
      wieght: "500 g",
      conintry: "AU",
      dimensions: "100 x 100W x 20H",
      type: "-",
    },
    {
      foto: "baju4",
      title: "Tote Bag ASIA",
      desc: "A stylish tote bag from Australia that's perfect for carrying your essentials.",
      price: "18.00",
      tipe: "Bags",
      material: "100%",
      wieght: "500 g",
      conintry: "AU",
      dimensions: "100 x 100W x 20H",
      type: "-",
    },
  ];

  useEffect(() => {
    setbg(`url(/page.jpg)`);
  });

  const rmope = cookies.get("Detail");
  cookies.remove(rmope);
  cookies.set("fotoh", fotoh);

  const getC = cookies.get("fotoh");

  // If 'getC' is null or undefined, initialize an empty array
  const retrievedFotoh = getC || [];
  const data1 = retrievedFotoh[0];
  const data2 = retrievedFotoh[2];
  const data3 = retrievedFotoh[5];
  const data4 = retrievedFotoh[7];

  const validateData = (fotoh: any) => {
    cookies.set("fotoh", fotoh);

    const getC = cookies.get("fotoh");

    const url = `store`;
    router.push({
      pathname: url,
    });
  };

  const validateFoto = (data1: any, title: any) => {
    cookies.set("Detail", data1);

    const url = `product/${title}`;
    router.push({
      pathname: url,
    });
  };
  return (
    <div>
      <div className=" h-screen relative">
        <div
          className="absolute inset-0 flex items-center"
          style={{
            backgroundImage: bg,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div className="mx-36 text-gray-50 font-semibold w-4/12">
            <span className="text-3xl ">Summer styles are finally here</span>
            <p className="py-2">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
            <div className="hover:mx-10 duration-300 cursor-pointer ">
              <div className="flex">
                <div>
                  <span onClick={() => validateData(fotoh)}>
                    Explore product
                  </span>
                </div>
                <div className="pt-1 pl-3">
                  <img
                    src="fast-forward-double-right-arrows-symbol_54366.png"
                    alt=""
                    className="w-5 "
                  />
                </div>
              </div>

              <div className="h-1 bg-black w-44 mt-2 flex">
                <div className="h-1 bg-white w-36 hover:w-44 duration-300 absolute"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-14 relative w-auto fixed">
          <div className="">
            <a
              className="text-slate-200 mx-5 absolute py-4 flex-row"
              href="/store"
            >
              Store
            </a>
          </div>
          <div className="" style={{ marginLeft: "770px" }}>
            <a
              href="/"
              className="text-slate-200 absolute py-4 font-bold text-3xl"
            >
              ACME
            </a>
          </div>
          <div className="" style={{ marginLeft: "1520px" }}>
            <span className="text-slate-200 absolute py-4 flex-row">
              Account
            </span>
          </div>
          <div className="" style={{ marginLeft: "1600px" }}>
            <a href="/card" className="text-slate-200 absolute py-4 flex-row">
              My Bag()
            </a>
          </div>
        </div>
      </div>

      <div className="w-full bg-white pb-40">
        <div className="text-center py-32 items-center">
          <span className="text-center text-sm opacity-70 ">
            Latest products
          </span>
          <div>
            <span className="font-semibold text-2xl ">
              Our newest styles are here to help you look your best.
            </span>
          </div>
          <div className=" ">
            <a href="">Explore product</a>
            <div
              className="h-1 w-44 bg-black hover:w-1/12 duration-300"
              style={{ marginLeft: "47pc", marginTop: "8px" }}
            ></div>
          </div>
        </div>
        <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-4 md:ml-8 lg:ml-20">
          <div
            className="w-80 h-96 cursor-pointer"
            onClick={() => validateFoto(data1, data1.title)}
          >
            <img
              src={`${data1.foto}.jpg`}
              alt="Your Image"
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <span className="text-sm tracking-normal">{fotoh[0].title}</span>
            <div>
              <span className="text-sm">€{fotoh[0].price}</span>
            </div>
          </div>
          <div
            className="w-80 h-96  cursor-pointer "
            onClick={() => validateFoto(data2, data2.title)}
          >
            <img
              src={`${data2.foto}.jpg`}
              alt="Your Image"
              className="w-full h-full object-cover object-center rounded-lg "
            />
            <span className="text-sm tracking-normal">{fotoh[2].title}</span>
            <div>
              <span className="text-sm">€{fotoh[2].price}</span>
            </div>
          </div>
          <div
            className="w-80 h-96 cursor-pointer "
            onClick={() => validateFoto(data3, data2.title)}
          >
            <img
              src={`${data3.foto}.jpg`}
              alt="Your Image"
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <span className="text-sm tracking-normal">{fotoh[5].title}</span>
            <div>
              <span className="text-sm">€{fotoh[5].price}</span>
            </div>
          </div>
          <div
            className="w-80 h-96 cursor-pointer"
            onClick={() => validateFoto(data4, data4.title)}
          >
            <img
              src={`${data4.foto}.jpg`}
              alt="Your Image"
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <span className="text-sm tracking-normal">{fotoh[7].title}</span>
            <div>
              <span className="text-sm">€{fotoh[7].price}</span>
            </div>
          </div>
        </div>
      </div>
      <MyComponent />

      <MyFooter />
    </div>
  );
}

export default My;
