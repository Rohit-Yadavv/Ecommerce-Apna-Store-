import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/authContext'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {
    const [auth] = useAuth();
    const [product, setProduct] = useState([]);
    const [trending, setTrending] = useState([]);

    const getAllProducts = async () => {
        try {

            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-products`, {
                headers: {
                    Authorization: auth?.token
                }
            });
            setProduct(data.products)

        } catch (error) {
            toast.error("something went wrong");
        }
    }
    const getTrendingProducts = async () => {
        try {

            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/trending-products`, {
                headers: {
                    Authorization: auth?.token
                }
            });
            setTrending(data.products)

        } catch (error) {
            toast.error("something went wrong");
        }
    }
    useEffect(() => {
        getAllProducts()
        getTrendingProducts()
    }, [])

    return (
        <Layout>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1 className="text-center">Trending Products </h1>
                        <div className="m-1">
                            <div className="d-flex flex-wrap">

                                {trending?.map((p) => (
                                    <Link
                                        key={p._id}
                                        to={`/dashboard/admin/product/${p.slug}`}
                                        className="product-link"
                                    >
                                        <div className="card m-2" style={{ width: "18rem" }}>
                                            <img
                                                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                                                className="card-img-top"
                                                alt={p.name}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{p.name}</h5>
                                                <p className="card-text">{p.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}


                            </div>
                        </div>
                        <h1 className="text-center">All Products List</h1>
                        <div className="m-1">
                            <div className="d-flex flex-wrap">
                                {product?.map((p) => (
                                    <Link
                                        key={p._id}
                                        to={`/dashboard/admin/product/${p.slug}`}
                                        className="product-link"
                                    >
                                        <div className="card m-2" style={{ width: "18rem" }}>
                                            <img
                                                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                                                className="card-img-top"
                                                alt={p.name}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{p.name}</h5>
                                                <p className="card-text">{p.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Products