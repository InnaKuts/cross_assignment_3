export const font = {
  family: 'Inter, sans-serif',
  weight: {
    regular: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

export const size = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 24,
} as const;

export type SemanticFontStyle = {
  family?: string;
  size: number;
  weight: number;
  lineHeight?: number;
};

export const semanticFonts: Record<string, Record<string, SemanticFontStyle>> = {
  heading: {
    h1: {
      size: size.xxl,
      weight: font.weight.extrabold,
    },
    h2: {
      size: size.xl,
      weight: font.weight.extrabold,
    },
    h3: {
      size: size.lg,
      weight: font.weight.extrabold,
    },
    h4: {
      size: size.md,
      weight: font.weight.bold,
    },
    h5: {
      size: size.sm,
      weight: font.weight.bold,
    },
  },
  body: {
    xl: {
      size: size.xl,
      weight: font.weight.regular,
      lineHeight: 24,
    },
    lg: {
      size: size.lg,
      weight: font.weight.regular,
      lineHeight: 22,
    },
    md: {
      size: size.md,
      weight: font.weight.regular,
      lineHeight: 20,
    },
    sm: {
      size: size.sm,
      weight: font.weight.regular,
      lineHeight: 16,
    },
    xs: {
      size: size.xs,
      weight: font.weight.regular,
      lineHeight: 14,
    },
  },
  action: {
    lg: {
      size: size.md,
      weight: font.weight.semibold,
    },
    md: {
      size: size.sm,
      weight: font.weight.semibold,
    },
    sm: {
      size: size.xs,
      weight: font.weight.semibold,
    },
  },
  caption: {
    md: {
      size: size.xs,
      weight: font.weight.semibold,
    },
  },
} as const;
