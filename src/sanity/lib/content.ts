import {cache} from "react";
import {isSanityConfigured} from "../env";
import {sanityFetch} from "./live";
import {ABOUT_PAGE_QUERY, CONTACT_PAGE_QUERY, HOME_PAGE_QUERY, SITE_SETTINGS_QUERY} from "./queries";
import type {AboutPageData, ContactPageData, HomeQueryResult, SiteSettings, TeamMember} from "./types";

export const getSiteSettings = cache(async (): Promise<SiteSettings | null> => {
  if (!isSanityConfigured) return null;
  const {data} = await sanityFetch({query: SITE_SETTINGS_QUERY});
  return data as SiteSettings | null;
});

export const getHomeContent = cache(async (): Promise<HomeQueryResult | null> => {
  if (!isSanityConfigured) return null;
  const {data} = await sanityFetch({query: HOME_PAGE_QUERY});
  return data as HomeQueryResult;
});

export const getAboutContent = cache(async () => {
  if (!isSanityConfigured) return null;
  const {data} = await sanityFetch({query: ABOUT_PAGE_QUERY});
  return data as {page: AboutPageData | null; team: TeamMember[]};
});

export const getContactContent = cache(async () => {
  if (!isSanityConfigured) return null;
  const {data} = await sanityFetch({query: CONTACT_PAGE_QUERY});
  return data as ContactPageData | null;
});
