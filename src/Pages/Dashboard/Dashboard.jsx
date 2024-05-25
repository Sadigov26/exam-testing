import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.scss'
import axios from 'axios'
import Header from '../../Components/Header/Header'
import { useFormik } from 'formik'

const Dashboard = () => {
    const [data, setdata] = useState([])

    const getData = () => {
        axios.get(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`)
            .then((res) => {
                setdata(res.data)
            })
    }
    useEffect(() => { getData() }, [])

    const deleteItem = (item) => {
        axios.delete(`https://664c587c35bbda10987ff83d.mockapi.io/Basket/${item}`)
        setTimeout(() => {
            getData()
        }, 500);
    }




    const formik = useFormik({
        initialValues: {
            thumbnail: '',
            title: '',
            email: '',
        },
        onSubmit: values => {
           axios.post(`https://664c587c35bbda10987ff83d.mockapi.io/Basket` , values)
           setTimeout(() => {
            getData()
           }, 500);
        },
    });


    return (
        <div>
            <Header />




            <div className={styles.containerDash}>

                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="thumbnail"
                        name="thumbnail"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.thumbnail}
                    />
                     <input
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                     <input
                        id="price"
                        name="price"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />
                    

                    <button type="submit">Submit</button>
                </form>


                <div className={styles.dash}>
                    {data && data.map((item) => (
                        <div className={styles.dashCards}>
                            <img src={item.thumbnail} alt="" />
                            <p>{item.title}</p>
                            <p>{item.price} iran pulu</p>
                            <button onClick={() => deleteItem(item.id)}>sillllllll</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard