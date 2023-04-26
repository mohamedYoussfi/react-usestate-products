import React, { useState } from "react";
import ProductItem from "./ProductItem";

function ProductsList(props) {
  const [checkStatus, setCheckStatus] = useState(false);
  const products = props.products;
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>
              <button
                onClick={() => {
                  props.onCheckAll(!checkStatus);
                  setCheckStatus(!checkStatus);
                }}
                className="btn btn-outline-danger"
              >
                <i
                  className={checkStatus ? "bi bi-check2-circle" : "bi bi-app"}
                ></i>
                <span className="m-1">
                  {products.filter((p) => p.checked).length}
                </span>
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  props.onDeleteCkecked();
                }}
                className="btn btn-outline-danger"
              >
                <i className={"bi bi-trash"}></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <ProductItem
              key={p.id}
              product={p}
              onCheck={props.onCheck}
              onDelete={props.onDelete}
            ></ProductItem>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductsList;
