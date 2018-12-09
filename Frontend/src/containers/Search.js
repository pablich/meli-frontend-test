import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.handleSearch} className="nav-search">
        <input
          type="text"
          className="nav-search-input"
          placeholder="Nunca dejes de buscar"
        />
        <button className="nav-search-btn" aria-label="buscar" type="button">
          <i className="nav-icon-search">
            <span>buscar</span>
          </i>
        </button>
      </form>
    );
  }
}
export default Search;
