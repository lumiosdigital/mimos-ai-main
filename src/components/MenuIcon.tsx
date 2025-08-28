"use client";

import { motion } from "framer-motion";

export function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-6 cursor-pointer">
      <motion.span
        animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
        className="absolute left-0 top-1 block h-0.5 w-full bg-black"
      />
      <motion.span
        animate={{ opacity: open ? 0 : 1 }}
        className="absolute left-0 top-2.5 block h-0.5 w-full bg-black"
      />
      <motion.span
        animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
        className="absolute left-0 top-4 block h-0.5 w-full bg-black"
      />
    </div>
  );
}
