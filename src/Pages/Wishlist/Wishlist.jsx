import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import styles from '../../Components/Products/Products.module.scss'
import axios from 'axios'

const Wishlist = () => {
    const [data, setdata] = useState([])


    const getData = () => {
        axios.get(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist`)
            .then((res) => {
                setdata(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])



    const deleteItem = (item) => {
        axios.delete(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist/${item}`)
        setTimeout(() => {
            getData()
        }, 500);
    }


    return (
        <div>
            <Header />
            <div className={styles.Products}>
                <div className={styles.ProductsContainer}>
                    {data && data.map((item) => (
                        <div className={styles.ProductsCards}>
                            <img src={item.thumbnail} alt="" />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <div className={styles.butonlarrr}>
                                <button onClick={() => deleteItem(item.id)}>sill</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wishlist