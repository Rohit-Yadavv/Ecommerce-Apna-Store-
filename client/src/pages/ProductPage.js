import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";
import { useProduct } from "../context/productContext";
import "../styles/products.css"
import Card from "../components/Card";

const ProductPage = ({ }) => {
    const { title } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useProduct();

    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useCart();

    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-categories`);
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getAllCategory();
    }, []);


    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };
    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    //get filterd product
    const filterProduct = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, {
                checked,
                radio,
            });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout title={"Products - Best offers "}>



            <div className="productpageWrapper container-fluid row mt-5 mb-5">
                <div className="col-md-2">
                    <div className="filterWrapper ">
                        <h4 className="text-center"> Categories</h4>
                        <div className="d-flex flex-column">
                            {categories?.map((c) => (
                                <Checkbox
                                    key={c._id}
                                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                                >
                                    <span className="ps-2"> {c.name}</span>
                                </Checkbox>
                            ))}
                        </div>
                    </div>
                    {/* price filter */}
                    <div className="filterWrapper">
                        <h4 className="text-center ">Prices</h4>
                        <div className="d-flex flex-column">
                            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                                {Prices?.map((p) => (
                                    <div key={p._id}>
                                        <Radio value={p.array}>
                                            <span className="ps-2"> {p.name}</span>
                                        </Radio>
                                    </div>
                                ))}
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <button
                            className="btn btn-danger"
                            onClick={() => window.location.reload()}
                        >
                            RESET FILTERS
                        </button>
                    </div>
                </div>
                <div className="col-md-9 offset-1">
                    <h1 className="text-uppercase text-center">{title}</h1>
                    <div className="productsContainer d-flex flex-wrap justify-content-center">
                        {
                            (!products.length) ?
                                (
                                    <div className="d-flex w-100 justify-content-center">
                                        <h3 style={{ textAlign: "center" }}>No Result Found !</h3>
                                    </div>
                                ) :
                                (
                                    products?.map((p) => (
                                        <Card key={p._id} id={p._id} name={p.name} category={p.category} price={`₹ ${p.price}`} slug={p.slug} />
                                    ))

                                )

                        }

                    </div>
                    {/* <div className="m-2 p-3">
                        {products && products?.length < total && (
                            <button
                                className="btn btn-warning"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage(page + 1);
                                }}
                            >
                                {loading ? "Loading ..." : "Loadmore"}
                            </button>
                        )}
                    </div> */}
                </div>
            </div>
        </Layout>
    );

}
export default ProductPage;
