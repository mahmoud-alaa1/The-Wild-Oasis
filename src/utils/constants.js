export const PAGE_SIZE = 10;
export const size = {
  mobileS: "320",
  mobileM: "375",
  mobileL: "440",
  tablet: "768",
  laptop: "1050",
  laptopL: "1440",
  desktop: "2560",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  desktopL: `(max-width: ${size.desktop}px)`,
};
