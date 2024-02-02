import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";
import ItemForm from "./ItemForm";

function ShoppingList({ items, onFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
      // Filter by category
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // Filter by search query
      if (
        search !== "" &&
        !String(item.name).toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

    return true;
  });
  
  function handleSearch(event){
    setSearch(event.target.value)
  }


  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={onFormSubmit}
      />
      <Filter 
      search={search} 
      onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearch}
       />
      <ul className="Items" >
        {(itemsToDisplay).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
