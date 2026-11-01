"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { useEffect, useState } from "react";

export default function Header() {
  const { cartCount } = useCart();
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (cartCount === 0) return;
    setPulse(true);
    const timeout = setTimeout(() => setPulse(false), 400); // varer 0.4s (samme som CSS)
    return () => clearTimeout(timeout);
  }, [cartCount]);

  return (
    <header className="glass-header">
      <div className="nav-container">
        <Link href="/" className="logo">
          Talevarsel<span className="text-gradient">.dk</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/test" className="hover-underline" style={{ color: "var(--red-500)", fontWeight: "600" }}>
              Beredskabstjek
            </Link>
          </li>
          <li>
            <Link href="/byg" className="hover-underline" style={{ color: "var(--blue-500)", fontWeight: "600" }}>
              Byg System
            </Link>
          </li>
          <li>
            <Link href="/viden" className="hover-underline">
              Viden (PLOV)
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover-underline">
              Webshop
            </Link>
          </li>
          <li>
            <Link href="/kurv" className="btn btn-outline cart-btn">
              🛒 Kurv <span className={`cart-badge ${pulse ? 'pulse-anim' : ''}`}>{cartCount}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
