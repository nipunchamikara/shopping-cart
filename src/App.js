import React, { useState } from "react";
import Item from "./Item";

export default function App() {

    // Stores list of items as a state
    const [items, setItems] = useState([
        {name: "Taco Seasoning", price: 2.25, qty: 0},
        {name: "Pinto Beans", price: 1.99, qty: 0},
        {name: "Sour Cream", price: 3.5, qty: 0},
    ]);

    const [total, setTotal] = useState(0);

    // Calculcates and updates total state
    const calcTotal = () => {
        const grandTotal = items.reduce((total, item) => {
            return total + (item.price * item.qty);
        }, 0);
    
        setTotal(grandTotal);
    };

    // Updates list and grand total
    function updateItems(newList) {
        setItems(newList);
        calcTotal();
    }

    const itemList = items.map((item, index) => (
        <Item key={index} index={index} item={item} items={items} updateItems={updateItems}/>
    ))

    return(
        <div id="ItemList" className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 rounded">
            <h2 id="heading">Shopping Cart</h2>
            {itemList}
            <h3 id="GrandTotal">Grand Total = {total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
        </div>
    );
};