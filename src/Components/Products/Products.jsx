import React, { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import axios from 'axios'

const Products = () => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")






    const getData = () => {
        axios.get(`https://dummyjson.com/products`)
            .then((res) => {
                setData(res.data.products)
            });
    }
    useEffect(() => { getData() }, [])


    const addToCard = (item) => {
        axios.post(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`, item)
    }
    const addToWish = (item) => {
        axios.post(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist`, item)
    }


    const sorteddataAZ = () => {
        const sorteddata = [...data].sort((a, b) => a.title.localeCompare(b.title))
        setData(sorteddata)
    }

    const sorteddataZA = () => {
        const sorteddata = [...data].sort((a, b) => b.title.localeCompare(a.title))
        setData(sorteddata)
    }




    const handleSearchChange = (item) => {
        setSearchTerm(item.target.value)
    }

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <div className={styles.Products}>
                <div className={styles.butonlarrr}>
                    <button onClick={sorteddataAZ}>a-z</button>
                    <button onClick={sorteddataZA}>z-a</button>
                </div>
                <input type="text" placeholder='axtar.....'
                onChange={handleSearchChange}
                />
                <div className={styles.ProductsContainer}>
                    {data && filteredData.map((item) => (
                        <div className={styles.ProductsCards}>
                            <img src={item.thumbnail} alt="" />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <div className={styles.butonlarrr}>
                                <button onClick={() => addToCard(item)}>add to card</button>
                                <button onClick={() => addToWish(item)}>add to wish</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products