import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

export interface TargetCursorProps {
    targetSelector?: string;
    scopeSelector?: string;
    spinDuration?: number;
    hideDefaultCursor?: boolean;
    hoverDuration?: number;
    parallaxOn?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
    targetSelector = ".cursor-target",
    scopeSelector,
    spinDuration = 2,
    hideDefaultCursor = true,
    hoverDuration = 0.2,
    parallaxOn = true,
}) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cornersRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
    const spinTl = useRef<gsap.core.Timeline | null>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    const targetCornerPositionsRef = useRef<
        { x: number; y: number }[] | null
    >(null);
    const tickerFnRef = useRef<(() => void) | null>(null);
    const activeStrengthRef = useRef({ current: 0 });
    const moveXRef = useRef<gsap.QuickToFunc | null>(null);
    const moveYRef = useRef<gsap.QuickToFunc | null>(null);
    const scopeActiveRef = useRef(false);
    const lastMousePosRef = useRef({ x: -1, y: -1 });

    const cursorEnabled = useMemo(() => {
        if (typeof window === "undefined" || !window.matchMedia) return false;
        const canHover = window.matchMedia("(hover: hover)").matches;
        const finePointer = window.matchMedia("(pointer: fine)").matches;
        return canHover && finePointer;
    }, []);

    const constants = useMemo(() => ({ borderWidth: 3, cornerSize: 12 }), []);

    const moveCursor = useCallback((x: number, y: number) => {
        moveXRef.current?.(x);
        moveYRef.current?.(y);
    }, []);

    useEffect(() => {
        if (!cursorEnabled || !cursorRef.current) return;

        const originalCursor = document.body.style.cursor;
        if (hideDefaultCursor) {
            document.body.style.cursor = originalCursor;
        }

        const cursor = cursorRef.current;
        cornersRef.current =
            cursor.querySelectorAll<HTMLDivElement>(".target-cursor-corner");

        gsap.set(cursor, { autoAlpha: 0 });

        moveXRef.current = gsap.quickTo(cursor, "x", {
            duration: 0.1,
            ease: "power3.out",
        });
        moveYRef.current = gsap.quickTo(cursor, "y", {
            duration: 0.1,
            ease: "power3.out",
        });

        let activeTarget: Element | null = null;
        let currentLeaveHandler: (() => void) | null = null;
        let resumeTimeout: ReturnType<typeof setTimeout> | null = null;
        const scopeElement = scopeSelector
            ? document.querySelector(scopeSelector)
            : null;

        const setScopeActive = (active: boolean) => {
            if (scopeActiveRef.current === active) return;
            scopeActiveRef.current = active;
            gsap.set(cursor, { autoAlpha: active ? 1 : 0 });
            if (hideDefaultCursor) {
                document.body.style.cursor = active ? "none" : originalCursor;
            }
            if (!active && currentLeaveHandler) {
                currentLeaveHandler();
            }
        };

        const cleanupTarget = (target: Element) => {
            if (currentLeaveHandler) {
                target.removeEventListener("mouseleave", currentLeaveHandler);
            }
            currentLeaveHandler = null;
        };

        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });

        const createSpinTimeline = () => {
            if (spinTl.current) {
                spinTl.current.kill();
            }
            spinTl.current = gsap
                .timeline({ repeat: -1 })
                .to(cursor, {
                    rotation: "+=360",
                    duration: spinDuration,
                    ease: "none",
                });
        };

        createSpinTimeline();

        const updateTargetCornerPositions = (target: Element) => {
            const rect = target.getBoundingClientRect();
            const { borderWidth, cornerSize } = constants;
            targetCornerPositionsRef.current = [
                { x: rect.left - borderWidth, y: rect.top - borderWidth },
                {
                    x: rect.right + borderWidth - cornerSize,
                    y: rect.top - borderWidth,
                },
                {
                    x: rect.right + borderWidth - cornerSize,
                    y: rect.bottom + borderWidth - cornerSize,
                },
                {
                    x: rect.left - borderWidth,
                    y: rect.bottom + borderWidth - cornerSize,
                },
            ];
        };

        const refreshActiveTargetPositions = () => {
            if (!activeTarget) return;
            updateTargetCornerPositions(activeTarget);
        };

        const tickerFn = () => {
            if (
                !targetCornerPositionsRef.current ||
                !cursorRef.current ||
                !cornersRef.current
            ) {
                return;
            }
            const strength = activeStrengthRef.current.current;
            if (strength === 0) return;
            const cursorX = gsap.getProperty(cursorRef.current, "x") as number;
            const cursorY = gsap.getProperty(cursorRef.current, "y") as number;
            const corners = Array.from(cornersRef.current);
            corners.forEach((corner, i) => {
                const currentX = gsap.getProperty(corner, "x") as number;
                const currentY = gsap.getProperty(corner, "y") as number;
                const targetX =
                    targetCornerPositionsRef.current![i].x - cursorX;
                const targetY =
                    targetCornerPositionsRef.current![i].y - cursorY;
                const finalX = currentX + (targetX - currentX) * strength;
                const finalY = currentY + (targetY - currentY) * strength;
                const duration = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;
                if (duration === 0) {
                    gsap.set(corner, { x: finalX, y: finalY });
                } else {
                    gsap.to(corner, {
                        x: finalX,
                        y: finalY,
                        duration: duration,
                        ease: "power1.out",
                        overwrite: "auto",
                    });
                }
            });
        };

        tickerFnRef.current = tickerFn;

        const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
        const pointerMoveHandler = (e: MouseEvent) => {
            lastMousePosRef.current = { x: e.clientX, y: e.clientY };
            if (scopeElement) {
                const elementUnderMouse = document.elementFromPoint(
                    e.clientX,
                    e.clientY,
                );
                const isWithinScope =
                    elementUnderMouse &&
                    (elementUnderMouse === scopeElement ||
                        elementUnderMouse.closest(scopeSelector!) === scopeElement);
                setScopeActive(Boolean(isWithinScope));
            } else {
                setScopeActive(true);
            }
            if (!scopeActiveRef.current) return;
            moveHandler(e);
        };
        window.addEventListener("mousemove", pointerMoveHandler);

        const scrollHandler = () => {
            const { x: mouseX, y: mouseY } = lastMousePosRef.current;
            if (mouseX < 0 || mouseY < 0) return;
            if (scopeElement) {
                const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
                const isWithinScope =
                    elementUnderMouse &&
                    (elementUnderMouse === scopeElement ||
                        elementUnderMouse.closest(scopeSelector!) === scopeElement);
                setScopeActive(Boolean(isWithinScope));
            }
            if (!activeTarget || !cursorRef.current) return;
            refreshActiveTargetPositions();
            const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
            const isStillOverTarget =
                elementUnderMouse &&
                (elementUnderMouse === activeTarget ||
                    elementUnderMouse.closest(targetSelector) === activeTarget);
            if (!isStillOverTarget) {
                currentLeaveHandler?.();
            }
        };
        window.addEventListener("scroll", scrollHandler, { passive: true });

        const resizeHandler = () => {
            refreshActiveTargetPositions();
        };
        window.addEventListener("resize", resizeHandler);

        const mouseDownHandler = () => {
            if (!dotRef.current) return;
            gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
            gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
        };

        const mouseUpHandler = () => {
            if (!dotRef.current) return;
            gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
            gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
        };

        window.addEventListener("mousedown", mouseDownHandler);
        window.addEventListener("mouseup", mouseUpHandler);

        const enterHandler = (e: MouseEvent) => {
            if (!scopeActiveRef.current) return;
            const directTarget = e.target as Element;
            const allTargets: Element[] = [];
            let current: Element | null = directTarget;
            while (current && current !== document.body) {
                if (current.matches(targetSelector)) {
                    allTargets.push(current);
                }
                current = current.parentElement;
            }
            const target = allTargets[0] || null;
            if (!target || !cursorRef.current || !cornersRef.current) return;
            if (activeTarget === target) return;
            if (activeTarget) {
                cleanupTarget(activeTarget);
            }
            if (resumeTimeout) {
                clearTimeout(resumeTimeout);
                resumeTimeout = null;
            }

            activeTarget = target;
            const corners = Array.from(cornersRef.current);
            corners.forEach((corner) => gsap.killTweensOf(corner));
            gsap.killTweensOf(cursorRef.current, "rotation");
            spinTl.current?.pause();
            gsap.set(cursorRef.current, { rotation: 0 });

            const cursorX = gsap.getProperty(cursorRef.current, "x") as number;
            const cursorY = gsap.getProperty(cursorRef.current, "y") as number;

            updateTargetCornerPositions(target);

            gsap.ticker.add(tickerFnRef.current!);

            gsap.to(activeStrengthRef.current, {
                current: 1,
                duration: hoverDuration,
                ease: "power2.out",
            });

            corners.forEach((corner, i) => {
                gsap.to(corner, {
                    x: targetCornerPositionsRef.current![i].x - cursorX,
                    y: targetCornerPositionsRef.current![i].y - cursorY,
                    duration: 0.2,
                    ease: "power2.out",
                });
            });

            const leaveHandler = () => {
                gsap.ticker.remove(tickerFnRef.current!);
                targetCornerPositionsRef.current = null;
                gsap.set(activeStrengthRef.current, {
                    current: 0,
                    overwrite: true,
                });
                activeTarget = null;
                if (cornersRef.current) {
                    const corners = Array.from(cornersRef.current);
                    gsap.killTweensOf(corners);
                    const { cornerSize } = constants;
                    const positions = [
                        { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
                        { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
                        { x: cornerSize * 0.5, y: cornerSize * 0.5 },
                        { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
                    ];
                    const tl = gsap.timeline();
                    corners.forEach((corner, index) => {
                        tl.to(
                            corner,
                            {
                                x: positions[index].x,
                                y: positions[index].y,
                                duration: 0.3,
                                ease: "power3.out",
                            },
                            0,
                        );
                    });
                }
                resumeTimeout = setTimeout(() => {
                    if (!activeTarget && cursorRef.current && spinTl.current) {
                        const currentRotation = gsap.getProperty(
                            cursorRef.current,
                            "rotation",
                        ) as number;
                        const normalizedRotation = currentRotation % 360;
                        spinTl.current.kill();
                        spinTl.current = gsap
                            .timeline({ repeat: -1 })
                            .to(cursorRef.current, {
                                rotation: "+=360",
                                duration: spinDuration,
                                ease: "none",
                            });
                        gsap.to(cursorRef.current, {
                            rotation: normalizedRotation + 360,
                            duration:
                                spinDuration * (1 - normalizedRotation / 360),
                            ease: "none",
                            onComplete: () => {
                                spinTl.current?.restart();
                            },
                        });
                    }
                    resumeTimeout = null;
                }, 50);
                cleanupTarget(target);
            };
            currentLeaveHandler = leaveHandler;
            target.addEventListener("mouseleave", leaveHandler);
        };

        window.addEventListener("mouseover", enterHandler as EventListener);

        return () => {
            if (tickerFnRef.current) {
                gsap.ticker.remove(tickerFnRef.current);
            }
            window.removeEventListener("mousemove", pointerMoveHandler);
            window.removeEventListener("mouseover", enterHandler as EventListener);
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", resizeHandler);
            window.removeEventListener("mousedown", mouseDownHandler);
            window.removeEventListener("mouseup", mouseUpHandler);
            if (activeTarget) {
                cleanupTarget(activeTarget);
            }
            spinTl.current?.kill();
            document.body.style.cursor = originalCursor;
            targetCornerPositionsRef.current = null;
            activeStrengthRef.current.current = 0;
            moveXRef.current = null;
            moveYRef.current = null;
            scopeActiveRef.current = false;
        };
    }, [
        targetSelector,
        scopeSelector,
        spinDuration,
        moveCursor,
        constants,
        hideDefaultCursor,
        cursorEnabled,
        hoverDuration,
        parallaxOn,
    ]);

    useEffect(() => {
        if (!cursorEnabled || !cursorRef.current || !spinTl.current) return;
        if (spinTl.current.isActive()) {
            spinTl.current.kill();
            spinTl.current = gsap
                .timeline({ repeat: -1 })
                .to(cursorRef.current, {
                    rotation: "+=360",
                    duration: spinDuration,
                    ease: "none",
                });
        }
    }, [spinDuration, cursorEnabled]);

    if (!cursorEnabled) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            className="fixed left-0 top-0 z-[9999] h-0 w-0 pointer-events-none"
            style={{ willChange: "transform" }}
        >
            <div
                ref={dotRef}
                className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                style={{ willChange: "transform" }}
            />
            <div
                className="target-cursor-corner absolute left-1/2 top-1/2 h-3 w-3 -translate-x-[150%] -translate-y-[150%] border-[3px] border-white border-b-0 border-r-0"
                style={{ willChange: "transform" }}
            />
            <div
                className="target-cursor-corner absolute left-1/2 top-1/2 h-3 w-3 translate-x-1/2 -translate-y-[150%] border-[3px] border-white border-b-0 border-l-0"
                style={{ willChange: "transform" }}
            />
            <div
                className="target-cursor-corner absolute left-1/2 top-1/2 h-3 w-3 translate-x-1/2 translate-y-1/2 border-[3px] border-white border-l-0 border-t-0"
                style={{ willChange: "transform" }}
            />
            <div
                className="target-cursor-corner absolute left-1/2 top-1/2 h-3 w-3 -translate-x-[150%] translate-y-1/2 border-[3px] border-white border-r-0 border-t-0"
                style={{ willChange: "transform" }}
            />
        </div>
    );
};

export default TargetCursor;
