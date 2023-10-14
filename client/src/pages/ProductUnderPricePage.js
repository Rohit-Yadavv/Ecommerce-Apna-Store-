
import axios from 'axios';
import { useProduct } from '../context/productContext';
import { useNavigate, useParams } from 'react-router-dom';

const ProductUnderPricePage = async () => {
    const Navigate = useNavigate()
    const { price } = useParams();
    const [products, setProducts] = useProduct();

    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/productt/product-under/${price}`);
        setProducts(data.products);
        console.log(products)
        Navigate("/allproducts")
    } catch (error) {
        console.log(error);
    }
};


export default ProductUnderPricePage