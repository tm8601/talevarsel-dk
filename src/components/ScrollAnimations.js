"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // Tjek om browseren understøtter native CSS scroll-driven animations
    if (
      typeof CSS !== "undefined" &&
      CSS.supports("(animation-timeline: view()) and (animation-range: entry)")
    ) {
      // Browser supports native CSS animations, we don't need the fallback
      return;
    }

    // Fallback for Safari og ældre browsere
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Stop med at observere elementet når det er animeret ind (optional)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% is visible
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return null; // This component just runs logic, it renders nothing
}
