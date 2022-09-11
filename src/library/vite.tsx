import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Vite: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 25}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        fill="#A855F7"
        d="M20.94 5.668l-8.455 15.12a.46.46 0 01-.8.003L3.06 5.669a.46.46 0 01.48-.68l8.465 1.513c.054.01.11.01.163 0l8.288-1.51a.46.46 0 01.483.676z"
      ></path>
      <path
        fill="#FBBF24"
        d="M16.038 3.004L9.781 4.231a.23.23 0 00-.185.211l-.385 6.501a.23.23 0 00.28.238l1.743-.402a.23.23 0 01.277.27l-.518 2.534a.23.23 0 00.292.266l1.076-.327a.23.23 0 01.292.266l-.823 3.982c-.051.249.28.384.418.17l.093-.142 5.098-10.175a.23.23 0 00-.249-.329l-1.793.346a.23.23 0 01-.264-.289l1.17-4.057a.23.23 0 00-.265-.29z"
      ></path>
    </svg>
  );
};

export default Vite;