import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '75vh', marginTop: "70px" }}>

                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 3000,
                    }}
                />
                {children}
            </main>

            <Footer />
        </>
    )
}
Layout.defaultProps = {
    title: 'Ecommerce App-shop now',
    description: 'Mern-Stack Project',
    keywords: 'mern, resct, node, mongodb',
    author: "Rohit",
}

export default Layout