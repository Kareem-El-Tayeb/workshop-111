import React, { useEffect, useState } from "react";
import productsStyle from "./products.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartSlice } from "../Redux/cartSlice";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  });
  const dispatch = useDispatch();
  return (
    <section className={productsStyle.productsContainer}>
      {products.map((el) => (
        <div className={productsStyle.product} key={el.id}>
          <img src={el.thumbnail} alt="" />
          <h2>{el.title}</h2>
          <p>{el.category}</p>
          <Link to={""}>Read More</Link>
          <button onClick={() => dispatch(cartSlice.actions.addToCart(el))}>
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default Products;
