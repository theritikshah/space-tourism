"use client";

import React, { useEffect, useRef, useState } from "react";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (index: number, value: any) => {
    console.log(value);
    setActiveIndex(index);
  };

  const navItems = [
    { label: "HOME", value: "home" },
    { label: "DESTINATION", value: "destination" },
    { label: "CREW", value: "crew" },
    { label: "TECHNOLOGY", value: "technology" },
  ];

  const navItemsBtn = navItems.map(
    ({ label, value }: { label: string; value: any }, index: number) => {
      return (
        <NavItem
          key={label}
          count={index}
          activeIndex={activeIndex}
          onClick={() => handleItemClick(index, value)}
          label={label}
          value={value}
        />
      );
    }
  );

  const menuBtnRef = useRef<HTMLImageElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        ref={menuBtnRef}
        src={
          isMenuOpen
            ? "/assets/shared/icon-close.svg"
            : "/assets/shared/icon-hamburger.svg"
        }
        alt="menu-button"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          console.log("click");
        }}
      />
      <nav className={styles.menu}>
        <ul>{navItemsBtn}</ul>
      </nav>
      {isMenuOpen && (
        <nav className={styles.mobile_menu} ref={menuRef}>
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
