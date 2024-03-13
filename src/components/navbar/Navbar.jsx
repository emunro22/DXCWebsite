"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Erskine Delivery Hub",
    url: "/erskinedeliveryhub",
  },
  {
    id: 4,
    title: "Project Zera",
    url: "/projectzera",
  },
  {
    id: 5,
    title: "Site Content",
    url: "/sitecontent",
  },
  {
    id: 6,
    title: "Updates",
    url: "/updates",
  },
  {
    id: 8,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [activeLinkId, setActiveLinkId] = React.useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLinkId(linkId);
  };

  const handleLinkMouseEnter = (event) => {
    event.target.classList.add(styles.hoveredLink);
  };

  const handleLinkMouseLeave = (event) => {
    // Only remove the 'hoveredLink' class if the link is not the active one
    const linkId = parseInt(event.target.dataset.linkId, 10);
    if (linkId !== activeLinkId) {
      event.target.classList.remove(styles.hoveredLink);
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        DXC : Erskine Hub
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`${styles.link} ${
              link.id === activeLinkId ? styles.hoveredLink : ""
            }`}
            data-link-id={link.id}
            onClick={() => handleLinkClick(link.id)}
            onMouseEnter={handleLinkMouseEnter}
            onMouseLeave={handleLinkMouseLeave}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
