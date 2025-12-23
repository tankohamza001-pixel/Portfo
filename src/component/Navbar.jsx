"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-md shadow-sm py-1 bg-dark">
      <div className="container">
        <Link href="/" className="d-flex align-items-center navbar-brand fw-bolder text-uppercase text-light">
          <img
            src="/logo.jpg"
            className="rounded-2 me-2 logo-bounce"
            width={35}
            height={30}
            alt="logo"
          />
          MH COLLECTION
        </Link>

        <button
          className="navbar-toggler shadow-none"
          type="button"
          onClick={toggleNavbar}
          aria-controls="main-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/about" className="nav-link fw-bold text-light" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/skills" className="nav-link fw-bold text-light" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/product" className="nav-link fw-bold text-light" onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link fw-bold text-light" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
