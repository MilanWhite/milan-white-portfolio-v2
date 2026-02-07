type MenuButtonProps = {
    isOpen: boolean;
    onToggle: () => void;
};

export default function MenuButton({ isOpen, onToggle }: MenuButtonProps) {
    return (
        <button
            type="button"
            className={`relative z-[50] hidden h-9 items-center gap-2 px-3 text-[13px] font-semibold uppercase tracking-[0.3px] text-[#e8eef6] transition-transform duration-200 hover:-translate-y-0.5 hover:text-white max-[720px]:inline-flex motion-reduce:transition-none ${
                isOpen ? "border-white/[0.35]" : ""
            }`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="navbar-mobile-menu"
            onClick={onToggle}
        >
            <span>Menu</span>
            <span className="relative inline-flex h-4 w-4" aria-hidden="true">
                <span
                    className={`absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-45" : ""
                    }`}
                />
                <span
                    className={`absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "-rotate-45" : "rotate-90"
                    }`}
                />
            </span>
        </button>
    );
}
