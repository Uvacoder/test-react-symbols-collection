import { ComponentProps, FC } from 'react';

const PHP: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A855F7"
      d="M11.99 4.089c-1.546.471-2.535 1.665-2.525 3.044.011.944.31 1.781 1.063 2.964.483.76 1.45 2.218 1.479 2.228.014.007.148-.056.292-.137 1.024-.57 1.675-1.472 1.816-2.506.021-.152.039-.602.039-.996 0-.792.014-.86.211-1 .229-.166.507-.113.69.127l.102.13.01.725c.008.422-.003.862-.027 1.049a4.386 4.386 0 01-.687 1.876c-.225.345-.799.912-1.197 1.183-.355.242-1.052.626-1.27.7a.488.488 0 01-.507-.116c-.092-.088-1.623-2.408-2.031-3.083-.437-.719-.771-1.521-.915-2.204-.11-.517-.123-1.278-.032-1.704.088-.394.243-.806.426-1.112.084-.144.148-.267.14-.274a1.983 1.983 0 00-.358.045C5.98 5.49 3.756 7.616 3.16 10.33c-.15.676-.176.979-.154 1.795.02.8.063 1.077.253 1.708.215.707.507 1.33.978 2.08.338.538.525.908.638 1.263.193.595.207.729.228 2.02.014.82.036 1.236.064 1.286a.97.97 0 00.151.176l.11.105h2.593l.095-.088c.197-.183.194-.165.194-1.672v-1.39h2.108l.021 2.886.134.13.13.134h2.598l.095-.088c.173-.162.19-.236.229-1.01.067-1.366.25-2.362.651-3.523.215-.627.36-.961.817-1.883.39-.789.401-.803.496-.785.053.01.285.052.517.091.564.092.74.148.997.313.267.176.5.479.612.803.07.215.08.303.08.855 0 .595-.003.62-.084.736-.109.151-.355.264-.513.236a.944.944 0 01-.268-.134c-.204-.148-.496-.18-.672-.07-.204.126-1.64 1.598-1.697 1.738-.109.26-.05.458.215.708.919.873 2.386 1.197 3.6.795.73-.24 1.465-.834 1.961-1.59.268-.402.405-.694.563-1.208l.099-.313v-3.608c0-3.32-.003-3.633-.063-3.897a5.1 5.1 0 00-2.725-3.509c-.668-.334-1.534-.514-2.474-.514h-.38l-.388-.243c-.788-.485-1.27-.637-2.1-.658-.532-.01-.582-.007-.88.085zm5.575 5.174c.239.176.295.447.151.686-.264.419-.922.225-.922-.274 0-.388.471-.637.77-.412z"
    ></path>
  </svg>
);

export default PHP;