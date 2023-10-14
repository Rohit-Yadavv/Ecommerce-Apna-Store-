import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PolicyPage from './pages/PolicyPage'
import PageNotFound from './pages/PageNotFound'
import RegisterPage from './pages/Auth/RegisterPage.js'
import LoginPage from './pages/Auth/LoginPage.js'
import ForgetPassword from './pages/Auth/ForgetPassword.js'
import Dashboard from './pages/users/Dashboard.js'
import Orders from './pages/users/Orders'
import Profile from './pages/users/Profile'
import AdminDashboard from './pages/Admin/AdminDashboard.js'
import CreateCategory from './pages/Admin/CreateCategory'
import CreateProduct from './pages/Admin/CreateProduct'
import PrivateRoute from './components/Routes/PrivateRoutes.js'
import AdminRoute from './components/Routes/AdminRoute.js'
import Product from './pages/Admin/Products'
import UpdateProduct from './pages/Admin/UpdateProduct'
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage"
import Search from './pages/Search'
import AdminOrders from './pages/Admin/AdminOrders'
import ProductUnderPricePage from './pages/ProductUnderPricePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        {/* auth  */}
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forget-password' element={<ForgetPassword />} />

        {/* about contact policy  */}
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/policy' element={<PolicyPage />} />

        {/* search cart  */}
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartPage />} />


        {/* products */}
        <Route path="/allproducts/:title" element={<ProductPage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/products-under/:price" element={<ProductUnderPricePage />} />

        {/* user PrivateRoutes */}

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        {/* Admin routes  */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/products" element={<Product />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App