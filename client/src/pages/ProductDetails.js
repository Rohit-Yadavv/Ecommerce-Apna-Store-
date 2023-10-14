import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import "../styles/productDetails.css"
import { toast } from 'react-hot-toast';
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/cart";


const ProductDetails = () => {

    const [cart, setCart] = useCart();
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    //initalp details
    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug]);
    //getProduct
    const getProduct = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
            );
            setProduct(data?.product);
            getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };
    //get similar product
    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
            );
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout>

            <div className="productWrapper">
                <div className="productDetailsWrapper row container m-3">
                    <h2 className="text-center">Product Details</h2>
                    <div className="imageWrapper col-md-5">
                        <img
                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                            className="card-img-top"
                            alt={product.name}
                            height="300"
                            width={"350px"}
                        />
                    </div>
                    <div className="detailsWrapper col-md-6 ">
                        <h6>Name : {product.name}</h6>
                        <h6>Description : {product.description}</h6>
                        <h6>Price : ₹{product.price}</h6>
                        <h6>Category : {product?.category?.name}</h6>
                        {/* <button class="btn ms-1"></button> */}
                        <button
                            className="btn ms-1"
                            onClick={() => {
                                setCart([...cart, product]);
                                localStorage.setItem(
                                    "cart",
                                    JSON.stringify([...cart, product])
                                );
                                toast.success("Item Added to cart");
                            }}
                        >
                            <FiShoppingCart style={{ margin: "0px 5px" }} /> ADD TO CART
                        </button>

                    </div>
                </div>
                <hr />

                {/* similat products  */}
                <div className="productDetailsWrapper row container m-3">
                    <h4>Similar Products</h4>
                    {relatedProducts.length < 1 && (
                        <p className="text-center">No Similar Products found</p>
                    )}
                    <div className="justify-content-center d-flex flex-wrap">
                        {relatedProducts?.map((p) => (
                            <Card key={p._id} id={p._id} name={p.name} category={p.category} price={`₹ ${p.price}`} slug={p.slug} />
                        ))}
                    </div>
                </div>
                {/* </div> */}
            </div>


        </Layout >
    );
};

export default ProductDetails;