import React from "react";
import Product from "./Product";
import { MdRemoveShoppingCart } from 'react-icons/md'
import { useGlobalContext } from "../context/context";
import { DELETE_ALL_ITEMS } from "../context/action";


const CartItem = () => {

    const {deleteAllitems, products} = useGlobalContext()

  return (
    <section>
        <div className="px-5">
            <header className="flex h-20 items-end justify-evenly relative text-sm font-semibold md:text-2xl">
                <div>Item</div>
                <div>Name</div>
                <div>Qty</div>
                <div>Price</div>
                <div className="text-red-600">
                <button onClick={deleteAllitems}  className="active:scale-110">
               <MdRemoveShoppingCart/>
                </button>
                </div>
            </header>
            <hr className="mt-2"/>
        </div>
        <main className="mx-5 md:mx-24">
            {
                products.map((el) => {
                    
                    return (
                       
                        <Product key={el._id} {...el}/>
                       
                    )
                })
            }
        </main>
    </section>
  );
};

export default CartItem;
