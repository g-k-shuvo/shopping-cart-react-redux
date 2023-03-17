import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../redux/actions";

const ProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, category, imageURL, price, quantity };
    dispatch(addNewProduct(product));
    setName("");
    setCategory("");
    setImageURL("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className='formContainer'>
      <h4 className='formTitle'>Add New Product</h4>
      <form className='space-y-4 text-[#534F4F]' id='lws-addProductForm'>
        <div className='space-y-2'>
          <label htmlFor='name'>Product Name</label>
          <input
            className='addProductInput'
            id='lws-inputName'
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='category'>Category</label>
          <input
            className='addProductInput'
            id='lws-inputCategory'
            type='text'
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='image'>Image Url</label>
          <input
            className='addProductInput'
            id='lws-inputImage'
            type='text'
            required
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <div className='grid grid-cols-2 gap-8 pb-4'>
          <div className='space-y-2'>
            <label htmlFor='price'>Price</label>
            <input
              className='addProductInput'
              type='number'
              id='lws-inputPrice'
              required
              min={0}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='quantity'>Quantity</label>
            <input
              className='addProductInput'
              type='number'
              id='lws-inputQuantity'
              min={0}
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <button
          type='submit'
          id='lws-inputSubmit'
          disabled={!name || !category || !imageURL || !price || !quantity}
          onClick={handleSubmit}
          className='submit'
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
