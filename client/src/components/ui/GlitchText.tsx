import { cn } from "@/lib/utils";

interface GlitchTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

export default function GlitchText({ text, className, as: Tag = "h1", ...props }: GlitchTextProps) {
  return (
    <Tag
      className={cn("glitch-text relative inline-block text-white", className)}
      data-text={text}
      {...props}
    >
      {text}
    </Tag>
  );
}
