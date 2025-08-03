// src/components/Carousel.js
import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { APP_COLORS } from '../../../const/styles';

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
      overflow='hidden'
      ref={carouselRef}
      borderRadius='16px'
      paddingBottom='24px'
    >
      <Box
        display='flex'
        transition='transform 0.5s'
        transform={`translateX(-${currentIndex * (100 / items.length)}%)`}
        width={`${items.length * 100}%`}
        height='100%'
      >
        {items.map((item, idx, arr) => (
          <Box key={item.id} minHeight='100%' width='100%'>
            {renderItem(item, idx, arr)}
          </Box>
        ))}
      </Box>
      <IconButton
        icon={<ChevronLeftIcon width='24px' height='24px' />}
        position='absolute'
        left='4px'
        top='50%'
        transform='translateY(-50%)'
        onClick={previousSlide}
        zIndex='1'
        bg={`${APP_COLORS.secondaryBlack}80`}
        _hover={{ bg: `${APP_COLORS.secondaryBlack}CC` }}
        aria-label='previous-slide'
        width='40px'
        height='40px'
        borderRadius='8px'
        color={APP_COLORS.textWhite}
      />
      <IconButton
        icon={<ChevronRightIcon width='24px' height='24px' />}
        position='absolute'
        right='4px'
        top='50%'
        transform='translateY(-50%)'
        onClick={nextSlide}
        zIndex='1'
        bg={`${APP_COLORS.secondaryBlack}80`}
        _hover={{ bg: `${APP_COLORS.secondaryBlack}CC` }}
        aria-label='next-slide'
        width='40px'
        height='40px'
        borderRadius='8px'
        color={APP_COLORS.textWhite}
      />
      <Flex justify='center' position='absolute' bottom='4px' width='100%'>
        <Button
          onClick={() => {
            setIsPaused(!isPaused);
          }}
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='2px'
          minW='12px'
          width='12px'
          height='10px'
          bg='transparent'
          mr='5px'
          p='0'
          role='group'
          _hover={{
            bg: 'transparent',
          }}
        >
          {isPaused ? (
            <TriangleUpIcon
              height='12px'
              width='12px'
              transform='rotate(90deg)'
              color={APP_COLORS.textWhite}
              _groupHover={{
                color: APP_COLORS.accentPink,
              }}
            />
          ) : (
            <>
              <Box
                height='100%'
                width='4px'
                bg={APP_COLORS.textWhite}
                borderRadius='4px'
                _groupHover={{
                  bg: APP_COLORS.accentPink,
                }}
              />
              <Box
                height='100%'
                width='4px'
                bg={APP_COLORS.textWhite}
                borderRadius='4px'
                _groupHover={{
                  bg: APP_COLORS.accentPink,
                }}
              />
            </>
          )}
        </Button>
        <Flex>
          {items.map((_, index) => (
            <Box
              key={_.id}
              width='10px'
              height='10px'
              borderRadius='50%'
              bg={
                currentIndex === index
                  ? APP_COLORS.accentPink
                  : APP_COLORS.primaryGray
              }
              mx='5px'
              cursor='pointer'
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Carousel;
