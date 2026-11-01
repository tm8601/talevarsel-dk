"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div
        className="page-container"
        style={{ textAlign: "center", paddingTop: "12rem" }}
      >
        <h1 className="page-title">Din kurv er tom</h1>
        <p className="page-desc" style={{ margin: "0 auto 2rem" }}>
          Der er ingen valgte varslingssystemer endnu.
        </p>
        <Link href="/shop" className="btn btn-primary">
          Gå til shoppen
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">
        Din <span className="text-gradient">Kurv</span>
      </h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Enhedspris: {item.price.toLocaleString("da-DK")} kr.
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                  <button 
                    style={{ background: "var(--surface-border)", border: "none", color: "var(--text-primary)", borderRadius: "4px", width: "28px", height: "28px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: "600", minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
                  <button 
                    style={{ background: "var(--surface-border)", border: "none", color: "var(--text-primary)", borderRadius: "4px", width: "28px", height: "28px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-price">
                  {(item.price * item.quantity).toLocaleString("da-DK")} kr.
                </div>
              </div>
              <button
                className="cart-item-remove"
                onClick={() => removeFromCart(item.id)}
              >
                Fjern
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3 style={{ marginBottom: "1.5rem" }}>Ordreoversigt</h3>
          <div className="summary-row">
            <span>Delsum</span>
            <span>{cartTotal.toLocaleString("da-DK")} kr.</span>
          </div>
          <div className="summary-row">
            <span>Fragt & Installation</span>
            <span>Beregnes senere</span>
          </div>
          <div className="summary-total">
            <span>Total (ekskl. moms)</span>
            <span>{cartTotal.toLocaleString("da-DK")} kr.</span>
          </div>

          <button
            className="btn btn-primary btn-glow"
            style={{ width: "100%", marginTop: "2rem" }}
            onClick={() =>
              alert(
                "Dette vil gå til checkout og indsamle kommuneoplysninger."
              )
            }
          >
            Gå til kassen
          </button>
        </div>
      </div>
    </div>
  );
}
