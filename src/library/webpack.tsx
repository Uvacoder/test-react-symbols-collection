import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Webpack: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#2563EB"
        fillRule="evenodd"
        d="M12.417 15.621c0 .32.347.521.625.361l2.719-1.57a.417.417 0 00.208-.36v-3.14a.417.417 0 00-.625-.362l-2.72 1.57a.417.417 0 00-.207.361v3.14zm2.51-5.792a.417.417 0 000-.722l-2.719-1.57a.417.417 0 00-.416 0L9.027 9.133a.417.417 0 000 .722l2.72 1.57a.417.417 0 00.416 0l2.764-1.596zm-6.271.773a.417.417 0 00-.625.361v3.088c0 .149.08.287.208.361l2.72 1.57c.277.16.624-.04.624-.36v-3.089a.417.417 0 00-.208-.36l-2.72-1.57z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#93C5FD"
        d="M5.511 7.773l1.244.718a.417.417 0 00.417 0l4.203-2.427a.417.417 0 00.208-.361V4.267a.417.417 0 00-.625-.36L5.511 7.05a.417.417 0 000 .722zM12.417 4.267v1.436c0 .149.08.286.208.36l4.204 2.428a.417.417 0 00.416 0l1.244-.718a.417.417 0 000-.722l-5.447-3.145a.417.417 0 00-.625.361zM17.454 9.573v4.854c0 .149.079.286.208.36l1.243.719c.278.16.625-.04.625-.361v-6.29a.417.417 0 00-.625-.36l-1.243.717a.417.417 0 00-.208.361zM16.829 15.51l-4.204 2.426a.417.417 0 00-.208.361v1.436c0 .32.347.521.625.36l5.447-3.144a.417.417 0 000-.722l-1.244-.718a.416.416 0 00-.416 0zM11.375 17.936L7.172 15.51a.417.417 0 00-.417 0l-1.244.718a.417.417 0 000 .722l5.447 3.145c.278.16.625-.04.625-.361v-1.436a.417.417 0 00-.208-.36zM6.547 14.427V9.573a.417.417 0 00-.209-.36l-1.243-.719a.417.417 0 00-.625.361v6.29c0 .32.347.521.625.36l1.243-.717a.417.417 0 00.209-.361z"
      ></path>
    </svg>
  );
};

export default Webpack;
