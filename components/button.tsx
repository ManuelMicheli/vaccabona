import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
};

export function Button({
  children,
  className,
  href,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  ...rest
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[#4A0000] text-stone-50 shadow-[0_12px_40px_rgba(74,0,0,0.45)] border border-white/10 hover:brightness-110",
    ghost:
      "bg-white/5 text-stone-100 border border-white/10 hover:bg-white/10 backdrop-blur",
    outline:
      "border border-white/30 text-stone-100 hover:border-amber-300/70 hover:text-amber-100",
  } as const;

  const content = (
    <span className="inline-flex items-center gap-2">
      {Icon && iconPosition === "left" && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition duration-200",
          styles[variant],
          className,
        )}
        role="button"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition duration-200",
        styles[variant],
        className,
      )}
      {...rest}
    >
      {content}
    </button>
  );
}

