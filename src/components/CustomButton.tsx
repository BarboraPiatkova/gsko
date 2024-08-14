interface ButtonProps {
  buttonText: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "custom"
    | "invisible";
  className?: string;
}

const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
  outline:
    "border border-input border-accent-color bg-background hover:bg-accent hover:text-accent-foreground w-fit",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
  custom:
    "bg-accent-color text-destructive-foreground hover:bg-accent-hover w-fit",
  invisible: "px-0",
};

export default function CustomButton({
  buttonText,
  variant,
  className,
}: ButtonProps) {
  const variantClass = buttonVariants[variant] || buttonVariants.default;
  const combinedClassName = `${variantClass} ${className || ""}`.trim();

  return <button className={combinedClassName}>{buttonText}</button>;
}
