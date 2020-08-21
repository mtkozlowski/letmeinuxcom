import { colors } from "./colors"

export const theme = {
  colors,
  font: {
    import:
      "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');",
    primaryFamily: "'Open Sans', sans-serif",
    secondaryFamily:
      "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    boldFontWeight: 700,

    largeHeaderSize: "94px",
    subHeaderSize: "48px",
    blogPostTeaserSize: "24px",
    regularTextSize: "16px",

    /* MOBILE FONT SIZES */
    largeHeaderSize__Mobile: "72px",
  },

  media: {
    phone: "@media (max-width: 480px)",
    phoneS: "@media (max-width: 375px)",
    littleTablet: "@media (max-width: 768px)",
    tablet: "@media (max-width: 1080px)",
    desktop: "@media (min-width: 1080px)",
    regularSection: "@media (max-width: 42rem)",
  },

  responsive: {
    tablet: "1024px",
    tabletVertical: "768px",
    mobile: "640px",
    mobileMid: "480px",
    mobileVertical: "360px",
  },

  regularSection: "34rem",
}
