import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { Link } from 'react-router-dom';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { ProductsResponse } from 'core/types/Products';
import ProductCardLoader from './components/Loaders/ProductCardLoader';


const Catalog = () => {
    //1- Quando o componente iniciar, buscar a lista de produtos
    //2- Quando a lista de produtos estiver disponível, popular um estado no componente e listar os produtos dinâmicamente
    const [productsResponse, setProductsReponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }

        //iniciar o loader
        setIsLoading(true);
        makeRequest({ url: '/products', params })
            .then(response => setProductsReponse(response.data))
            .finally(() => {
                //finaliza o loader
                setIsLoading(false);
            })
    }, []);


    return (
        <div className="catalog-container">
            <h1 className="catalog-title">Catálogo de produtos</h1>
            <div className="catalog-products">
                {isLoading ? <ProductCardLoader /> : (
                    productsResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
};

export default Catalog;