"use client";
import { useEffect, useState } from "react";

type MediaQueryProps = {
  width: string;
  children: React.ReactNode;
};

export function MediaQuery({ width, children }: MediaQueryProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const query = width;
    const mediaQuery = window.matchMedia(query);

    const handler = (event: MediaQueryListEvent) => {
      setShow(event.matches);
    };

    setShow(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [width]);

  if (!show) return null;

  return <>{children}</>;
}
