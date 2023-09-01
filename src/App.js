import React, { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';
const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  // const [categories, setCategories] = useState(allCategories);
  const categories = allCategories;
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all') {
      return setMenuItems(items);
    }  
    const newItems = items.filter((item) => item.category === category )   
    return setMenuItems(newItems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>

        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App
