
import { styled } from "styles/stitches.config";
import { ResponsiveImage } from "utils/functions";

export const weapon = styled(ResponsiveImage, {
    "@mobile":{
      filter: 'drop-shadow(0 0 0.75rem black)',
    },
    "@desktop":{
      filter: 'none',
    },
    width: '100%',
    height: '100%',
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    bottom: 0,
    right: 0,
    transition: "all 1s ease-in-out",
  });
  
  export const weaponWrapper  = styled('div',{
    bottom: 0,
    "@mobile":{
      width: "100vw",
      height: "40vh",
      position: "absolute",
    },
    "@desktop":{  
      top:"25%",
      width: "max(20%,330px)",
      height: "max(50%,430px)",
      minWidth:'300px',
      maxWidth:'500px',
      right:"7.5%",
      position: "absolute",
    }
  })