import type { ButtonHTMLAttributes, CSSProperties } from "react";

type SizeValue = number | string;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    height?: SizeValue;
    width?: SizeValue;
    textColor?: string;
    backgroundColor?: string;
    href?: string;
}

export default function Button({
    text = "Button",
    height,
    width,
    textColor = "#000",
    backgroundColor = "#fff",
    href = "javascript:void(0)", // do nothing pretty much always unless specified
    className,
    style,
    ...rest
}: ButtonProps) {
    const resolvedStyle: CSSProperties = {
        ...style,
        color: textColor,
        backgroundColor,
        height: height === undefined ? style?.height : toCssSize(height),
        width: width === undefined ? style?.width : toCssSize(width),
    };

    const paddingX = width === undefined ? "px-6" : "";
    const paddingY = height === undefined ? "py-2" : "";

    return (
        <a href={href}>
            <button
                type="button"
                className={`inline-flex cursor-pointer items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:cursor-not-allowed disabled:opacity-60 ${paddingX} ${paddingY} ${className ?? ""}`}
                style={resolvedStyle}
                {...rest}
            >
                {text}
            </button>
        </a>
    );
}

function toCssSize(value: SizeValue) {
    return typeof value === "number" ? `${value}px` : value;
}
