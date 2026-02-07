import { URLS } from "../../src/config/navigation";

export type NavLink = {
    label: string;
    href: string;
};

export const leftLinks: NavLink[] = [
    { label: "About Me", href: URLS.aboutMe },
    { label: "Education", href: URLS.education },
    { label: "Experience", href: URLS.experience },
];

export const rightLinks: NavLink[] = [
    { label: "Projects", href: URLS.projects },
    { label: "Contact", href: URLS.contact },
    { label: "Resume", href: URLS.resume },
];

export const mobileLinks = [...leftLinks, ...rightLinks];
