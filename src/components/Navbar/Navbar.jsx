import { Nav, NavItem } from './styles';
import { useState, useEffect } from 'react';
import Search from '../Search/Search';
import ThemePicker from '../ThemePicker/ThemePicker';
import { useSearchRef } from '../../context/SearchContext';

const Navbar = ({ isOpen, toClose }) => {
  const { setSearch } = useSearchRef();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 160;
      newShowFixed !== showFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
  }, [showFixed]);

  const handleClick = () => {
    setSearch('');
    toClose(false);
  };

  return (
    <Nav toggled={isOpen}>
      <ThemePicker />
      <Search placeHolder='Search in this page by name' />
      {/* el search hace a dos referencias  */}
      <NavItem onClick={handleClick} to='/'>
        Characters
      </NavItem>
      <NavItem onClick={handleClick} to='/locations'>
        Locations
      </NavItem>
      <NavItem onClick={handleClick} to='/episodes'>
        Episodes
      </NavItem>
    </Nav>
  );
};

export default Navbar;
