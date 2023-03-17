import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItems from "./CartItems";
import Header from "./Header";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <Header />
      <main className='py-16'>
        <div className='container 2xl:px-8 px-2 mx-auto'>
          <h2 className='mb-8 text-xl font-bold'>Shopping Cart</h2>
          <div className='cartListContainer'>
            <div className='space-y-6'>
              {cartItems.length === 0 ? (
                <p>Cart is empty!</p>
              ) : (
                cartItems.map((cartItem) => (
                  <CartItems
                    key={cartItem.id}
                    id={cartItem.id}
                    imageURL={cartItem.imageURL}
                    name={cartItem.name}
                    category={cartItem.category}
                    price={cartItem.price}
                    quantity={cartItem.quantity}
                  />
                ))
              )}
            </div>
            <div>
              <BillDetails />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
