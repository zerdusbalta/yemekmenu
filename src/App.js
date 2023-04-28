import React, { useState } from "react";
import info from './info'
import CategoryList from "./CategoryList";
import MenuList from "./MenuList";
import './index.css'

const allCategories = ['all', ...new Set(info.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(info);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenuItems(info);
      return;
    }

    const newItems = info.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <CategoryList categories={categories} filterMenu={filterMenu} />
        <MenuList items={menuItems} />

      </section>
    </main>
  );
}

export default App;