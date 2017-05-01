/**
*
* MtrendMobile2
*
*/

import React from 'react';

class MTMFillMobile2 extends React.PureComponent {
  render() {
    const MTMFill2={
      height:"600px",
      width:"100%",
      display:"flex",
      flexDirection:"column",
      backgroundColor:"rgba(3,255,3,.1)",
      background:"radial-gradient(rgba(200,255,200,1),rgba(3,255,3,.1))",
      paddingBottom:"7%",


    }
    const MTMFillBox2={
      height:"30%",
      width:"100%",
      background:"linear-gradient( 90deg, rgba(150,255,150,1),rgba(200,255,200,1))",
      borderBottom:"solid 1px green",
      borderTop:"solid 1px green",
      marginTop:"3%",
      textAlign:"left",
      fontSize:"2em",
      fontWeight:"bold",
      fontVariant:"none",
      fontFamily:"Lato",
      color:"white",
      textShadow:"2px 2px 5px green",
      padding:"7%"


    }
    const MTMFillBox3={
      height:"30%",
      width:"100%",
      background:"linear-gradient( 90deg, rgba(200,255,200,1),rgba(150,255,150,1))",
      borderBottom:"solid 1px green",
      borderTop:"solid 1px green",
      marginTop:"3%",
      textAlign:"right",
      fontSize:"2em",
      fontWeight:"bold",
      fontVariant:"none",
      fontFamily:"Lato",
      color:"white",
      textShadow:"2px 2px 5px green",
      padding:"7%",



    }
    const color={
      color:"rgba(100,255,100,.8)",
    }
    return (
      <div>
        <div style={MTMFill2}>
          <div style={MTMFillBox2}><span style={color}>MISSION</span> : ending pollution </div>
          <div style={MTMFillBox3}><span style={color}>IMPACT</span> : improving quality</div>
          <div style={MTMFillBox2}><span style={color}>UNITY</span> : ending pollution</div>
        </div>
      </div>
    );
  }
}

export default MTMFillMobile2;
