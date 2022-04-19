export const COLORS = {
    white: "hsl(0deg 0% 100%)",
    offblack: "hsl(24deg 5% 6%)",
    gray: {
      100: "hsl(40deg 12% 95%)",
      300: "hsl(35deg 8% 80%)",
      500: "hsl(30deg 4% 60%)",
      700: "hsl(28deg 5% 40%)",
      900: "hsl(24deg 6% 16%)"
    },
    primary: "hsl(164deg 54% 23%)",
    secondary: "hsl(236deg 42% 18%)",
    background: "hsl(237deg 33% 9%)",
    urgent: "hsl(0deg 55% 54%)"
  };
  
  export const WEIGHTS = {
    normal: 500,
    medium: 600,
    bold: 800
  };
  
  export const BREAKPOINTS = {
    phone: 600,
    tablet: 950,
    laptop: 1300
  };
  
  export const QUERIES = {
    phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`
  };
  