import { styled ,keyframes} from "../../../styles/stitches.config";

export const video = styled("video", {
  width: "110%",
  // height: "100vh",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",

  "@mobile": {
    display: "none",
  },
  "@tablet": {
    display: "none",
  },
  "@desktop": {
    display: "block",
  },
});

export const background = styled("section", {
  backgroundImage: `url('/assets/images/page1/download-bg.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "auto",
  height: "100vh",
  position: "relative",
  backgroundRepeat: "no-repeat",
  objectFit: "contain",
  display: "flex",
});

export const message = styled("div", {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "absolute",
  margin: "0 auto",
  width: "100vw",
  objectFit: "contain",
  zIndex: 1,

  "@mobile": {
    backgroundImage: `url('/assets/images/page1/home-tittle-m.png')`,
    backgroundSize: "contain",
    transition: "500ms all cubic-bezier(0.42,0,0.65,1.5)",
    height: 500,
    top: 90,
  },
  "@tablet": {
    backgroundImage: `url('/assets/images/page1/home-tittle.png')`,
    backgroundSize: "800px",
    height: 100,
    top: 430,
  },
  "@desktop": {},
});

const blinkArrows = keyframes({
  "0%": {backgroundImage: `url('/assets/images/page1/p4-arrow.png')`,  },
  "33%": {backgroundImage: `url('/assets/images/page1/p2-arrow.png')`,  },
  "66%": { backgroundImage: `url('/assets/images/page1/p3-arrow.png')`, },
  "100%": { backgroundImage: `url('/assets/images/page1/p1-arrow.png')`, },
});

export const foot = styled("footer", {
  backgroundPosition: "center",
  left: 0,
  bottom: 0,
  pointerEvents: "none",
  width: "100vw",
  position: "absolute",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  p: {
    fontFamily: "Oxanium",
    fontSize: "0.6rem",
    paddingBottom: "0.9rem",
    color:"#00e0e0",
    "&:after": {
      display: "flex",
      backgroundSize: "auto 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      width: "31px",
      height: "15px",
      content: "",
      animation: `${blinkArrows} 1.5s ease-in-out infinite`,
    },
  },
  "@mobile": {
    backgroundImage: `url('/assets/images/page1/p1-bottom-m.png')`,
    backgroundSize: "100% ",
    height: "8vw",
  },
  "@tablet": {
    backgroundImage: `url('/assets/images/page1/p1-bottom.png')`,
    backgroundSize: "100% 100%",
    height: "100vh",
  },
  "@desktop": {},
});
