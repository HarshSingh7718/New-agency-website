import {defineDocuments, defineLocations} from "sanity/presentation";

const homeLocation = {title: "Home page", href: "/"};
const aboutLocation = {title: "About page", href: "/about"};
const contactLocation = {title: "Contact page", href: "/contact"};

export const resolve = {
  mainDocuments: defineDocuments([
    {route: "/", type: "homePage"},
    {route: "/about", type: "aboutPage"},
    {route: "/contact", type: "contactPage"},
  ]),
  locations: {
    siteSettings: defineLocations({select: {title: "brandName"}, resolve: () => ({locations: [homeLocation, aboutLocation, contactLocation]})}),
    homePage: defineLocations({select: {title: "seo.title"}, resolve: () => ({locations: [homeLocation]})}),
    aboutPage: defineLocations({select: {title: "seo.title"}, resolve: () => ({locations: [aboutLocation]})}),
    contactPage: defineLocations({select: {title: "seo.title"}, resolve: () => ({locations: [contactLocation]})}),
    project: defineLocations({select: {title: "title"}, resolve: () => ({locations: [homeLocation]})}),
    service: defineLocations({select: {title: "title"}, resolve: () => ({locations: [homeLocation]})}),
    technology: defineLocations({select: {title: "name"}, resolve: () => ({locations: [homeLocation]})}),
    testimonial: defineLocations({select: {title: "name"}, resolve: () => ({locations: [homeLocation]})}),
    faq: defineLocations({select: {title: "question"}, resolve: () => ({locations: [homeLocation]})}),
    teamMember: defineLocations({select: {title: "name"}, resolve: () => ({locations: [aboutLocation]})}),
  },
};
