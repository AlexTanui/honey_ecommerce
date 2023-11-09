import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './products.css'
const ProductCard = ({ addToCart }) => {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:80/honey-types')
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);

    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input id="input"
        type="text"
        placeholder="Search by product name"
        value={searchText}
        onChange={handleSearchChange}
      />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredProducts.map((product) => (
         <div class="col">
    <div class="card">
      <img src={product.image_url} className="card-img-top" alt="product image" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.amount.toFixed(2)}</p>
              <button id="btn" onClick={() => addToCart(product)} className="btn btn-warning">
                Add to cart
              </button>
      </div>
    </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
