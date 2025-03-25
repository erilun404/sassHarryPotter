"use client";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu">
      <button className="menu__toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`menu__items ${isOpen ? "menu__items--open" : ""}`}>
        <Link
          className="menu__item menu__item--home"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          className="menu__item menu__item--students"
          href="/students"
          onClick={() => setIsOpen(false)}
        >
          Students
        </Link>
        <Link
          className="menu__item menu__item--gryffindor"
          href="/houses/gryffindor"
          onClick={() => setIsOpen(false)}
        >
          Gryffindor
        </Link>
        <Link
          className="menu__item menu__item--slytherin"
          href="/houses/slytherin"
          onClick={() => setIsOpen(false)}
        >
          Slytherin
        </Link>
        <Link
          className="menu__item menu__item--hufflepuff"
          href="/houses/hufflepuff"
          onClick={() => setIsOpen(false)}
        >
          Hufflepuff
        </Link>
        <Link
          className="menu__item menu__item--ravenclaw"
          href="/houses/ravenclaw"
          onClick={() => setIsOpen(false)}
        >
          Ravenclaw
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
