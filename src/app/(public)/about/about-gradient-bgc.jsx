import React from 'react';

const GradientBackground = ({ position }) => {
  const topStyle =
    'absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80';
  const bottomStyle =
    'absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]';

  const topClipPath =
    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)';
  const bottomClipPath =
    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)';

  const style = position === 'top' ? topStyle : bottomStyle;
  const clipPath = position === 'top' ? topClipPath : bottomClipPath;

  return (
    <div className={style}>
      <div
        className={`relative ${position === 'top' ? 'left-[calc(50%-11rem)]' : 'left-[calc(50%+3rem)]'} aspect-[1155/678] w-[36.125rem] -translate-x-1/2 ${position === 'top' ? 'rotate-[30deg]' : ''} bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:${position === 'top' ? 'left-[calc(50%-30rem)]' : 'left-[calc(50%+36rem)]'} sm:w-[72.1875rem]`}
        style={{ clipPath }}
      />
    </div>
  );
};

export default GradientBackground;
