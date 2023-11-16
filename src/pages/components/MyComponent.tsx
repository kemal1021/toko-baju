
// components/MyComponent.tsx
import React from "react";

const MyComponent: React.FC = () => {
  return (
    <div>
         <div className="h-screen w-ful"> 
  <div className="h-5/6 w-full bg-black ">
   <div className="grid grid-cols-2 h-full w-full">
<div className=" flex justify-center mt-80 ">
<span className="text-white text-3xl font-sans tracking-wide font-medium ">
Shop the latest styles
</span>
<div  className="  h-14 absolute mt-10 w-60">
   <a href="" className="text-white hover:mx-10 duration-300 ">Explore product ---->
   <div className="h-1 bg-sky-950 w-44 mt-2 flex">
    <div className="h-1 bg-white w-36 hover:w-44 duration-300 absolute"></div>
   </div>
 
   </a>
   
   </div>
   </div>
   <div className="py-20 p-4 w-6/12 flex justify-center  mx-96 ">
   <img src="/foto5.jpg" alt="" className="rounded-lg  w-full h-full  "  />

   </div>
   </div>
     
   
   </div>
</div>

    </div>
  );
};

export default MyComponent;
