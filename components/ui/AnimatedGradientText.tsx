import { cn } from "@/lib/utils";

type Props = {
  text: string;
};

export default function AnimatedGradientText({ text }: Props) {
  return (
    <div
      className={cn(
        "bg-size hover:animate-bg-position bg-gradient-to-r from-[#FAA381] from-30% via-yellow-700 via-50% to-red-400 to-80% bg-[length:200%_auto] bg-clip-text hover:text-transparent text-[#9B9B9B]"
      )}
    >
      {text}
    </div>
  );
}
