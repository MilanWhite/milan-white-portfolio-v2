import NavLinkList from "./NavLinkList";
import { type NavLink } from "./navLinks";

type MobileMenuProps = {
    isOpen: boolean;
    links: NavLink[];
    onClose: () => void;
};

export default function MobileMenu({
    isOpen,
    links,
    onClose,
}: MobileMenuProps) {
    return (
        <>
            <div
                className={`fixed inset-0 z-[20] hidden bg-[rgba(8,12,18,0.5)] backdrop-blur-[2px] transition-opacity duration-300 max-[720px]:block ${
                    isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
                onClick={onClose}
                aria-hidden={!isOpen}
            />
            <div
                id="navbar-mobile-menu"
                className={`fixed right-0 top-0 z-[30] hidden h-screen w-[78vw] max-w-[320px] overflow-y-auto rounded-l-[20px] border border-white/[0.14] bg-[linear-gradient(160deg,rgba(18,24,34,0.92),rgba(10,12,18,0.85))] px-5 pb-6 pt-20 shadow-[-20px_0_40px_rgba(0,0,0,0.45)] backdrop-blur-[20px] backdrop-saturate-[140%] transition-all duration-400 ease-in-out max-[720px]:block motion-reduce:transition-none ${
                    isOpen
                        ? "pointer-events-auto translate-x-0 opacity-100"
                        : "pointer-events-none translate-x-[110%] opacity-0"
                }`}
            >
                <NavLinkList
                    as="div"
                    links={links}
                    wrapperClassName="flex flex-col gap-2"
                    linkClassName="w-full px-3 py-2 text-left text-sm font-medium text-[#e8eef6] transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:text-white motion-reduce:transition-none"
                    onLinkClick={onClose}
                />
            </div>
        </>
    );
}
