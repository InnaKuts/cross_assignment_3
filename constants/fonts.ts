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

export const semanticFonts = {
  heading: {
    h1: {
      fontFamily: font.family,
      fontSize: size.xxl,
      fontWeight: font.weight.extrabold,
    },
    h2: {
      fontFamily: font.family,
      fontSize: size.xl,
      fontWeight: font.weight.extrabold,
    },
    h3: {
      fontFamily: font.family,
      fontSize: size.lg,
      fontWeight: font.weight.extrabold,
    },
    h4: {
      fontFamily: font.family,
      fontSize: size.md,
      fontWeight: font.weight.bold,
    },
    h5: {
      fontFamily: font.family,
      fontSize: size.sm,
      fontWeight: font.weight.bold,
    },
  },
  body: {
    xl: {
      fontFamily: font.family,
      fontSize: size.xl,
      fontWeight: font.weight.regular,
      lineHeight: 24,
    },
    lg: {
      fontFamily: font.family,
      fontSize: size.lg,
      fontWeight: font.weight.regular,
      lineHeight: 22,
    },
    md: {
      fontFamily: font.family,
      fontSize: size.md,
      fontWeight: font.weight.regular,
      lineHeight: 20,
    },
    sm: {
      fontFamily: font.family,
      fontSize: size.sm,
      fontWeight: font.weight.regular,
      lineHeight: 16,
    },
    xs: {
      fontFamily: font.family,
      fontSize: size.xs,
      fontWeight: font.weight.regular,
      lineHeight: 14,
    },
  },
  action: {
    lg: {
      fontFamily: font.family,
      fontSize: size.md,
      fontWeight: font.weight.semibold,
    },
    md: {
      fontFamily: font.family,
      fontSize: size.sm,
      fontWeight: font.weight.semibold,
    },
    sm: {
      fontFamily: font.family,
      fontSize: size.xs,
      fontWeight: font.weight.semibold,
    },
  },
  caption: {
    md: {
      fontFamily: font.family,
      fontSize: size.xs,
      fontWeight: font.weight.semibold,
    },
  },
} as const;
