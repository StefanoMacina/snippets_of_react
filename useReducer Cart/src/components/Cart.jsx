import React from "react";

const Cart = () => {

  return (
    <section className=" my-10 flex justify-center lg:justify-end lg:mr-10">
      <div className="ring-1 ring-zinc-600/25 w-10/12 lg:w-1/3 text-center grid grid-rows-3 gap-4 p-4 rounded-md bg-orange-100/20">
        <div className="">
          <p className="font-semibold">Carrello</p>
          <hr />
        </div>
        
        <div className="">
          <p className="font-semibold"> € 2099</p>
          <hr />
        </div>

        <div className="">
          <button className="bg-cyan-600 rounded-full px-4 w-1/3 h-6 text-xs"><p className="font-bold text-white">CHECKOUT</p></button>
        </div>

      </div>
    </section>
  );
};

export default Cart;
