import Link from "next/link";

export default function Home() {
  return (
    <section className="hero reveal-on-scroll">
      <div className="hero-glow"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div
            className="badge"
            style={{
              display: "inline-block",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "var(--blue-500)",
              marginBottom: "1.5rem",
              fontWeight: 600,
            }}
          >
            Nyt beredskab i 2026
          </div>
          <h1 className="hero-title">
            Kritisk Varsling <br />
            <span className="text-gradient">Når Det Gælder</span>
          </h1>
          <p className="hero-subtitle">
            Uafhængigt af Aula og Mobilnetværk. Sikr skoler og offentlige
            institutioner med dedikeret talevarsling (PLOV). Gå på opdagelse i
            vores webshop for det rette udstyr.
          </p>
          <div className="hero-actions">
            <Link href="/shop" className="btn btn-primary btn-glow">
              Gå til Webshop <span>→</span>
            </Link>
            <Link href="/viden" className="btn btn-secondary">
              Læs om PLOV
            </Link>
          </div>
        </div>
        <div className="hero-visual reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
          <div className="glass-card">
            <img
              src="https://static-prod.bodet-time.com/assets/images/choisir-systeme-audio.jpg"
              alt="Valg af system"
              className="floating-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
