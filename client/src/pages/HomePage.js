import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import HomePageSlide from '../components/Slides/HomePageSlide'
import Card from '../components/Card.js'
import "../styles/Homepage.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Services from '../components/Services'
import ClothesSlide from '../components/Slides/ClothesSlide'
import DiscountSlider from '../components/Slides/DiscountSlider'
import HandbagSlide from '../components/Slides/HandbagSlide'
import MobileSlide from '../components/Slides/MobileSlide'
import ProductUnderPricePage from './ProductUnderPricePage'
import { useProduct } from '../context/productContext'


const HomePage = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useProduct();
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [smartWatches, setSmartWatches] = useState([]);
    const [handbags, setHandbags] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [jewelery, setJewelery] = useState([]);
    const [loading, setLoading] = useState(false);

    const responsiveCard = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

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
    const getSmartWatches = async () => {
        try {

            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/product-category/smart-watches`
            );
            const limitedSmartWatches = data?.products.slice(0, 10);
            setSmartWatches(limitedSmartWatches);

        } catch (error) {
            console.log(error);
        }
    };
    const getHandbags = async () => {
        try {

            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/product-category/handbags`
            );
            const limitedHandBags = data?.products.slice(0, 10);
            setHandbags(limitedHandBags)
        } catch (error) {
            console.log(error);
        }
    };
    const getMobiles = async () => {
        try {

            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/product-category/mobiles`
            );
            const limitedmobiles = data?.products.slice(0, 10);
            setMobiles(limitedmobiles);

        } catch (error) {
            console.log(error);
        }
    };
    const getJewelery = async () => {
        try {

            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/product-category/jewelery`
            );
            const limitedJewelery = data?.products.slice(0, 10);
            setJewelery(limitedJewelery);

        } catch (error) {
            console.log(error);
        }
    };
    //get trending products

    const getTrendingProducts = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/trending-products`);
            setTrendingProducts(data?.products)
        } catch (error) {
            console.log(error);
        }
    };

    //get products

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/1`);
            setLoading(false);
            setProducts(data?.products);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const ProductUnderPrice = async (price) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-under/${price}`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const getPrductsByCategory = async (slug) => {
        try {

            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/product-category/${slug}`
            );
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllCategory()
        getTrendingProducts()
        getSmartWatches()
        getMobiles()
        getHandbags()
        getJewelery()
    }, [])


    return (
        <Layout title={"ALL Products - Best offers "}>
            <div className="homePage">
                <ClothesSlide />

                <div className="categories">
                    <div className='categorySliderHeading'>
                        Categories
                    </div>
                    <div className="categoryCardWrapper">
                        {
                            categories?.map((c) => (
                                <Link onClick={() => getPrductsByCategory(c.slug)} key={c._id} to={`/allproducts/${c.name}`} className="categoryCard">
                                    <div className="categoryImageWrapper">
                                        <img src={`/images/categories/${c.name}.png`} alt={c.name} />
                                    </div>
                                    <p className='categoryName'>{c.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="categorySlider cardSlider">
                    <div className='categorySliderHeading'>
                        Top Products
                    </div>
                    <Carousel responsive={responsiveCard}>
                        {
                            trendingProducts?.map((p) => (
                                <Card key={p._id} id={p._id} name={p.name} category={p.category} price={`₹ ${p.price}`} slug={p.slug} />
                            ))
                        }
                    </Carousel>
                </div>
                <div className="bazatBazar">
                    <div className='categorySliderHeading'>
                        Bazat Bazzar
                    </div>
                    <div className="bazatCardWrapper">

                        <Link onClick={() => ProductUnderPrice(99)} to={`/allproducts/Products Under 99`} className='btn bazatCard'>
                            <img className="image" src="/images/discounts/1.jpg" />
                        </Link>
                        <Link onClick={() => ProductUnderPrice(199)} to={`/allproducts/Products Under 199`} className='btn bazatCard'>
                            <img className="image" src="/images/discounts/2.jpg" />
                        </Link>
                        <Link onClick={() => ProductUnderPrice(399)} to={`/allproducts/Products Under 399`} className='btn bazatCard'>
                            <img className="image" src="/images/discounts/3.jpg" />
                        </Link>
                        <Link onClick={() => ProductUnderPrice(599)} to={`/allproducts/Products Under 599`} className='btn bazatCard'>
                            <img className="image" src="/images/discounts/4.jpg" />
                        </Link>
                    </div>
                </div>
                <div className="categorySlider">
                    <div className='categorySliderHeading'>Top SmartWatches</div>
                    <Carousel responsive={responsiveCard}>
                        {
                            smartWatches?.map((p) => (
                                <Card key={p._id} id={p._id} name={p.name} category={p.category} price={`₹ ${p.price}`} slug={p.slug} />
                            ))
                        }
                    </Carousel>
                </div>

                <HandbagSlide />

                <div className="categorySlider">
                    <div className='categorySliderHeading'>Top Handbags</div>
                    <Carousel responsive={responsiveCard}>
                        {
                            handbags?.map((p) => (
                                <Card key={p._id} id={p._id} desc={p.description} name={p.name} category={p.category} price={`₹ ${p.price}`} slug={p.slug} />
                            ))
                        }
                    </Carousel>
                </div>

                <div className="categorySlider">
                    <div className='categorySliderHeading'>Top Jewelery</div>
                    <Carousel responsive={responsiveCard}>
                        {
                            jewelery?.map((p) => (
                                <Card key={p._id} id={p._id} desc={p.description} name={p.name} category={p.category} price={`₹ ${p.price}`} slug={p.slug} />
                            ))
                        }
                    </Carousel>
                </div>

                <div className="categorySlider">
                    <div className='categorySliderHeading'>Top Mobiles</div>
                    <Carousel responsive={responsiveCard}>
                        {
                            mobiles?.map((p) => (
                                <Card key={p._id} id={p._id} name={p.name} desc={p.description} category={p.category} price={`₹ ${p.price}`} slug={p.slug} />
                            ))
                        }
                    </Carousel>
                </div>
            </div>

            <Services />
        </Layout>
    )
}

export default HomePage