import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useSwipeable } from 'react-swipeable';

const getItem = (id, content) => (
  <div key={id} className="h-full flex-[0_0_100%] flex items-center justify-center">
    {content}
  </div>
);

const getNavigationArrow = (onClick, left) => {
  const classes = classNames(
    'w-10 h-10 rounded-full shadow bg-indigo-300 text-indigo-900 absolute top-2/4 translate-y-[-50%] text-4xl flex items-center justify-center cursor-pointer z-10',
    left && 'left-2',
    !left && 'right-2'
  );

  return (
    <span className={classes} onClick={onClick}>
      {left && <FiChevronLeft />}
      {!left && <FiChevronRight />}
    </span>
  );
};

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsCount = items.length;

  const translateStyle = { transform: `translateX(-${activeIndex * 100}%)` };

  const goToPrevious = useCallback(() => {
    let newActiveIndex = activeIndex - 1;

    if (newActiveIndex < 0) {
      newActiveIndex = itemsCount - 1;
    }

    setActiveIndex(newActiveIndex);
  }, [activeIndex, itemsCount]);

  const goToNext = useCallback(() => {
    let newActiveIndex = activeIndex + 1;

    if (newActiveIndex === itemsCount) {
      newActiveIndex = 0;
    }

    setActiveIndex(newActiveIndex);
  }, [activeIndex, itemsCount]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious
  });

  return (
    <div className="w-full h-full overflow-hidden relative" {...swipeHandlers}>
      <div className={`w-full h-full flex transition`} style={translateStyle}>
        {items.map(({ id, content }) => getItem(id, content))}
      </div>
      <span className="bg-indigo-300 rounded-full px-4 py-2 text-lg font-semibold whitespace-nowrap text-indigo-900 absolute bottom-2 left-1/2 translate-x-[-50%] shadow">
        {items[activeIndex].title}
      </span>
      {getNavigationArrow(goToPrevious, true)}
      {getNavigationArrow(goToNext, false)}
    </div>
  );
};

export default Carousel;
