"use client";

import { useState } from "react";
import { getProductById } from "@/lib/data";
import { useCart } from "@/components/CartProvider";

export default function BygSystem() {
  const { addToCart } = useCart();

  const [systemType, setSystemType] = useState(""); // "live" eller "recorded"
  const [classrooms, setClassrooms] = useState(0);
  const [secondaryRooms, setSecondaryRooms] = useState(0);
  const [outdoorZones, setOutdoorZones] = useState(0);

  // Generer anbefaling baseret på state
  let recommendation = [];
  let totalPrice = 0;

  if (systemType && (classrooms > 0 || secondaryRooms > 0)) {
    if (systemType === "live") {
      // Harmonys (IP)
      recommendation.push({ product: getProductById("sigma-ip"), qty: 1 });

      if (classrooms > 0) {
        recommendation.push({ product: getProductById("h-indoor"), qty: classrooms });
      }
      if (secondaryRooms > 0) {
        recommendation.push({ product: getProductById("h-combo-flash"), qty: secondaryRooms });
      }
      if (outdoorZones > 0) {
        recommendation.push({ product: getProductById("h-outdoor"), qty: outdoorZones });
        recommendation.push({ product: getProductById("h-flash"), qty: outdoorZones });
      }
    } else if (systemType === "recorded") {
      // Melodys (Trådløs)
      recommendation.push({ product: getProductById("sigma-dhf"), qty: 1 });

      if (classrooms > 0) {
        recommendation.push({ product: getProductById("m-indoor"), qty: classrooms });
      }
      if (secondaryRooms > 0) {
        recommendation.push({ product: getProductById("m-combo-flash"), qty: secondaryRooms });
      }
      if (outdoorZones > 0) {
        recommendation.push({ product: getProductById("m-outdoor"), qty: outdoorZones });
        recommendation.push({ product: getProductById("m-flash"), qty: outdoorZones });
      }
    }

    totalPrice = recommendation.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  }

  const handleAddAllToCart = () => {
    recommendation.forEach((item) => {
      for (let i = 0; i < item.qty; i++) {
        addToCart(item.product, true);
      }
    });
    alert("Den skræddersyede beredskabspakke er lagt i kurven!");
  };

  return (
    <div className="page-container">
      <h1 className="page-title reveal-on-scroll">
        Byg <span className="text-gradient">Beredskabssystem</span>
      </h1>
      <p className="page-desc reveal-on-scroll" style={{ animationDelay: "0.1s" }}>
        Konfigurer et komplet og fremtidssikret varslingssystem, der overholder Bodets officielle retningslinjer for akustisk og visuel alarmering.
      </p>

      <div className="product-detail-layout" style={{ gap: "4rem" }}>
        {/* Formular-del */}
        <div className="glass-card reveal-on-scroll" style={{ animationDelay: "0.2s", padding: "3rem" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Systemkonfiguration</h3>

          {/* 1. Systemvalg */}
          <div style={{ marginBottom: "3rem" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              1. Hvilken varslingsmetode ønsker I at benytte?
            </label>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1.2rem", lineHeight: "1.5" }}>
              Et kablet system (Harmonys) tillader jer at tale live via en mikrofon. Et trådløst system (Melodys) afspiller forudindspillede alarmer (eksempelvis en lockdown-sirene) men kan ikke sende live tale.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                className={`filter-btn ${systemType === "live" ? "active" : ""}`}
                style={{ flex: 1, padding: "1rem", borderRadius: "16px" }}
                onClick={() => setSystemType("live")}
              >
                Kablet system (IP) m. mulighed for live-tale
              </button>
              <button
                className={`filter-btn ${systemType === "recorded" ? "active" : ""}`}
                style={{ flex: 1, padding: "1rem", borderRadius: "16px" }}
                onClick={() => setSystemType("recorded")}
              >
                Trådløst system udelukkende med forudindspillede alarmer
              </button>
            </div>
          </div>

          {/* 2. Klasselokaler */}
          <div style={{ marginBottom: "3rem" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              2. Antal klasselokaler (Lukkede undervisningsrum)
            </label>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1.2rem", lineHeight: "1.5" }}>
              I klasselokaler er 100 % taleforståelighed altafgørende ved lockdown. Vi beregner én dedikeret indendørshøjttaler per normeret klasselokale.
            </p>
            <input
              type="number"
              min="0"
              value={classrooms === 0 ? "" : classrooms}
              onChange={(e) => setClassrooms(e.target.value === "" ? 0 : parseInt(e.target.value))}
              placeholder="0"
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid var(--surface-border)",
                fontSize: "1.1rem",
              }}
            />
          </div>

          {/* 3. Sekundære rum */}
          <div style={{ marginBottom: "3rem" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              3. Antal sekundære rum (Gange, kantine, idrætshal)
            </label>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1.2rem", lineHeight: "1.5" }}>
              I store eller larmende rum er lydvarsling sjældent nok. Systemet vil automatisk beregne special-højttalere med indbygget kraftigt LED-blitzlys for at garantere visuel varsling.
            </p>
            <input
              type="number"
              min="0"
              value={secondaryRooms === 0 ? "" : secondaryRooms}
              onChange={(e) => setSecondaryRooms(e.target.value === "" ? 0 : parseInt(e.target.value))}
              placeholder="0"
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid var(--surface-border)",
                fontSize: "1.1rem",
              }}
            />
          </div>

          {/* 4. Udendørs */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              4. Antal udendørszoner (Skolegård, parkeringsplads etc.)
            </label>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1.2rem", lineHeight: "1.5" }}>
              Udendørs arealer kræver vejrbeskyttede hornhøjttalere for rækkevidde samt kraftige, udendørs LED-blitzlys for at fange opmærksomheden visuelt på afstand.
            </p>
            <input
              type="number"
              min="0"
              value={outdoorZones === 0 ? "" : outdoorZones}
              onChange={(e) => setOutdoorZones(e.target.value === "" ? 0 : parseInt(e.target.value))}
              placeholder="0"
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid var(--surface-border)",
                fontSize: "1.1rem",
              }}
            />
          </div>
        </div>

        {/* Resultat-del */}
        <div className="reveal-on-scroll" style={{ animationDelay: "0.3s" }}>
          {recommendation.length > 0 ? (
            <div className="cart-summary" style={{ position: "relative", top: "0" }}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "var(--blue-500)" }}>
                Din skræddersyede beredskabspakke
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: "1.6" }}>
                Baseret på dine indtastninger har vi konfigureret et komplet og fremtidssikret varslingssystem. Vi har lagt vægt på at minimere jeres installationsomkostninger ved at vælge den rette infrastruktur, samtidig med at vi opfylder myndighedernes strenge krav til akustisk og visuel alarmering.
                <br /><br />
                Nedenfor ses de præcise tekniske enheder, der kræves for fuld dækning, inklusiv den obligatoriske styreenhed, der sikrer lokal offline-drift. Læg pakken i kurven for at få tilsendt et uforpligtende estimat.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {recommendation.map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--surface-border)", paddingBottom: "1rem" }}>
                    <div style={{ paddingRight: "1rem" }}>
                      <div style={{ fontWeight: "600" }}>{item.qty} x {item.product.name}</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.product.type}</div>
                    </div>
                    <div style={{ fontWeight: "700", whiteSpace: "nowrap" }}>
                      {(item.product.price * item.qty).toLocaleString("da-DK")} kr.
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-total" style={{ borderTop: "none" }}>
                <span>Samlet Udstyrspris</span>
                <span>{totalPrice.toLocaleString("da-DK")} kr.</span>
              </div>

              <button className="btn btn-primary btn-glow" style={{ width: "100%", marginTop: "2rem", padding: "1.2rem" }} onClick={handleAddAllToCart}>
                Læg Samlet Pakke I Kurv
              </button>
            </div>
          ) : (
            <div className="glass-card" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px", textAlign: "center", color: "var(--text-secondary)", padding: "2rem" }}>
              Udfyld formularen til venstre for at se den anbefalede tekniske pakke og det samlede udstyrsestimat.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
