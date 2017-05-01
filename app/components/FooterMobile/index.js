/**
*
* FooterMobile
*
*/

import React from 'react';

class FooterMobile extends React.PureComponent {
  render() {
    const finalFootCopy={
      width:"100%",
      height:"20%",
      textAlign:"center",
      background:"rgba(3,255,3,.4)",
      fontSize:"1.25em",
      fontWeight:"none",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"white",
      textShadow:"1px 1px 5px green",

  }

  const footerBG={
    width:"100%",
    height:"20%",
    background:"rgba(3,255,3,.2)",
    display:"flex",
    flexDirection:"flexBottom",
    textAlign:"center",
    borderTop:"solid 1px green",
    padding:"auto"
  }
  const fTxtBox={
    width:"100%",
    height:"50px",
    fontSize:"1.25em",
    fontWeight:"none",
    fontVariant:"small-caps",
    fontFamily:"Lato",
    color:"gray",
    textShadow:"none",
  }
    return (
    <div>
      <div style={footerBG}>
        <div style={fTxtBox}>
          Terms / Privacy / Conditions / Contact
        </div>
      </div>
      <div style={finalFootCopy}>Copyright 2017 MEM Inc. A Global Initiative</div>
    </div>
    );
  }
}

export default FooterMobile;
