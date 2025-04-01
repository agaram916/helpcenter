// src/Search.js
'use client';
import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';


const Search = () => {
  const items: any = [
    { name: 'Products', path: '/productdocument', breadcrumb: "Home > Article > Products" },
    { name: 'Qualis LIMS data management system', path: '/LIMSLayout' },
    { name: 'Article Products', path: '/productdocument' },
    { name: 'ELN Article', path: '/troublearticle' },
    { name: 'Logilab ELN - how to create user role', path: '/QuickTour' },
    { name: 'Videos', path: '/productvideo' },
  ];

  const [searchValue, setSearchValue] = useState('');

  const handleOnSearch = (string: any, results: any) => {
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    console.log(result);
  };

  const handleOnSelect = (item: any) => {
    console.log('Selected item:', item);
    window.open(item.path, '_blank'); // Open the file path in a new tab
  };

  const handleOnFocus = () => {
    console.log('Input focused');
  };

  const formatResult = (item: any) => {
    return (
      <div style={{ display: 'block', textAlign: 'left' }}>
        <strong>{item.name}</strong>
        <br />
        <small style={{ color: 'gray' }}>{item.breadcrumb}</small>
      </div>
    );
  };

  const handleSearchButtonClick = () => {
    // Perform search action here with searchValue
    console.log('Searching for:', searchValue);
  };

  return (
    <div style={{ width: 600 }}>
      <div className="search-1 d-flex">
        <i className='bx bx-search-alt'></i>
        <div style={{ flex: 1 }}>
          {/* <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={{ width: '100%' }}
            inputProps={{
              onChange: (e:any) => setSearchValue(e.target.value),
              value: searchValue
            }}
          /> */}
        </div>
        {/* <button onClick={handleSearchButtonClick}>Search</button> */}
      </div>
    </div>
  );
};

export default Search;
