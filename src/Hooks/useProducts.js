import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
export default function useProducts() {
    // useSelector((state) => console.log(state.products));
    const categories = useSelector((state) => state.products.categories).filter(product => product.enabled).sort((a, b) => a.order - b.order);
    const products = useSelector((state) => state.products.products);
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch("/products/:id");
    const [filteredProducts, setFilteredProducts] = useState(products);
    useEffect(() => {
        match ? setFilteredProducts(products && products.filter(product => product.category === match.params.id))
            : setFilteredProducts(products)
    }, [location, products])
    const handleProduct = (id) => {
        id ? history.push(`/products/${id}`) : history.push('/products')
    }
    return {
        categories,
        filteredProducts,
        handleProduct,
    }
}