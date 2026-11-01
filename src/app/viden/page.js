export default function Viden() {
  return (
    <div className="page-container">
      <h1 className="page-title">
        Viden & <span className="text-gradient-red">Beredskab</span>
      </h1>
      <p className="page-desc">
        Forstå retningslinjerne omkring PLOV (Pågående Livstruende Vold) og
        og offline-drift for danske institutioner.
      </p>

      <div className="viden-grid">
        <div className="viden-card reveal-on-scroll" style={{ animationDelay: "0s" }}>
          <h3>Hvad er PLOV?</h3>
          <p style={{ color: "var(--text-secondary)" }}>
            PLOV står for Pågående Livstruende Vold. I tilfælde af et angreb eller
            skoleskyderi anbefaler Rigspolitiet og KL, at skoler og
            institutioner kan iværksætte Lockdown øjeblikkeligt for at beskytte
            elever og personale.
          </p>
        </div>
        <div className="viden-card reveal-on-scroll" style={{ animationDelay: "0.1s" }}>
          <h3>Hvorfor offline?</h3>
          <p style={{ color: "var(--text-secondary)" }}>
            Almindelige systemer som Aula eller SMS kræver internet og
            mobilnetværk, som ofte overbelastes i paniksituationer. Et dedikeret
            lokalt talevarslingsanlæg sikrer, at varslingen går igennem uanset
            hvad.
          </p>
        </div>
        <div className="viden-card reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
          <h3>KL's Anbefalinger</h3>
          <p style={{ color: "var(--text-secondary)" }}>
            Kommunernes Landsforening anbefaler at institutioner overvejer
            offline-drift uafhængigt af internet.
          </p>
        </div>
        <div
          className="viden-card reveal-on-scroll"
          style={{
            animationDelay: "0.3s",
            borderColor: "rgba(239, 68, 68, 0.3)",
            background:
              "linear-gradient(180deg, rgba(239, 68, 68, 0.05) 0%, transparent 100%)",
          }}
        >
          <h3 style={{ color: "var(--red-500)" }}>Øjeblikkelig Aktivering</h3>
          <p style={{ color: "var(--text-secondary)" }}>
            Ved at have strategisk placerede paniktryk kan en lærer eller leder
            trykke én gang og øjeblikkeligt afspille den faste procedure, der
            låser døre (via adgangskontrol) og varsler over højttalerne.
          </p>
        </div>
      </div>
    </div>
  );
}
