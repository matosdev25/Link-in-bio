"use client";

import type { CSSProperties } from "react";
import {
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  Feather,
  Folder,
  Globe2,
  Github,
  Home,
  Instagram,
  Layers3,
  MapPin,
  MessageCircle,
  Music2,
  Send,
  Sparkles,
  Video,
} from "lucide-react";

export type IconName =
  | "badge"
  | "briefcase"
  | "calendar"
  | "chart"
  | "chevron"
  | "external"
  | "branding"
  | "folder"
  | "github"
  | "globe"
  | "home"
  | "instagram"
  | "layers"
  | "map-pin"
  | "message"
  | "music"
  | "send"
  | "sparkles"
  | "x"
  | "youtube";

const icons = {
  badge: BadgeCheck,
  briefcase: BriefcaseBusiness,
  calendar: CalendarDays,
  chart: BarChart3,
  chevron: ChevronRight,
  external: ExternalLink,
  branding: Feather,
  folder: Folder,
  github: Github,
  globe: Globe2,
  home: Home,
  instagram: Instagram,
  layers: Layers3,
  "map-pin": MapPin,
  message: MessageCircle,
  music: Music2,
  send: Send,
  sparkles: Sparkles,
  x: XIcon,
  youtube: Video,
};

type UiIconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
};

export function UiIcon({ name, className, strokeWidth = 2, style }: UiIconProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} strokeWidth={strokeWidth} style={style} />;
}

function XIcon({ className, style }: { className?: string; strokeWidth?: number; style?: CSSProperties }) {
  return (
    <svg aria-hidden="true" className={className} style={style} viewBox="0 0 24 24" fill="none">
      <path
        d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}
