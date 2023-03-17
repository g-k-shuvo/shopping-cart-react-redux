import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const Product = ({ id, name, category, imageURL, price, quantity }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, category, imageURL, price, quantity: 1 }));
  };

  return (
    <div className='lws-productCard'>
      <img className='lws-productImage' src={imageURL} alt='product' />
      <div className='p-4 space-y-2'>
        <h4 className='lws-productName'>{name}</h4>
        <p className='lws-productCategory'>{category}</p>
        <div className='flex items-center justify-between pb-2'>
          <p className='productPrice'>
            BDT <span className='lws-price'>{price}</span>
          </p>
          <p className='productQuantity'>
            QTY <span className='lws-quantity'>{quantity}</span>
          </p>
        </div>
        <button
          className='lws-btnAddToCart'
          disabled={quantity === 0}
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
