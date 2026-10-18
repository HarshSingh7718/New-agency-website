"use client";

import {createContext, useContext, type ReactNode} from "react";
import type {SiteSettings} from "./lib/types";

const SiteSettingsContext = createContext<SiteSettings | null>(null);

export function SiteSettingsProvider({settings, children}: {settings: SiteSettings | null; children: ReactNode}) {
  return <SiteSettingsContext.Provider value={settings}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  const settings = useContext(SiteSettingsContext);
  if (!settings) throw new Error("Site settings are not available. Configure Sanity and publish the Site settings document.");
  return settings;
}
