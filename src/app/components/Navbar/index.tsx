"use client";

import React, { useState } from "react";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const navItems = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  const navItemsBtn = navItems.map((label: string, index: number) => {
    return (
      <NavItem
        key={label}
        count={index}
        activeIndex={activeIndex}
        onClick={() => handleItemClick(index)}
        label={label}
      />
    );
  });

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>
      <div className={styles.divider}>
        <hr />
      </div>
      <img
        className={styles.menu_btn}
        src={
          isMenuOpen
            ? "/assets/shared/icon-close.svg"
            : "/assets/shared/icon-hamburger.svg"
        }
        alt="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <nav className={styles.menu}>
        <ul>{navItemsBtn}</ul>
      </nav>
      {isMenuOpen && (
        <nav className={styles.mobile_menu}>
          <ul>{navItemsBtn}</ul>
        </nav>
      )}
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

{
  /* <nav className={styles.mobile_menu}>
<ul>{navItemsBtn}</ul>
</nav> */
}
