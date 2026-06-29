import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: "primary" | "white" | "outlineWhite" | "black" | "outlineBlack" | "ghost";
    size?: "md" | "lg";
    className?: string;
    type?: "button" | "submit" | "reset";
};

export function Button({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    type = "button",
}: ButtonProps) {
    const baseClasses =
        "font-semibold inline-flex items-center justify-center transition-colors duration-300 whitespace-nowrap rounded-sm cursor-pointer";

    const variantClasses = {
        primary: "bg-[#ED1C24] text-white hover:bg-red-700",
        white: "bg-white text-black hover:bg-gray-200",
        outlineWhite:
            "border border-white/20 text-white/80 hover:bg-white hover:text-black hover:border-white",
        black: "bg-black text-white hover:bg-zinc-800",
        outlineBlack:
            "border border-black text-black hover:bg-black hover:text-white",
        ghost: "",
    };

    const sizeClasses = {
        md: "text-sm px-6 py-3",
        lg: "text-base px-8 py-4 rounded-md",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}