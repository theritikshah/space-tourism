"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

import styles from "./navbar.module.scss";

import NavItem from "./NavItem";
import useDocumentClick from "@/hooks/useDocumentClick";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const menuBtnRef = useRef<HTMLImageElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const navItems: { label: string; value: any }[] = [
    { label: "HOME", value: "" },
    { label: "DESTINATION", value: "destination" },
    { label: "CREW", value: "crew" },
    { label: "TECHNOLOGY", value: "technology" },
  ];

  const navItemsBtn = navItems.map(({ label, value }, index: number) => {
    const isActive =
      (!value && pathname === "/") || (value && pathname.includes(value));

    return (
      <NavItem
        key={value}
        count={index}
        isActive={isActive}
        onClick={() => router.push(value)}
        label={label}
        value={value}
      />
    );
  });

  useDocumentClick(() => setIsMenuOpen(false), [menuBtnRef, menuRef]);

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
        }}
      />
      <nav className={styles.menu}>
        <ul>{navItemsBtn}</ul>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            transition={{
              type: "just",
            }}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            className={styles.mobile_menu}
            ref={menuRef}
          >
            <ul>{navItemsBtn}</ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
