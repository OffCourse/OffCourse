/**
 * @name Offcourse Theme
 * @description default styles for the Offcourse project
 */
import { ErrorState, Size, Variant } from "@offcourse/types";
import ThemeType from "./ThemeType";

const avatarSVG = require("./offcourse-avatar.svg");
const genericError = require("./offcourse-generic-error.svg");
const logoSvg = require("./offcourse-logo.svg");
const noSearchResults = require("./offcourse-no-search-results.svg");
const notFound = require("./offcourse-not-found.svg");
const contentError = require("./offcourse-content-error.svg");


const logo = {
    svg: logoSvg,
    dimensions: { height: 1, width: 4.66666 },
    background: "black"
};

const avatars = {
    [ErrorState.NONE]: {
        svg: avatarSVG,
        dimensions: { height: 1, width: 1 },
        background: "transparent"
    },
    [ErrorState.RESOURCE_NOT_LOADING]: {
        svg: contentError,
        dimensions: { height: 1, width: 1.9 },
        background: "transparent"
    },
    [ErrorState.NO_SEARCH_RESULTS]: {
        svg: noSearchResults,
        dimensions: { height: 27 / 15, width: 1 },
        background: "transparent"
    },
    [ErrorState.COURSE_NOT_FOUND]: {
        svg: notFound,
        dimensions: { height: 1.44, width: 1.1 },
        background: "transparent"
    },
    [ErrorState.CHECKPOINT_NOT_FOUND]: {
        svg: notFound,
        dimensions: { height: 1.44, width: 1.1 },
        background: "transparent"
    },
    [ErrorState.TOTAL_PANIC]: {
        svg: genericError,
        dimensions: { height: 1, width: 1.5 },
        background: "transparent"
    }
};

const baseColors = {
    black: "#000000",
    white: "#FFFFFF",
    darkGray: "#797B7A",
    mediumGray: "#C8CAC9",
    lightGray: "#f4f6f4",
    yellow: "#fdbe68",
    red: "#E2625E",
    green: "#658f7b",
    blue: "#b5decb"
};

const grayScale = [
    baseColors.white,
    baseColors.lightGray,
    baseColors.mediumGray,
    baseColors.darkGray,
    baseColors.black
];

const colors = {
    [Variant.DEFAULT]: baseColors.black,
    [Variant.DISABLED]: grayScale[2],
    [Variant.INFO]: baseColors.blue,
    [Variant.WARNING]: baseColors.yellow,
    [Variant.POSITIVE]: baseColors.green,
    [Variant.NEGATIVE]: baseColors.red
};

const fonts = {
    base: "Nitti Grotesk, Helvetica, sans-serif",
    bold: "Nitti Grotesk Bold, Helvetica Bold, sans-serif",
    accent: "Nitti Grotesk Bold, Helvetica Bold, sans-serif"
};

const breakpoints = ["30rem", "48rem", "64rem"];

const baseUnit = 16;

const fontSizes = ["0.75rem", "1rem", "1.375rem", "1.75rem", "2.5rem", "4rem"];

const lineHeights = [
    "1rem",
    "1.25rem",
    "1.375rem",
    "1.75rem",
    "1.875rem",
    "3rem",
    "4.5rem"
];

const space = [
    "0",
    "0.0625rem",
    "0.125rem",
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.5rem",
    "2rem"
];

const borders = ["0", "0.0625rem solid", "0.125rem solid"];

const buttonSizes = {
    [Size.SMALL]: "5.33333rem",
    [Size.NORMAL]: "8rem",
    [Size.LARGE]: "16rem",
    [Size.EXTRA_LARGE]: "100%"
};

const units = {
    sixteenth: "0.0625rem",
    eight: "0.125rem",
    quarter: "0.25rem",
    half: "0.5rem",
    threeQuarter: "0.75rem",
    base: baseUnit,
    baseFont: baseUnit,
    baseLine: "1.25rem",
    logoHeight: "1.875rem",
    subTitleFont: "1.375rem",
    titleFont: "1.75rem",
    titleHeight: "1.875rem"
};

