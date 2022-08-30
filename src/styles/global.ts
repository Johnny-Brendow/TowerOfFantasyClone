import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  'html,body': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollbarWidth: 'none', 
    backgroundColor:'#333',
    // overflo
    "&::-webkit-scrollbar":{
      display:'none',
    },
    // "&::-webkit-scrollbar":{
    //   display:'none',
    // },
    // overflow: 'hidden',
    // scrollbarColor:"green",
    scroll:"green",

  },
  
//   '*':{
// scrollbarWidth:'thin',
//   },

  "@font-face":{
    src: `url('/asset/fonts/Oxanium-Bold.ttf')`,
    fontFamily: 'Oxanium',
    fontWeight: 400,
    fontStyle: 'normal',
   },
   
  body:{
     height:'100vh',
  },

})
