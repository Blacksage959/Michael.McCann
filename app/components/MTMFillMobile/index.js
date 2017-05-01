/**
*
* MtrendMobile
*
*/

import React from 'react';

class MtrendMobile extends React.PureComponent {
  render() {
    const MTMFill={
      height:"400px",
      weight:"100%",
      backgroundColor:"rgba(3,255,3,.1)",
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"space-around",


    }
    const MTMFillBox={
      minWidth:"300px",
      maxHeight:"300px",
      border:"solid 1px",
      marginTop:"10px",

    }
    const MTMFillBoxT={
      width:"100%",
      height:"20%",
      backgroundColor:"rgba(3,255,3,.2)",
      textAlign:"center",
      fontSize:"80%vh",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"white",
      textShadow:"1px 1px 5px green",
    }
    const MTMFillBoxB={
      width:"100%",
      height:"80%",

      backgroundColor:"rgba(3,255,3,.4)",

    }
    return (
      <div >
        <div style={MTMFill}>
          <div style={MTMFillBox}>
            <div style={MTMFillBoxT}>Impact</div>
            <div style={MTMFillBoxB}></div>
          </div>

          <div style={MTMFillBox}>
            <div style={MTMFillBoxT}>Mission</div>
            <div style={MTMFillBoxB}></div>
          </div>

          <div style={MTMFillBox}>
            <div style={MTMFillBoxT}>Unity</div>
            <div style={MTMFillBoxB}></div>
          </div>

        </div>
      </div>
    );
  }
}

export default MtrendMobile;
