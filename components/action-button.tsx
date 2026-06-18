"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { IconName } from "@/components/ui-icon";
import { UiIcon } from "@/components/ui-icon";

type ActionButtonProps = {
  href: string;
  children: ReactNode;
  icon?: IconName;
  variant?: "primary" | "secondary" | "whatsapp";
};

export function ActionButton({
  href,
  children,
  icon,
  variant = "primary",
}: ActionButtonProps) {
  const styles = {
    primary:
      "border border-white/55 bg-ink/90 text-white shadow-[0_10px_28px_rgb(var(--color-ink)_/_0.16)]",
    secondary: "border border-white/55 bg-white/35 text-ink shadow-[inset_0_1px_0_rgb(255_255_255_/_0.68)]",
    whatsapp:
      "border border-whatsapp/30 bg-white/38 text-whatsapp shadow-[inset_0_1px_0_rgb(255_255_255_/_0.68)]",
  }[variant];

  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.975 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-[18px] px-4 text-sm font-bold transition backdrop-blur-xl ${styles}`}
    >
      {icon ? <UiIcon name={icon} className="h-4 w-4" /> : null}
      {children}
    </motion.a>
  );
}
