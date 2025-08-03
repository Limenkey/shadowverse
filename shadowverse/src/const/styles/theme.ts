import { extendTheme } from '@chakra-ui/react';
import { APP_COLORS } from './colors.ts';

export const AppTheme = extendTheme({
  styles: {
    global: {
      '#root': {
        height: '100%',
      },
      'html, body': {
        bg: APP_COLORS.primaryGray,
        height: '100%',
      },
      'html, body, *': {
        '&::-webkit-scrollbar': {
          height: '8px',
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          '&:hover': {
            backgroundColor: APP_COLORS.accentPink,
          },
          backgroundColor: APP_COLORS.secondaryBlack,
          borderRadius: '4px',
          cursor: 'pointer',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: APP_COLORS.primaryGray,
        },
        color: APP_COLORS.textWhite,
      },
    },
  },
});
