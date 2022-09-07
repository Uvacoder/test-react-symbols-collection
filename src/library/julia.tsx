import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Julia: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#F87171"
        stroke="#F87171"
        strokeWidth="2"
        d="M10.354 16.177a3.177 3.177 0 11-6.354 0 3.177 3.177 0 016.354 0z"
      ></path>
      <path
        fill="#4ADE80"
        stroke="#4ADE80"
        strokeWidth="2"
        d="M15.177 7.823a3.177 3.177 0 11-6.354 0 3.177 3.177 0 016.354 0z"
      ></path>
      <path
        fill="#A855F7"
        d="M21 16.177a4.177 4.177 0 11-8.354 0 4.177 4.177 0 018.354 0z"
      ></path>
    </svg>
  );
};

export default Julia;