/**
*
* Footer
*
*/

import React from 'react';
import ThumbUpIcon from 'material-ui/svg-icons/action/thumb-up';
import WorkIcon from 'material-ui/svg-icons/action/work';
import ChatBubbleOutlineIcon from 'material-ui/svg-icons/communication/chat-bubble-outline';
import InsertPhotoIcon from 'material-ui/svg-icons/editor/insert-photo';
import BuildIcon from 'material-ui/svg-icons/action/build';
import ShareIcon from 'material-ui/svg-icons/social/share';

class Footer extends React.PureComponent {
  render() {
    const mainFootBg={
      width:"100%",
      height:"100px",
      background:"linear-gradient( rgba(150,255,150,1),rgba(100,255,100,1))",
      display:"flex",
      flexDirection:"column",
      borderTop:"solid green 1px",
      textAlign:"center",
      paddingTop:"15px"

    }
    const footerMaxWCont={
      width:"80%",
      height:"100%",
      background:"rgba(3,255,3,0)",
      display:"flex",
      flexDirection:"column",
      margin:"auto"

    }
    const footSMmaxWidth={
    height:"100%",
    background:"rgba(3,255,3,0)",
    display:"flex",
    justifyContent:"center",
    }

    const footSM={
    height:"100%",
    width:"100%",
    display:"flex",
    flexDisplay:"row",
    justifyContent:"space-between",
    }

  const sMblock={
    height:"100%",
    width:"10%",
    textAlign:"center",
    }

  const fTxtBox={
    width:"100%",
    height:"40%",
    fontSize:"1.25em",
    fontWeight:"none",
    fontVariant:"small-caps",
    fontFamily:"Lato",
    color:"gray",
    textShadow:"none",
  }

  const finalFootCopy={
    width:"100%",
    height:"40%",
    textAlign:"center",
    background:"rgba(3,255,3,0)",
    fontSize:"1em",
    fontWeight:"none",
    fontVariant:"small-caps",
    fontFamily:"Lato",
    color:"white",
    textShadow:"1px 1px 5px green",


}

    return (
      <footer style={mainFootBg}>
        <div style={footerMaxWCont}>
          <div style={footSMmaxWidth}>
            <div style={sMblock}>
              <ThumbUpIcon color="#ffffff" hoverColor="rgba(20,192,11,1)"/>
            </div>
            <div style={sMblock}>
              <WorkIcon color="#ffffff" hoverColor="rgba(20,192,11,1)"/>
            </div>
            <div style={sMblock}>
              <ChatBubbleOutlineIcon color="#ffffff" hoverColor="rgba(20,192,11,1)"/>
            </div>
            <div style={sMblock}>
              <InsertPhotoIcon color="#ffffff" hoverColor="rgba(20,192,11,1)"/>
            </div>
            <div style={sMblock}>
              <BuildIcon color="#ffffff" hoverColor="rgba(20,192,11,1)"/>
            </div>
            <div style={sMblock}>
              <ShareIcon color="#ffffff" hoverColor="rgba(20,192,11,1)"/>
            </div>
          </div>
        </div>

        <div style={fTxtBox}>
          Terms / Privacy / Conditions / Contact
        </div>

        <div style={finalFootCopy}>Copyright 2017 MEM Inc. A Global Initiative</div>
      </footer>

    );
  }
}

export default Footer;
