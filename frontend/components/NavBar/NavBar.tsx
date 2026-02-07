import { useState } from "react";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import LogoBadge from "../LogoBadge";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import NavLinkList from "./NavLinkList";
import { leftLinks, mobileLinks, rightLinks } from "./navLinks";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    useBodyScrollLock(isOpen);

    return (
        <div className="relative z-[20] flex justify-center px-8 py-[38px] max-[860px]:px-6 max-[860px]:py-8 max-[720px]:px-[18px] max-[720px]:py-7">
            <div className="relative w-full max-w-[960px]">
                <div className="relative z-[40] grid h-10 grid-cols-[1fr_96px_1fr] items-center rounded-[18px] border border-white/[0.16] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[0_8px_20px_rgba(0,0,0,0.25),_inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-[16px] backdrop-saturate-[140%] font-['Space_Grotesk','Segoe_UI',system-ui,sans-serif] tracking-[0.2px] text-[#e8eef6] max-[860px]:h-[42px]">
                    <div className="flex h-full items-center pl-4">
                        <NavLinkList
                            links={leftLinks}
                            wrapperClassName="flex h-full items-center justify-start gap-5 text-sm font-medium leading-none max-[860px]:gap-4 max-[860px]:text-[13px] max-[720px]:hidden"
                            linkClassName="cursor-pointer opacity-90 transition-colors transition-opacity transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-100 hover:text-white"
                        />
                    </div>
                    <div aria-hidden="true" />
                    <div className="flex h-full items-center justify-end gap-3 pr-4">
                        <NavLinkList
                            links={rightLinks}
                            wrapperClassName="flex h-full items-center justify-end gap-5 text-sm font-medium leading-none max-[860px]:gap-4 max-[860px]:text-[13px] max-[720px]:hidden"
                            linkClassName="cursor-pointer opacity-90 transition-colors transition-opacity transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-100 hover:text-white"
                        />
                        <MenuButton
                            isOpen={isOpen}
                            onToggle={() => setIsOpen((prev) => !prev)}
                        />
                    </div>
                </div>
                <LogoBadge />
                <MobileMenu
                    isOpen={isOpen}
                    links={mobileLinks}
                    onClose={() => setIsOpen(false)}
                />
            </div>
        </div>
    );
}
