type Props = {
  size?: number;
  className?: string;
};

export function Logo({ size = 28, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Abide Media Group"
      >
        <rect width="32" height="32" rx="7" fill="#1A1A2E" />
        <path
          d="M9.4 22.5L14.8 9.5h2.5l5.4 13h-2.4l-1.3-3.4h-5.9l-1.3 3.4H9.4Zm4.5-5.4h4.3L16 11.6l-2.1 5.5Z"
          fill="#B68923"
        />
      </svg>
      <span className="serif text-[1.3rem] font-semibold tracking-tight text-[var(--ink)] leading-none">
        Abide<span className="text-[var(--gold)]">.</span>
      </span>
    </span>
  );
}
