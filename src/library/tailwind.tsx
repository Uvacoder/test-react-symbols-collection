import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Tailwind: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#0EA5E9"
        fillRule="evenodd"
        d="M12 6C9.333 6 7.667 7.325 7 9.976c1-1.325 2.167-1.822 3.5-1.49.76.188 1.305.737 1.906 1.344.98.99 2.116 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.326-2.166 1.822-3.5 1.49-.76-.188-1.305-.737-1.906-1.344C15.614 7.144 14.479 6 12 6zm-5 5.964c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.76.189 1.305.738 1.906 1.345.98.99 2.115 2.134 4.594 2.134 2.667 0 4.334-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.76-.189-1.305-.738-1.906-1.345-.98-.989-2.116-2.134-4.594-2.134z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Tailwind;