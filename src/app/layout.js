import "./globals.css";
import { CartProvider } from "../components/CartProvider";
import Header from "../components/Header";
import ScrollAnimations from "../components/ScrollAnimations";

export const metadata = {
  title: "Talevarsel.dk | Kritisk Varsling",
  description: "Sikr jeres skoler med dedikeret talevarsling (PLOV) og offline-drift.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <ScrollAnimations />
          <div className="ambient-bg"></div>
          <Header />
          <main id="app-root">{children}</main>
          <footer>
            <div className="footer-content">
              <p>&copy; 2026 Talevarsel.dk – Fremtidssikret Kritisk Varsling</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
