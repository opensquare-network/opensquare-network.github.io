import React from "react";

export default function MenuIcon({ onClick }) {
  return (
    <button className="md:hidden" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
          fill="#2E343D"
        />
      </svg>
    </button>
  );
}
