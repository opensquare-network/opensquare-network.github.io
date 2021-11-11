import React from "react";

export default function CloseIcon({ onClick }) {
  return (
    <button onClick={onClick} className="lg:hidden">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.63608 4.22183L4.22187 5.63604L10.5858 12L4.22187 18.364L5.63608 19.7782L12 13.4142L18.364 19.7782L19.7782 18.364L13.4143 12L19.7782 5.63604L18.364 4.22183L12 10.5858L5.63608 4.22183Z"
            fill="#2E343D"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
