import React from "react";
import FilterLogo from '../imgs/filter.svg';
import SearchLogo from '../imgs/search.svg';
import './FilterSearch.css';

export default class FilterSearch extends React.Component {
    render() {
        return (
            <div className="navBar">
                <button className="navBar-icons">
                    <img src={FilterLogo} alt="test" />
                </button>
                <div className='search-container'>
                    <img className='search-logo' src={SearchLogo} alt="test" />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
        );
    }
}