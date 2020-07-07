import React, { useContext } from 'react';

import './Footer.css';
import githubLogo from '../../resources/img/GitHub-Mark-Light-32px.png';
import linkedinLogo from '../../resources/img/LI-In-Bug-white-32.png';
import ItemContext from '../../context/item/itemContext';

const Footer = () => {
  const { items } = useContext(ItemContext);

  return (
    <div className='Footer'>
      <p>Items: {items.length}</p>
      <div className='logos'>
        <a href='https://www.linkedin.com/in/caiosantanaj/'>
          <img src={linkedinLogo} alt='linkedin logo' />
        </a>
        <a href='https://github.com/caiosantanaj'>
          <img src={githubLogo} alt='github logo' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
