import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Shop() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetch("https://reqres.in/api/users?page=1");
        const items = await data.json();
        console.log(items);
        setItems(items.data);
    }
    return (
        <div>
            {
                items.map(item => (
                    <h2 key={item.id}><Link to={`/shop/${item.id}`}>{item.first_name}</Link></h2>
                ))
            }
        </div>
    );
}

export default Shop;