const signalColors = {
    [Variant.DEFAULT]: { color: grayScale[3] },
    [Variant.DISABLED]: { color: colors[Variant.DISABLED] },
    [Variant.INFO]: { color: colors[Variant.INFO] },
    [Variant.WARNING]: { color: colors[Variant.WARNING] },
    [Variant.POSITIVE]: { color: colors[Variant.POSITIVE] },
    [Variant.NEGATIVE]: { color: colors[Variant.NEGATIVE] }
};

const signalColorCombos = {
    [Variant.DEFAULT]: {
        backgroundColor: grayScale[3],
        borderColor: colors[Variant.POSITIVE],
        color: grayScale[0],
        "&:hover": {
            backgroundColor: colors[Variant.POSITIVE],
            color: grayScale[0],
            borderColor: grayScale[3]
        }
    },
    [Variant.DISABLED]: {
        backgroundColor: colors[Variant.DISABLED],
        borderColor: colors[Variant.DISABLED],
        color: grayScale[1],
        "&:hover": {
            backgroundColor: colors[Variant.DISABLED],
            color: grayScale[0],
            borderColor: colors[Variant.DISABLED]
        }
    },
    [Variant.INFO]: {
        backgroundColor: colors[Variant.INFO],
        borderColor: grayScale[3],
        color: grayScale[4],
        "&:hover": {
            backgroundColor: grayScale[3],
            color: grayScale[0],
            borderColor: colors[Variant.INFO]
        }
    },
    [Variant.POSITIVE]: {
        backgroundColor: colors[Variant.POSITIVE],
        borderColor: grayScale[3],
        color: grayScale[0],
        "&:hover": {
            backgroundColor: grayScale[3],
            color: grayScale[0],
            borderColor: colors[Variant.POSITIVE]
        }
    },
    [Variant.WARNING]: {
        backgroundColor: colors[Variant.WARNING],
        borderColor: grayScale[3],
        color: grayScale[4],
        "&:hover": {
            backgroundColor: grayScale[3],
            color: grayScale[0],
            borderColor: colors[Variant.WARNING]
        }
    },
    [Variant.NEGATIVE]: {
        backgroundColor: colors[Variant.NEGATIVE],
        borderColor: grayScale[3],
        color: grayScale[0],
        "&:hover": {
            backgroundColor: grayScale[3],
            color: grayScale[0],
            borderColor: colors[Variant.NEGATIVE]
        }
    }
};

const globals = `
  body {
    top: 0;
    left: 0;
    right: 0;
  }

  ::-webkit-scrollbar {
      width: 0px;  /* remove scrollbar space */
      background: transparent;  /* optional: just make scrollbar invisible */
  }

  @font-face {
    font-family: 'Nitti Grotesk';
    font-weight: 300;
    font-display: fallback;
    src: local('Nitti Grotesk'), 
         url('fonts/NGN.woff') format('woff'),
         url('https://offcourse.io/fonts/NGN.woff') format('woff');
  }

  @font-face {
    font-family: 'Nitti Grotesk Bold';
    font-weight: 700;
    font-display: fallback;
    src: local('Nitti Grotesk Bold'), 
         url('fonts/NGB.woff') format('woff'),
         url('https://offcourse.io/fonts/NGB.woff') format('woff');
  }

  @font-face {
    font-family: 'Nitti Bold'; 
    font-weight: 700;
    font-display: fallback;
    src: local('Nitti Bold'), 
         url('fonts/NB.woff') format('woff'),
         url('https://offcourse.io/fonts/NB.woff') format('woff');
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body {
    font-family: Nitti Grotesk, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: ${grayScale[1]};
  }
`;

const widths = {
    card: ["100%", "18rem", "18rem"]
};


const theme: ThemeType = {
    name: "offcourse",
    avatars,
    buttonSizes,
    breakpoints,
    fontSizes,
    lineHeights,
    logo,
    space,
    colors,
    borders,
    fonts,
    grayScale,
    globals,
    signalColors,
    signalColorCombos,
    widths
};

export default theme;
