import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const BackIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.0435 4.00012L7 12.0001L16.0435 20.0001" />
    </svg>
  );
};

export default BackIcon;
