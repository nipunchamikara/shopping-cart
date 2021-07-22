import React from "react";

export default function Item(props) {
    const qty = props.item.qty;

    // Increment/decrement quantity
    function incrementQty(increment) {
        const newQty = parseInt((increment) ? qty + 1 : Math.max(qty - 1, 0));
        updateList(newQty);
    }

    // Update quantity (from input field)
    function updateQty(qty) {
        if (qty === "" || qty < 0) {
            qty = 0;
        }
        qty = parseInt(qty);
        updateList(qty);
    }

    // Updates list
    function updateList(newQty) {
        // Creates newList with updated quantity
        const newList = props.items.map((item, index) => {
            if (index === props.index) {
                item.qty = newQty;
            }
            return item;
        })

        // Update state
        props.updateItems(newList);
    }

    return (
        <div className="item rounded">
            <h4>Name: {props.item.name}</h4>
            <h5>Price: {props.item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h5>
            <h5>Quantity:</h5>
            <div className="row">
                <button className="btn btn-primary col-2 left" onClick={() => incrementQty(false)}>-1</button>
                <input className="col-8 qty" value={qty} onChange={e => {updateQty(e.target.value)}}/>
                <button className="btn btn-primary col-2 right" onClick={() => incrementQty(true)}>+1</button>
            </div>
            <h4>Total: {(props.item.price * qty).toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>
        </div>
    );
};