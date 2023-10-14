import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { FiShoppingCart } from "react-icons/fi";

import { FiUser } from "react-icons/fi";
import axios from "axios";
import { useProduct } from "../../context/productContext";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();
    const [products, setProducts] = useProduct()
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    };
    const ProductUnder99 = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-under/99`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="p-0 navbar-brand">
                        <img style={{ height: "50px", width: "150px" }} src="/logo2.jpg" alt='Ecommerce' />
                    </Link>
                    <button
                        className="navbar-toggler border-0 p-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav w-100 align-items-center justify-content-end">

                            <SearchInput />

                            {!auth?.user ? (
                                <>
                                    <li className="nav-item ms-3">
                                        <NavLink to="/register" className="btn navbar-item">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ms-3">
                                        <NavLink to="/login" className="btn navbar-item ">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item dropdown ms-3">
                                        <NavLink
                                            className="navbar-item btn dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            style={{ padding: "0", border: "none" }}
                                        >
                                            <span className="pe-2">{auth?.user?.name}</span>
                                            <FiUser style={{ fontSize: '1rem' }} />
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink

                                                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                                        }`}
                                                    className="dropdown-item"

                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink

                                                    onClick={handleLogout}
                                                    to="/login"
                                                    className="dropdown-item"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}
                            <li className="nav-item ms-3">
                                <NavLink
                                    onClick={ProductUnder99}
                                    to={`/allproducts/Products Under 99`}
                                    className=" navbar-item btn"
                                    role="button"
                                    style={{ padding: "0" }}
                                >

                                    Under  ₹99

                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink to="/cart"

                                    className="cart-trolley--link navbar-item btn"
                                    role="button"
                                >
                                    <span className="cart-trolley cart-total--item position-absolute top-1 start-100 translate-middle">
                                        {
                                            (cart) ? cart?.length : 0
                                        }
                                    </span>
                                    <FiShoppingCart style={{ fontSize: '1.2rem', color: "#434242" }} className="cart-trolley position-relative" />
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div style={{ marginButton: "70p" }}></div> */}
        </>
    );
};

export default Header;