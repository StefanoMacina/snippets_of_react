import React from "react";
import data from "../../cartData";
import Product from "./Product";
import { MdRemoveShoppingCart } from 'react-icons/md'

const CartItem = () => {

  return (
    <section>
        <div className="px-5">
            <header className="flex h-20 items-end justify-evenly relative text-sm font-semibold md:text-2xl">
                <div>Item</div>
                <div>Name</div>
                <div>Qty</div>
                <div>Price</div>
                <div className="text-red-600">
                <MdRemoveShoppingCart/>
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

export default CartItem;
