import { css } from 'styled-components'

const BASE = 16

const rem = (num) => `${num / BASE}rem`

const flex = (opt) => css`
  display: flex;
  justify-content: ${opt.x || 'center'};
  align-items: ${opt.y || 'center'};
`

const hover = (inner) => css`
  &:hover,
  &:focus {
    ${inner}
  }
`

const media = {
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,
  tablet: (inner) => css`
    @media (max-width: ${1165 / 16}em) {
      ${inner}
    }
  `,
  mobile: (inner) => css`
    @media (max-width: ${890 / 16}em) {
      ${inner}
    }
  `,
  phone: (inner) => css`
    @media (max-width: ${650 / 16}em) {
      ${inner}
    }
  `,
}

export default {
  primary: '#FF9800',
  black: '#202329',
  white: '#fff',
  backBlack: '#202329',
  gray: '#9e9e9e',
  whitesmoke: '#f5f5f5',
  lightgray: 'rgba(46, 41, 51, 0.08)',
  red: '#d63d2e',
  green: '#55cc44',
  navHeight: 60,
  sidebarWidth: 260,
  contentWidth: 960,
  shadows: {
    lg: 'rgba(0, 0, 0, 0.08) 0px 5px 20px;',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
  },
  mixins: {
    flex,
    hover,
  },
  media: {
    ...media,
  },
  spacing: {
    rem,
    _4: rem(4),
    _8: rem(8),
    _12: rem(12),
    _16: rem(16),
    _20: rem(20),
    _24: rem(24),
    _28: rem(28),
    _32: rem(32),
    _36: rem(36),
    _40: rem(40),
  },
}
