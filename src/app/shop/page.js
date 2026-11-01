"use client";

import { useState } from "react";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/data";
import { useCart } from "@/components/CartProvider";

export default function Shop() {
  const [filter, setFilter] = useState("all");
  const { addToCart } = useCart();

  const displayedProducts = getProductsByCategory(filter);

  return (
    <div className="page-container">
      <h1 className="page-title">
        Produkter & <span className="text-gradient">Webshop</span>
      </h1>
      <p className="page-desc">
        Vælg den rette teknologi til din bygning. Harmonys til IP/Netværk,
        Melodys til trådløs opsætning uden kabler.
      </p>

      <div className="filter-bar">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Alle Systemer
        </button>
        <button
          className={`filter-btn ${filter === "harmonys" ? "active" : ""}`}
          onClick={() => setFilter("harmonys")}
        >
          Harmonys (IP/PoE)
        </button>
        <button
          className={`filter-btn ${filter === "melodys" ? "active" : ""}`}
          onClick={() => setFilter("melodys")}
        >
          Melodys (Trådløs)
        </button>
      </div>

      <div className="product-grid">
        {displayedProducts.map((p, index) => (
          <Link href={`/produkt/${p.id}`} key={p.id} className="product-card reveal-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={p.image} alt={p.name} className="product-image" />
            <div className="product-category">{p.type}</div>
            <h3 className="product-name">{p.name}</h3>
            <div className="product-footer">
              <span className="product-price">
                {p.price.toLocaleString("da-DK")} kr.
              </span>
              <button
                className="btn btn-primary"
                style={{ padding: "0.5rem 1rem" }}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(p);
                }}
              >
                Læg i kurv
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
