import React from 'react';
import '../Styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculatorPage',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quotes',
      text: 'Quote',
    },
  ];
  return (
    <>
      <nav className="navigation">
        <h2>Math-Magician</h2>
        <ul className="navUL">
          {links.map((link) => (
            <li
              key={link.id}
              className="nav-item"
              aria-hidden="true"
            >
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
