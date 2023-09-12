import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
   <span> 🔥 </span> The one and only Meme Generator. Use it with caution it can be addictive <span> 🔥 </span><hr/>
  </div>
);

export default Header;
