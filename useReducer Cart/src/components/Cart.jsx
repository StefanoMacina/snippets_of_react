import React from "react";
import deleteCart from "../assets/deleteCart.svg";
import data from "../../cartData";
import Product from "./Product";

const Cart = () => {

  return (
    <section>
        <div className="px-5">
            <header className="flex h-20 items-end justify-evenly relative text-sm font-semibold">
                <div>Item</div>
                <div>Name</div>
                <div>Qty</div>
                <div>Price</div>
                <div>
                <img src={deleteCart} alt="" className=""/>
                </div>
            </header>
            <hr className="mt-2"/>
        </div>
        <main className="mx-5 md:mx-24">
            {
                data.map((el) => {
                    
                    return (
                       
                        <Product key={el.id} {...el}/>
                       
                    )
                })
            }
        </main>
    </section>
  );
};

export default Cart;
