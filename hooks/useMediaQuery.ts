"use client";

import { useState, useEffect } from "react";

/**
 * Custom React hook to check dynamic screen viewport matches.
 * Safe for Next.js Server Side Rendering (SSR).
 *
 * @param query media query string (e.g. "(max-width: 768px)")
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers support addEventListener
    if (media.addEventListener) {
      media.addEventListener("change", listener);
    } else {
      // Fallback for older browser engines
      media.addListener(listener);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", listener);
      } else {
        // Fallback for older browser engines
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
}
