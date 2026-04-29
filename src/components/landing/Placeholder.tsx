import { ImageIcon } from "lucide-react";

type Props = {
  ratio?: "1/1" | "3/4" | "16/9" | "9/16" | "4/5";
  label?: string;
  className?: string;
  rounded?: string;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
  "4/5": "aspect-[4/5]",
};

export function Placeholder({
  ratio = "16/9",
  label = "Imagem",
  className = "",
  rounded = "rounded-2xl",
}: Props) {
  return (
    <div
      className={`${ratioClass[ratio]} ${rounded} ${className} relative w-full overflow-hidden border border-border bg-muted`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <ImageIcon className="h-8 w-8 opacity-60" strokeWidth={1.5} />
        <span className="px-4 text-center text-xs font-medium uppercase tracking-wider opacity-70">
          {label}
        </span>
      </div>
    </div>
  );
}
