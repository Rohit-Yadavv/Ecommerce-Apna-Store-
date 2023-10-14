import { useState, useContext, createContext } from "react";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     let existingCartItem = localStorage.getItem("cart");
    //     if (existingCartItem) setCart(JSON.parse(existingCartItem));
    // }, []);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {children}
        </ProductContext.Provider>
    );
};

// custom hook
const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };



