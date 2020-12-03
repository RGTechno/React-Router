import React, { useEffect, useState } from 'react';
import './App.css';

function Item({ match }) {

    const [item, setItem] = useState({});

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://reqres.in/api/users/${match.params.id}`);
        const detail = await fetchItem.json();
        console.log(detail);
        setItem(detail.data);
    }
    return (
        <div>
            <h1>{item.first_name} {item.last_name}</h1>
            <h3>{item.email}</h3>
            <img src={item.avatar} alt=""/>
        </div>
    );
}

export default Item;
