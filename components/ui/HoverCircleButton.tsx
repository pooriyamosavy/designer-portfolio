type Props = {
  title: string;
};

export default function HoverCircleButton({ title }: Props) {
  return (
    <button className="group relative overflow-hidden rounded-full bg-[#FAA381] md:px-[26px] md:py-[10px] px-4 py-2 transition-all w-full">
      <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-black/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
      <span className="font-semibold text-black md:text-[20px] text-base">
        {title}
      </span>
    </button>
  );
}
