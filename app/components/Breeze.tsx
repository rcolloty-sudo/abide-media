// Animated blob + wave background used in heroes
export function Breeze() {
  return (
    <div className="breeze" aria-hidden="true">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
      <svg className="wave-lines" viewBox="0 0 760 300" fill="none">
        <path d="M0 60c120-44 240-44 380 0s260 44 380 0" stroke="#8FD3B0" strokeWidth="2" opacity=".7" />
        <path d="M0 120c120-44 240-44 380 0s260 44 380 0" stroke="#8FD3B0" strokeWidth="2" opacity=".45" />
        <path d="M0 180c120-44 240-44 380 0s260 44 380 0" stroke="#EA6A47" strokeWidth="2" opacity=".4" />
        <path d="M0 240c120-44 240-44 380 0s260 44 380 0" stroke="#8FD3B0" strokeWidth="2" opacity=".25" />
      </svg>
    </div>
  );
}
