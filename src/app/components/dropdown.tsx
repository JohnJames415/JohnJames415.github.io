'use client';

import React, { useState } from 'react';
import styles from './dropdown.module.css';
import SubMenu from './subdropdown';

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface CollapsibleMenuProps {
  title: string;
  items: MenuItem[];
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.menu}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles['menu-toggle']}
      >
        {isOpen ? `v ${title}` : `> ${title}`}
      </button>

      <ul className={`${styles['menu-items']} ${isOpen ? styles.open : ''}`}>
        {items.map((item, index) => (
          <li key={index}>
            {item.children ? (
              <SubMenu title={item.label} items={item.children} />
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CollapsibleMenu;
