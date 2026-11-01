"use client";

import { use } from "react";
import Link from "next/link";
import { getProductById } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { notFound } from "next/navigation";

export default function ProductDetail({ params }) {
  const unwrappedParams = use(params);
  const product = getProductById(unwrappedParams.id);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="page-container">
      <Link href="/shop" className="back-link">
        ← Tilbage til oversigten
      </Link>

      <div className="product-detail-layout">
        <div className="product-detail-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>
        <div className="product-detail-info">
          <div
            className="badge"
            style={{
              display: "inline-block",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "var(--blue-500)",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            {product.type}
          </div>
          <h1>{product.name}</h1>
          <p className="page-desc" style={{ marginBottom: "1rem" }}>
            {product.description}
          </p>

          <ul className="product-features">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <div className="product-detail-price">
            {product.price.toLocaleString("da-DK")} kr.{" "}
            <span
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
              }}
            >
              ekskl. moms
            </span>
          </div>

          <button
            className="btn btn-primary btn-glow"
            style={{ padding: "1rem 3rem", fontSize: "1.1rem" }}
            onClick={() => addToCart(product)}
          >
            Læg i kurv
          </button>
        </div>
      </div>
    </div>
  );
}
