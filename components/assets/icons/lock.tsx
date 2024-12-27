import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const LockIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 16C14 17.105 13.106 18 12 18C10.896 18 10 17.105 10 16C10 14.894 10.896 14 12 14C13.106 14 14 14.894 14 16Z" />
      <path d="M20.5 13.5C20.5 11.291 18.709 9.5 16.5 9.5H7.5C5.291 9.5 3.5 11.291 3.5 13.5V19.5C3.5 21.709 5.291 23.5 7.5 23.5H16.5C18.709 23.5 20.5 21.709 20.5 19.5V13.5Z" />
      <path d="M6.5 6C6.5 2.962 8.963 0.5 12 0.5C15.037 0.5 17.5 2.962 17.5 6V9.5H6.5V6Z" />
    </svg>
  );
};

export default LockIcon;
