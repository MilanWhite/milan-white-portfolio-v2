import { useEffect } from "react";

export default function useBodyScrollLock(isLocked: boolean) {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (isLocked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalOverflow || "";
        }

        return () => {
            document.body.style.overflow = originalOverflow || "";
        };
    }, [isLocked]);
}
