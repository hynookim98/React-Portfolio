import React, { useEffect } from 'react';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = currentPage.name.charAt(0).toUpperCase() + currentPage.name.slice(1);
  }, [currentPage]);

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name ? 'navActive' : ''
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {currentPage.name.charAt(0).toUpperCase() + currentPage.name.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
