import { colors } from './colors';
import { size } from './size';
import { semanticFonts, SemanticFontStyle } from './fonts';

export type { SemanticFontStyle };

export const ds = {
  colors,
  size,

  spacing: {
    xs: size[2],
    sm: size[3],
    md: size[4],
    lg: size[5],
    xl: size[6],
    xxl: size[7],
  },

  borderRadius: {
    xs: size[1],
    sm: size[2],
    md: size[3],
    lg: size[4],
    xl: size[5],
    xxl: size[6],
    full: 9999,
  },

  font: semanticFonts,
} as const;
