import { type NavLink } from "./navLinks";

type NavLinkListProps = {
    links: NavLink[];
    wrapperClassName?: string;
    linkClassName?: string;
    onLinkClick?: () => void;
    as?: "nav" | "div";
};

export default function NavLinkList({
    links,
    wrapperClassName,
    linkClassName,
    onLinkClick,
    as = "nav",
}: NavLinkListProps) {
    const Wrapper = as;

    return (
        <Wrapper className={wrapperClassName}>
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className={linkClassName}
                    onClick={onLinkClick}
                >
                    {link.label}
                </a>
            ))}
        </Wrapper>
    );
}
