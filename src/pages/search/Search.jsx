import { useState, useEffect } from 'react';
import axios from 'axios';
import { search as searchFunction } from './SearchFunction';
import Bttn_Back from '../../components/bttns/bttn_Back/Bttn_Back'
import './Search.scss'
import Menu from '../../components/menu/menu/Menu';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({
    filteredProducts: [],
    filteredAllergies: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://node-basic-wheat.vercel.app/producto');
        const products = response.data.data;
        setSearchResults({ filteredProducts: products, filteredAllergies: [] });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const { filteredProducts, filteredAllergies } = searchFunction(searchTerm, searchResults.filteredProducts, []);

    setSearchResults({ filteredProducts, filteredAllergies });
  };

  return (
    <div className='productos'>
        <div className="butt">
            <Bttn_Back />
        </div>
          
        <h1>Busca tu alergia o producto</h1>
        <div className='search'>
            <input
            className='prod-busc'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button id="butt-busc" onClick={handleSearch}>
                <span className="material-symbols-outlined">search</span>
                    
            </button>
        </div>
      {/* Display search results */}
      <div className='prod-res'>
        <h2>Productos</h2>
        {searchResults.filteredProducts.map((product) => (
            <div className='prod-indv'
                key={product._id}>
                <h3>{product.name}</h3>
                <img src={product.coverImage} alt={product.name} />
                <p className='ingr'>Ingredientes: <p className='ind'>{product.ingredients.join(', ')}</p></p>
                <p className='ingr'>Contiene este alérgeno: <p className='aler'>{product.allergy.map((allergy) => allergy.name).join(', ')}</p></p>
          </div>
        ))}
      </div>
        <Menu></Menu>
    </div>
  );
};

export default SearchPage;