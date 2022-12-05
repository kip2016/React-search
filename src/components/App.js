import React from "react";
import CounterButton from "./countbutton/CounterButton";
import SearchBar from "./searchbar/SearchBar";
import { useEffect, useState } from "react";

const App = () => {
  const [productState, setProductState] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then((productsArray)=>{
              const newProductState = productsArray.map((product) => {
                return product.title
              })
              setProductState(newProductState)
            })

  
  }, []);

  const hasproducts = productState.length > 0;
  return (
    <div>
      {hasproducts ? <SearchBar products={productState} /> : "Loading..."}

      <CounterButton incrementBy={1} />
      <CounterButton incrementBy={5} />
      <CounterButton incrementBy={7} />
    </div>
  );
};

export default App;
