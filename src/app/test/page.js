"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    text: "Hvilket system benytter I primært til at varsle akutte hændelser i dag?",
    options: [
      { text: "Dedikeret talevarsling (lokalt forankret system)", points: 2 },
      { text: "Almindelige brandklokker suppleret med manuel rundering", points: 1 },
      { text: "Aula, SMS-kæder eller mobile apps", points: 0 },
      { text: "Vi har på nuværende tidspunkt ikke noget samlet system", points: 0 },
    ],
  },
  {
    id: 2,
    text: "Hvor hurtigt kan en kritisk besked (f.eks. lockdown) nå ud til alle på skolen?",
    options: [
      { text: "Øjeblikkeligt (under 5 sekunder) via ét tryk", points: 2 },
      { text: "Inden for få minutter, men kræver login via en computer/skærm", points: 1 },
      { text: "Det varierer – vi er afhængige af, om læreren aktivt kigger på sin telefon", points: 0 },
    ],
  },
  {
    id: 3,
    text: "Fungerer systemet offline ved strøm- og internetnedbrud?",
    options: [
      { text: "Ja, systemet kører uafhængigt af internet og har indbygget nød-drift", points: 2 },
      { text: "Delvist – det overlever strømsvigt, men er afhængigt af WiFi eller mobilmaster", points: 1 },
      { text: "Nej, vi mister evnen til at varsle, hvis internettet eller strømmen forsvinder", points: 0 },
    ],
  },
  {
    id: 4,
    text: "Kan systemet utvetydigt skelne mellem \"Evakuering\" og \"Lockdown\"?",
    options: [
      { text: "Ja, vi har specifikke og klare talebeskeder for begge, vidt forskellige scenarier", points: 2 },
      { text: "Vi bruger samme klokke/tone, men personalet har en procedure for at kende forskel", points: 1 },
      { text: "Nej, brandklokken betyder altid \"forlad bygningen\", hvilket er livsfarligt ved PLOV", points: 0 },
    ],
  },
  {
    id: 5,
    text: "Er der sikker dækning i støjende rum (kantine, hal) samt udendørs?",
    options: [
      { text: "Ja, vi har kraftige udendørs-horn og visuelle LED-blitzlys i larmende rum", points: 2 },
      { text: "Vi har højttalere, men de kan være svære at høre over larm fra mange elever", points: 1 },
      { text: "Nej, det er meget svært at nå elever i skolegården eller idrætshallen hurtigt", points: 0 },
    ],
  },
  {
    id: 6,
    text: "Hvor let er det at aktivere alarmen, hvis en medarbejder spotter en trussel?",
    options: [
      { text: "Der er strategisk placerede paniktryk, der øjeblikkeligt starter en forudindspillet lockdown", points: 2 },
      { text: "En leder skal låse sig ind på et kontor og aktivere varslingen via en central computer", points: 1 },
      { text: "Der er ingen klar, fysisk mekanisme – personalet skal ringe sammen først", points: 0 },
    ],
  }
];

