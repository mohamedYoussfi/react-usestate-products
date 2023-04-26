import React, { useState } from "react";
import NewProduct from "./NewProduct";
import ProductsList from "./ProductsList";

function Product() {
  const [products, setProducts] = useState([
    { id: 1, name: "Computer", price: 3400, checked: true },
    { id: 2, name: "Printer", price: 1200, checked: false },
    { id: 3, name: "Smart Phone", price: 800, checked: true },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const handleCkeck = (product) => {
    product.checked = !product.checked;
    let productsList = products.map((p) => (p.id == product.id ? product : p));
    setProducts(productsList);
  };
  const handledelete = (product) => {
    let productsList = products.filter((p) => p.id != product.id);
    setProducts(productsList);
  };
  const handledeleteCkecked = () => {
    let productsList = products.filter((p) => p.checked == false);
    setProducts(productsList);
  };
  const handleCheckAll = (value) => {
    let productsList = products.map((p) => {
      p.checked = value;
      return p;
    });
    setProducts(productsList);
  };
  return (
    <>
      <NewProduct onAdd={addProduct} />
      <ProductsList
        products={products}
        onCheck={handleCkeck}
        onDelete={handledelete}
        onCheckAll={handleCheckAll}
        onDeleteCkecked={handledeleteCkecked}
      />
    </>
  );
}

export default Product;
