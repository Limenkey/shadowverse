import { extendTheme } from '@chakra-ui/react';
import { APP_COLORS } from './colors.ts';

export const AppTheme = extendTheme({
  styles: {
    global: {
      '#root': {
        height: '100%',
      },
      'html, body': {
        bg: APP_COLORS.mainBgGray,
        height: '100%',
      },
      'html, body, *': {
        '&::-webkit-scrollbar': {
          height: '8px',
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          '&:hover': {
            backgroundColor: 'gray.700',
          },
          backgroundColor: APP_COLORS.cardBG,
          borderRadius: '4px',
          cursor: 'pointer',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: APP_COLORS.mainBgGray,
        },
        color: APP_COLORS.textWhite,
      },
    },
  },
});