export default function TestPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setAnswers(new Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setFinished(false);
    setLeadCaptured(false);
  };

  const handleAnswer = (points) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const renderResult = () => {
    const score = answers.reduce((sum, val) => sum + (val || 0), 0);
    let resultType = "";
    let title = "";
    let desc = "";

    if (score <= 4) {
      resultType = "red";
      title = "Kritisk Sårbarhed";
      desc = "Jeres nuværende beredskab har kritiske sårbarheder. Testen indikerer en farlig afhængighed af Aula, mobiler eller traditionelle brandklokker. Ved en PLOV-hændelse (Pågående Livstruende Vold) kan manglende offline-drift eller forsinket kommunikation skabe fatal panik, og en brandklokke risikerer at evakuere eleverne direkte ud mod truslen. Der bør udvises rettidig omhu ved at kigge på en dedikeret, offline varslingsløsning snarest muligt.";
    } else if (score <= 9) {
      resultType = "yellow";
      title = "Delvist Dækket";
      desc = "Jeres skole har tænkt over beredskabet, men har flere \"blinde vinkler\". Selvom I har procedurer på plads, er udstyret sandsynligvis for langsomt, mangler visuel varsling i larmende områder, eller er sårbart over for internetnedbrud. For at leve op til myndighedernes fulde anbefalinger om tryghed og lockdown, bør I supplere med et sikret talevarslingsanlæg.";
    } else {
      resultType = "green";
      title = "Optimalt Sikret";
      desc = "Flot resultat. Jeres skole udviser høj grad af rettidig omhu. I har et lokalt forankret, dedikeret system, der sikrer øjeblikkelig og utvetydig kommunikation (inkl. sondring mellem evakuering og lockdown) – præcis som myndighederne anbefaler. Sørg for at teste systemet jævnligt.";
    }

    const colorMap = {
      red: "var(--red-500)",
      yellow: "#eab308", // Tailwind yellow-500
      green: "var(--green-500)",
    };

    return (
      <div className="glass-card reveal-on-scroll" style={{ animationDelay: "0s", padding: "4rem 2rem", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: colorMap[resultType] }}>{title}</h2>
        <div style={{ fontSize: "4rem", fontWeight: "800", marginBottom: "2rem", color: colorMap[resultType] }}>
          {score} <span style={{ fontSize: "1.5rem", color: "var(--text-secondary)", fontWeight: "500" }}>/ 12 point</span>
        </div>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "3rem", textAlign: "left" }}>
          {desc}
        </p>
        
        <div style={{ padding: "2rem", backgroundColor: "rgba(34, 197, 94, 0.1)", borderRadius: "16px", border: "1px solid var(--green-500)", color: "var(--green-500)", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem", fontWeight: "600" }}>Tak for din information!</h3>
          <p style={{ lineHeight: "1.6" }}>
            Vi har modtaget dine oplysninger og vil snarest kontakte dig på det oplyste nummer for en gratis og uforpligtende beredskabsgennemgang af jeres specifikke situation. Ønsker du i mellemtiden at se, hvilket udstyr jeres bygning kræver? <Link href="/byg" style={{textDecoration: "underline", fontWeight: "600"}}>Prøv Byg System Beregneren her.</Link>
          </p>
        </div>
      </div>
    );
  };

  const renderLeadForm = () => (
    <div className="glass-card reveal-on-scroll" style={{ animationDelay: "0s", padding: "4rem 2rem", textAlign: "center", maxWidth: "600px", margin: "2rem auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Få dit resultat</h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: "1.6" }}>
        Din beredskabsscore er klar! For at se din skoles resultat og få vores faglige anbefalinger, bedes du indtaste dit navn og telefonnummer.
      </p>
      
      <form onSubmit={(e) => { e.preventDefault(); setLeadCaptured(true); }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textAlign: "left" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.95rem", marginBottom: "0.5rem", color: "var(--text-secondary)", fontWeight: "600" }}>Dit Navn</label>
          <input required type="text" placeholder="F.eks. Jens Jensen" style={{ width: "100%", padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--surface-border)", background: "rgba(255,255,255,0.03)", color: "var(--text-primary)", fontSize: "1.1rem" }} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.95rem", marginBottom: "0.5rem", color: "var(--text-secondary)", fontWeight: "600" }}>Telefonnummer</label>
          <input required type="tel" placeholder="Indtast dit telefonnummer" style={{ width: "100%", padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--surface-border)", background: "rgba(255,255,255,0.03)", color: "var(--text-primary)", fontSize: "1.1rem" }} />
        </div>
        <button type="submit" className="btn" style={{ padding: "1.2rem", backgroundColor: "var(--blue-500)", color: "white", fontSize: "1.1rem", border: "none", borderRadius: "30px", fontWeight: "600", boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)", cursor: "pointer", transition: "transform 0.2s", marginTop: "1rem" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
          Se mit resultat nu
        </button>
      </form>
      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "1.5rem" }}>
        Vi kontakter dig muligvis for at tilbyde en uforpligtende uddybning af dit resultat.
      </p>
    </div>
  );

  return (
    <div className="page-container" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {!started && !finished && (
        <div className="text-center reveal-on-scroll" style={{ maxWidth: "800px", margin: "4rem auto" }}>
          <h1 className="page-title" style={{ fontSize: "3.5rem" }}>
            Beredskabstjek: <span className="text-gradient">Er jeres skole klar, når sekunder tæller?</span>
          </h1>
          <p className="page-desc" style={{ animationDelay: "0.1s", fontSize: "1.2rem", margin: "2rem auto" }}>
            Når en kritisk hændelse opstår, er der ikke tid til forvirring. Tag dette gratis beredskabstjek og få en professionel, faglig vurdering af skolens nuværende evne til at håndtere akut alarmering – med særligt fokus på lockdown (PLOV) og offline-drift i henhold til KL's anbefalinger. Testen tager under 2 minutter.
          </p>
          <button className="btn btn-primary btn-glow" style={{ fontSize: "1.2rem", padding: "1.2rem 3rem", marginTop: "2rem" }} onClick={handleStart}>
            Start Beredskabstjek
          </button>
        </div>
      )}

      {started && !finished && (
        <div className="glass-card reveal-on-scroll" style={{ width: "100%", maxWidth: "800px", margin: "2rem auto", padding: "3rem", position: "relative" }}>
          
          {currentQuestion > 0 && (
            <button 
              onClick={handleBack} 
              className="hover-underline"
              style={{ position: "absolute", top: "1.5rem", left: "1.5rem", background: "none", border: "none", color: "var(--text-secondary)", fontSize: "0.95rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              ← Tilbage
            </button>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem", color: "var(--text-secondary)", fontWeight: "600", marginTop: "1rem" }}>
            <span>Spørgsmål {currentQuestion + 1} af {questions.length}</span>
            <span>Udviklet af beredskabsspecialister</span>
          </div>
          
          <div style={{ width: "100%", height: "6px", background: "var(--surface-border)", borderRadius: "3px", marginBottom: "3rem" }}>
            <div style={{ width: `${((currentQuestion) / questions.length) * 100}%`, height: "100%", background: "var(--blue-500)", borderRadius: "3px", transition: "width 0.3s ease" }}></div>
          </div>

          <h2 style={{ fontSize: "2rem", marginBottom: "3rem", lineHeight: "1.4" }}>
            {questions[currentQuestion].text}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {questions[currentQuestion].options.map((opt, idx) => (
              <button
                key={idx}
                className="filter-btn"
                style={{ textAlign: "left", padding: "1.5rem", fontSize: "1.1rem", borderRadius: "12px", border: "1px solid var(--surface-border)", transition: "all 0.2s ease" }}
                onClick={() => handleAnswer(opt.points)}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--blue-500)"; e.currentTarget.style.transform = "translateX(5px)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--surface-border)"; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {finished && !leadCaptured && renderLeadForm()}
      {finished && leadCaptured && renderResult()}
    </div>
  );
}
