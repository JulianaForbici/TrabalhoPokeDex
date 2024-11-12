import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Container } from 'react-bootstrap';
import './style.css';

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await response.json();
                setProducts(data.slice(0, 12)); 
                setFilteredProducts(data.slice(0, 12)); 
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        }

        fetchProducts();
    }, []);

    const handleSearch = (searchText) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            
            <div className="background-img">
                <Container>
                    <div className="product-list">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="product-count">
                        Mostrando {filteredProducts.length} produtos
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default App;