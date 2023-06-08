import './style.css';
import React, {useState} from 'react';
import Menu from './menuApi';
import MenuCard from './MenuCard';



const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

  return (
    <>
    <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
