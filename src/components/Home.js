import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Product from "./Product";
import ProductForm from "./ProductForm";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <Header />
      <main className='py-16'>
        <div className='productWrapper'>
          <div className='productContainer' id='lws-productContainer'>
            {products.length === 0 ? (
              <p>Products not found!</p>
            ) : (
              products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  imageURL={product.imageURL}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))
            )}
          </div>

          <div>
            <ProductForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
