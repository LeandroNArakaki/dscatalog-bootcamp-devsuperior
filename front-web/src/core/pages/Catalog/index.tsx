import React, { useEffect } from 'react';
import './styles.scss';
import ProductCard from './components/ProductCard';
import { Link } from 'react-router-dom';

const Catalog = () => {
    //1- Quando o componente iniciar, buscar a lista de produtos
    //2- Quando a lista de produtos estiver disponível, popular um estado no componente e listar os produtos dinâmicamente

    useEffect( () => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(response => console.log(response));
    }, [] );


    return (
        <div className="catalog-container">
            <h1 className="catalog-title">Catálogo de produtos</h1>
            <div className="catalog-products">
                <Link to="/products/1"><ProductCard /></Link>
                <Link to="/products/2"><ProductCard /></Link>
                <Link to="/products/3"><ProductCard /></Link>
                <Link to="/products/4"><ProductCard /></Link>
                <Link to="/products/5"><ProductCard /></Link>
                <Link to="/products/6"><ProductCard /></Link>
                <Link to="/products/7"><ProductCard /></Link>
                <Link to="/products/8"><ProductCard /></Link>
                <Link to="/products/9"><ProductCard /></Link>
            </div>
        </div>
    )
};

export default Catalog;