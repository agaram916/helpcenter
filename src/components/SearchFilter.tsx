// components/SearchFilter.tsx
"use client";
import { useState, ChangeEvent, FocusEvent } from 'react';
// import { FaSearch } from 'react-icons/fa'; // Assuming you're using Font Awesome for icons

interface Item {
  name: string;
  path: string;
  breadcrumb?: string;
}
const items: Item[] = [
  // { name: 'Products', path: './product-document', breadcrumb: "Home > Article > Products" },
  { name: 'Qualis LIMS data management system', path: './limslayout'},
  { name: 'Article Products', path: './product-document'},
  { name: 'Videos', path: './productvideo'},
];

const SearchFilter = () => {
  const [query, setQuery] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowDropdown(e.target.value.length > 0);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    // Delay to allow click on dropdown item
    setTimeout(() => setShowDropdown(false), 100);
  };
  const handleFocus = () => {
    setShowDropdown(query.length > 0);
  };

  return (
    <div className='search-fliter'>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={{ paddingLeft: '30px' }} // Adjust padding for icon
          />
          {/* <FaSearch style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#666' }} /> */}
        </div>
        {showDropdown && (
          <ul style={{
            position: 'absolute',
            top: '100%',
            left: '10px',
            right: '10px',
            maxWidth: '600px',
            maxHeight: '150px',
            overflowY: 'hidden',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            zIndex: 1000,
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left'
          }}>
            {filteredItems.map((item, index) => (
              <li key={index} style={{ padding: '8px', cursor: 'pointer' }}>
                <a href={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                  {item.name}
                </a>
                {item.breadcrumb && <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{item.breadcrumb}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

  );
};
export default SearchFilter;
