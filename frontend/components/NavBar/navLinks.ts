import { URLS } from "../../src/config/navigation";

export type NavLink = {
    label: string;
    href: string;
};

export const leftLinks: NavLink[] = [
    { label: "Home", href: URLS.home },
    { label: "About Me", href: URLS.aboutMe },
    { label: "Education", href: URLS.education },
];

export const rightLinks: NavLink[] = [
    { label: "Experience", href: URLS.experience },
    { label: "Projects", href: URLS.projects },
    { label: "Contact", href: URLS.contact },
];

export const mobileLinks = [...leftLinks, ...rightLinks];
