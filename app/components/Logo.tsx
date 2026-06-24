type Props = {
  size?: number;
  className?: string;
  dark?: boolean;
};

export function Logo({ size = 34, className = "", dark = false }: Props) {
  const wordmarkColor = dark ? "#FFFFFF" : "var(--ink)";
  const bg = dark ? "rgba(255,255,255,0.08)" : "var(--ink)";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        style={{
          width: size,
          height: size,
          background: bg,
          borderRadius: 10,
          display: "grid",
          placeItems: "center",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,.06)",
          flex: "0 0 auto",
        }}
        aria-hidden="true"
      >
        <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 9c3-2.5 6-2.5 9 0s6 2.5 9 0"
            stroke="#8FD3B0"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M3 15c3-2.5 6-2.5 9 0s6 2.5 9 0"
            stroke="#EA6A47"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className="display"
        style={{
          color: wordmarkColor,
          fontSize: "1.12rem",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        Abide Media Group
      </span>
    </span>
  );
}
