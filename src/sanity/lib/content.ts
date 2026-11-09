import {cache} from "react";
import {isSanityConfigured} from "../env";
import {sanityFetch} from "./live";
import {ABOUT_PAGE_QUERY, CONTACT_PAGE_QUERY, HOME_PAGE_QUERY, SITE_SETTINGS_QUERY} from "./queries";
import type {AboutPageData, ContactPageData, HomeQueryResult, NavigationGroup, SiteSettings, TeamMember} from "./types";

export const industryNavGroups: NavigationGroup[] = [
  {
    _key: "ecommerce",
    title: "E-COMMERCE",
    items: [
      { _key: "accounting-sw-dev", label: "Accounting Software Development", href: "/contact", icon: "calculator" },
      { _key: "amazon-clone-app", label: "Amazon Clone App Development Company", href: "/contact", icon: "package" },
      { _key: "custom-ecommerce-app", label: "Custom E-commerce App Development Company", href: "/contact", icon: "smartphone" },
      { _key: "custom-ecommerce-sw", label: "Custom E-commerce Software Development Company", href: "/contact", icon: "monitor" },
      { _key: "custom-marketplace-app", label: "Custom Marketplace App Development Company", href: "/contact", icon: "store" },
      { _key: "ecommerce-app-website", label: "E-commerce App & Website Development Company", href: "/contact", icon: "globe" },
      { _key: "testing", label: "Testing", href: "/contact", icon: "flask" },
    ],
  },
  {
    _key: "education",
    title: "EDUCATION",
    items: [
      { _key: "lms-dev", label: "Learning Management System (LMS) Development", href: "/contact", icon: "graduation-cap" },
      { _key: "school-mgmt-sw", label: "School Management Software Development", href: "/contact", icon: "school" },
      { _key: "sis-dev", label: "Student Information System (SIS) Development", href: "/contact", icon: "book-check" },
    ],
  },
  {
    _key: "enterprise",
    title: "ENTERPRISE",
    items: [
      { _key: "crm-sw-dev", label: "CRM Software Development", href: "/contact", icon: "handshake" },
      { _key: "erp-sw-dev", label: "ERP Software Development", href: "/contact", icon: "network" },
      { _key: "hrm-sw-dev", label: "HRM Software Development", href: "/contact", icon: "user-plus" },
      { _key: "hrms-sw-dev", label: "HRMS Software Development", href: "/contact", icon: "user-cog" },
      { _key: "inventory-mgmt-dev", label: "Inventory Management Software Development", href: "/contact", icon: "boxes" },
    ],
  },
  {
    _key: "food-beverage",
    title: "FOOD & BEVERAGE",
    items: [
      { _key: "custom-grocery-dev", label: "Custom Grocery Delivery App Development Company", href: "/contact", icon: "shopping-basket" },
      { _key: "custom-restaurant-mgmt", label: "Custom Restaurant Management Software Development Company", href: "/contact", icon: "utensils" },
      { _key: "food-delivery-app", label: "Food Delivery App Development Company", href: "/contact", icon: "bike" },
    ],
  },
  {
    _key: "real-estate",
    title: "REAL ESTATE",
    items: [
      { _key: "custom-real-estate-platform", label: "Custom Real Estate Platform Solutions", href: "/contact", icon: "home" },
    ],
  },
  {
    _key: "social-media",
    title: "SOCIAL MEDIA",
    items: [
      { _key: "custom-chat-app", label: "Custom Chat App Development Company", href: "/contact", icon: "message-square" },
      { _key: "custom-dating-app", label: "Custom Dating App Development Company", href: "/contact", icon: "heart" },
      { _key: "custom-influencer-app", label: "Custom Influencer App Development Company", href: "/contact", icon: "sparkles" },
      { _key: "social-media-app-dev", label: "Social Media App Development Company", href: "/contact", icon: "share" },
    ],
  },
];

export const getSiteSettings = cache(async (): Promise<SiteSettings | null> => {
  if (!isSanityConfigured) return null;
  const {data} = await sanityFetch({query: SITE_SETTINGS_QUERY});
  const settings = data as SiteSettings | null;
  if (settings?.navigation) {
    let matched = false;
    settings.navigation = settings.navigation.map((item) => {
      const isIndustries = item.label?.toLowerCase() === "industries" || item._key === "nav-industries";
      if (!isIndustries) return item;
      matched = true;
      return {
        ...item,
        label: item.label || "Industries",
        href: item.href || "/#industries",
        groups: industryNavGroups,
      };
    });
    if (!matched) {
      settings.navigation.push({
        _key: "nav-industries",
        label: "Industries",
        href: "/#industries",
        groups: industryNavGroups,
      });
    }
  }
  return settings;
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
