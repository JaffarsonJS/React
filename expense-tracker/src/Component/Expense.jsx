import React, { useState } from "react";
import Form from "./Form.jsx";
import i from "./Form.module.css";
import ProductList from "./ProductList.jsx";
import Budgets from "./Budgets.jsx";

function Expense() {
  let [data, setData] = useState([]);
  let [cost, setCost] = useState(0);
  let getProductData = (data) => {
    setData(data);
  };
  let getTotalCost = (cost) => {
    setCost(cost);
  };
  return (
    <>
      <Budgets cost={cost} />
      <section className={i.sectionParent}>
        <div>
          <Form getProductData={getProductData} />
        </div>
        <div>
          <ProductList data={data} getTotalCost={getTotalCost} />
        </div>
      </section>
    </>
  );
}

export default Expense;
