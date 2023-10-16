import React, {useState} from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = ({ searchTerm, dispatch }) => {
    const [text, setText] = useState('');

    const handleSearchChange = e => {
        const userInput = setText(e.target.value);
        // console.log(setSearchTerm(userInput))
        dispatch(setSearchTerm(userInput))
    }

    const handleClearSearch = () => {
        setText('');
        dispatch(clearSearchTerm())
    }

   

    return (
        <div id="search-container">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input
                id="search"
                type="text"
                value={text}
                onChange={handleSearchChange}
                placeholder="Search products"
                />
                {text.length > 0 && (
                    <button
                        onClick={handleClearSearch}
                        type="button"
                        id="search-clear-button"
                    >
                        <img src={clearIconUrl} alt="" />
                    </button>
        )}
        </div>
      );
    };