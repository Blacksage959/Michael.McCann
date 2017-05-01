/**
*
* MtrendMobile2
*
*/

import React from 'react';

class MtrendMobile2 extends React.PureComponent {
  render() {
    const MTMFill2={
      height:"600px",
      width:"100%",
      display:"flex",
      flexDirection:"column",

      backgroundColor:"rgba(3,255,3,.1)",
    }
    const MTMFillBox2={
      height:"30%",
      width:"100%",
      backgroundColor:"rgba(3,255,3,.3)",
      borderBottom:"solid 1px",
      borderTop:"solid 1px",
      marginTop:"3%",
    }
    return (
      <div>
        <div style={MTMFill2}>
          <div style={MTMFillBox2}></div>
          <div style={MTMFillBox2}></div>
          <div style={MTMFillBox2}></div>
        </div>
      </div>
    );
  }
}

export default MtrendMobile2;
