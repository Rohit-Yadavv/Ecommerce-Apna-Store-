import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import axios from 'axios';
import { useProduct } from '../../context/productContext';

const SearchInput = () => {
    const [products, setProducts] = useProduct()
    const [searchKeyword, setSearchKeyword] = useState("");

    // const [searchKeyword, setValues] = useSearch()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/search/${searchKeyword}`)
            setProducts(data);
            navigate(`/allproducts/${searchKeyword}`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className="search-form w-50 btn" onSubmit={handleSubmit}>
            <input className='search-input w-100' type="search" placeholder='Search Here' onChange={(e) => setSearchKeyword(e.target.value)} value={searchKeyword} />
            <button className='search-button btn' type='submit'>
                <FiSearch style={{ fontSize: "1.5rem", margin: "0px 10px" }} />
            </button>
        </form>
    )
}

export default SearchInput