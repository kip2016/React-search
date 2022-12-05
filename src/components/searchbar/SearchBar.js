import React, { useState } from "react";

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredproducts = products.filter((product) => {
    return product.includes(searchTerm);
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleClear = () => {
    setSearchTerm("");
  };

  const displayClear = searchTerm.length > 0;
  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {displayClear && <button onClick={handleClear}>clear</button>}

      {filteredproducts.map((product) => {
        return <li key={product}>{product}</li>;
      })}
      <hr />
    </div>
  );
};

export default SearchBar;
