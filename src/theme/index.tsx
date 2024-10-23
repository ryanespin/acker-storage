import { ActionIcon, Badge, Button, Card, createTheme, rem, Select } from '@mantine/core';
import { colors } from './colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';

export const theme = createTheme({
  black: '#212121',
  white: '#FFFFFF',
  colors,
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        size: 'lg',
        variant: 'outline'
      }
    }),
    Badge: Badge.extend({
      defaultProps: {
        bg: 'var(--mantine-color-acker-gold-4)',
        c: 'black',
        lh: '1',
        radius: 'sm',
        tt: 'capitalize'
      }
    }),
    Button: Button.extend({
      defaultProps: {
        variant: 'outline'
      },
    }),
    Card: Card.extend({
      defaultProps: {
        padding: rem(24),
        radius: rem(12),
        withBorder: true
      }
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: 'right',
        rightSection: <FontAwesomeIcon icon={faCaretDown} />
      }
    })
  },
  fontFamily: "'Nunito Sans Variable', sans-serif",
  fontSizes: {
    '2xl': rem(24),
    '3xl': rem(30),
    '4xl': rem(36),
    '5xl': rem(48),
    '6xl': rem(60),
    '7xl': rem(72),
    '8xl': rem(96),
    '9xl': rem(128)
  },
  headings: {
    fontWeight: '400'
  },
  primaryColor: 'acker-red',
  primaryShade: 9
});
