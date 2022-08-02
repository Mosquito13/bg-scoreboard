import { Children, useCallback, useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CarouselItem = ({ children }) => (
  <div className="h-full flex-[0_0_100%] flex items-center justify-center">
    {children}
  </div>
);

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = Children.count(children);

  const translatePercent = useMemo(() => activeIndex * 100, [activeIndex]);

  const goToPrevious = useCallback(() => {
    let newActiveIndex = activeIndex - 1;

    if (newActiveIndex < 0) {
      newActiveIndex = itemCount - 1;
    }

    setActiveIndex(newActiveIndex);
  }, [activeIndex, itemCount]);

  const goToNext = useCallback(() => {
    let newActiveIndex = activeIndex + 1;

    if (newActiveIndex === itemCount) {
      newActiveIndex = 0;
    }

    setActiveIndex(newActiveIndex);
  }, [activeIndex, itemCount]);

  return (
    <div className="w-full h-full overflow-hidden relative bg-slate-400">
      <span onClick={goToPrevious} className="w-10 h-10 rounded-full shadow bg-red-400 text-black absolute top-2/4 translate-y-[-50%] left-2 text-4xl flex items-center justify-center cursor-pointer z-10">
        <FiChevronLeft />
      </span>
      <span onClick={goToNext} className="w-10 h-10 rounded-full shadow bg-red-400 text-black absolute top-2/4 translate-y-[-50%] right-2 text-4xl flex items-center justify-center cursor-pointer z-10">
        <FiChevronRight />
      </span>
      <div className={`w-full h-full flex transition translate-x-[-${translatePercent}%]`}>
        {children}
      </div>
    </div>
  );
};

export { CarouselItem };
export default Carousel;
