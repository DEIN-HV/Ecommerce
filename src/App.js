import React, { useEffect, useState } from 'react'

import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const { data } = await commerce.products.list();
        setProduct(data);
        console.log(data)
    }



    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App
