import React, { useState } from "react";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const navItems = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>
      <div className={styles.divider}>
        <hr />
      </div>
      <nav className={styles.menu}>
        <ul>
          {navItems.map((label: string, index: number) => {
            return (
              <NavItem
                count={index}
                activeIndex={activeIndex}
                onClick={() => handleItemClick(index)}
                label={label}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

function NavItem({
  onClick,
  label,
  value,
  count,
  activeIndex,
}: {
  onClick: Function | (() => {});
  label: string;
  count: number;
  value?: string | number;
  activeIndex: number;
}) {
  return (
    <li
      className={activeIndex === count ? styles.active : ""}
      onClick={() => onClick()}
    >
      <b>{`0${count}`}</b>
      {label}
    </li>
  );
}
