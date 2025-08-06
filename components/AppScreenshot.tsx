import React from 'react';
import Image from 'next/image';

import screenshot from '../public/images/screenshot.webp';

export const AppScreenshot = () => {
  return (
    <div className="flex justify-center mt-4 mb-10">
      <Image
        priority
        src={screenshot}
        className="w-full max-w-none bg-gray-900 rounded-lg ring-1 shadow-xl lg:w-10/12 ring-gray-400/10"
        alt="Screenshot of the Blue0x dashboard"
      />
    </div>
  );
};
