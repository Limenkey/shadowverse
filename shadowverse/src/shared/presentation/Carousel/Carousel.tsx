// src/components/Carousel.js
import { useEffect, useRef, useState } from 'react';
import { Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface CarouselProps<T extends { id: number | string }> {
  items: T[];
  interval: number;
  renderItem: (item: T, index: number, arr: T[]) => JSX.Element;
}

const Carousel = <T extends { id: number | string }>(
  props: CarouselProps<T>,
) => {
  const { interval = 3000, items, renderItem } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, interval);

    return () => clearInterval(autoPlay);
  }, [currentIndex, isPaused, interval]);

  const size = useBreakpointValue({ base: '100%', md: '50%' });

  return (
    <Box
      position='relative'
      width='full'
      overflow='hidden'
      height='100%'
      ref={carouselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Box
        display='flex'
        transition='transform 0.5s'
        transform={`translateX(-${currentIndex * 33.33}%)`}
        width={`${items.length * 100}%`}
        height='100%'
      >
        {items.map((item, idx, arr) => (
          <Box key={item.id} height='100%' width='100%'>
            {renderItem(item, idx, arr)}
          </Box>
        ))}
      </Box>
      <IconButton
        icon={<ChevronLeftIcon />}
        position='absolute'
        left='0'
        top='50%'
        transform='translateY(-50%)'
        onClick={previousSlide}
        zIndex='10'
        bg='whiteAlpha.500'
        _hover={{ bg: 'whiteAlpha.800' }}
        aria-label='previous-slide'
      />
      <IconButton
        icon={<ChevronRightIcon />}
        position='absolute'
        right='0'
        top='50%'
        transform='translateY(-50%)'
        onClick={nextSlide}
        zIndex='10'
        bg='whiteAlpha.500'
        _hover={{ bg: 'whiteAlpha.800' }}
        aria-label='next-slide'
      />
      <Flex justify='center' position='absolute' bottom='10px' width='100%'>
        {items.map((_, index) => (
          <Box
            key={_.id}
            width='10px'
            height='10px'
            borderRadius='50%'
            bg={currentIndex === index ? 'blue.500' : 'gray.300'}
            mx='5px'
            cursor='pointer'
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;
