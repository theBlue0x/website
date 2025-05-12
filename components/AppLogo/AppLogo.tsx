import clsx from 'clsx';
import React from 'react';

export const AppLogo: React.FC<{
  url: string;
  size?: number;
  className?: string;
  alt?: string;
}> = ({ url, size = 80, className = '', alt = '' }) => {
  return (
    <div
      aria-label={alt}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 100C0 0 0 0 100 0S200 0 200 100 200 200 100 200 0 200 0 100"
            fill="white"
          />
        </mask>
        <image href={url} mask="url(#mask0)" width="200" height="200" />
      </svg>
    </div>
  );
};
