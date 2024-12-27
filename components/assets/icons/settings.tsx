import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const SettingsIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.2539 13.5H23.4999V10.5H20.2529C20.0439 9.633 19.7019 8.319 19.2499 7.578L21.5459 5.283L18.7169 2.454L16.4199 4.75C15.6799 4.298 14.3669 3.957 13.4999 3.748V0.5H10.4999V3.748C9.6329 3.957 8.3189 4.298 7.5789 4.75L5.2819 2.454L2.4529 5.283L4.7499 7.579C4.2979 8.319 3.9559 9.633 3.7459 10.5H0.499901V13.5H3.7459C3.9559 14.367 4.2979 15.681 4.7499 16.421L2.4529 18.718L5.2819 21.546L7.5779 19.249C8.3189 19.702 9.6329 20.044 10.4999 20.254V23.5H13.4999V20.254C14.3669 20.044 15.6809 19.702 16.4199 19.25L18.7179 21.546L21.5459 18.718L19.2499 16.421C19.7019 15.681 20.0439 14.367 20.2539 13.5Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 12C16.5 14.486 14.485 16.5 12 16.5C9.515 16.5 7.5 14.486 7.5 12C7.5 9.515 9.515 7.5 12 7.5C14.485 7.5 16.5 9.515 16.5 12Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SettingsIcon;
