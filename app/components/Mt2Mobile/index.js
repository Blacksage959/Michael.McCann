/**
*
* Mt2Mobile
*
*/

import React from 'react';

class Mt2Mobile extends React.PureComponent {
  render() {

    const weNeedYouBox={
      width:"100%",
      height:"50px",
      background:"rgba(3,255,3,.3)",
      textAlign:"center",
      fontSize:"3em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(210,255,210,1)",
      textShadow:"2px 2px 5px green",
      borderBottom:"1px solid green",

    }

    const spacer={
      height:"100px",
      width:"100%",
      background:"rgba(3,255,3,0)",
      textAlign:"center",
      fontSize:"4em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(210,255,210,1)",
      textShadow:"2px 2px 5px green",
      padding:"auto",
      borderTop:"1px solid green",
      borderBottom:"1px solid green",
    }

    const contentBox1={
      height:"auto",
      width:"auto",
      backgroundImage:"url(http://www.pitara.com/wordpress/wp-content/uploads/2001/10/clef-vine.jpg)",
      display:"flex",
      justifyContent:"left",
      backgroundSize:"cover",
      backgroundPosition:"center center",
      margin:"20px",
      zIndex:"99999"
    }


    const imgText={

      width:"100%",
      height:"30%",
      backgroundColor:"rgba(0,0,0,0)",
      marginTop:"0",
      marginBottom:"0",
      textAlign:"left",
      fontSize:"5em",
      fontWeight:"none",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(210,255,210,1)",
      textShadow:"1px 1px 5px black",
      padding:"7%",
      textAlign:"center",
      boxShadow:"0 0 10px 2px rgba(0,0,0,0.4)",
    }
    const paperBack={
      width:"100%",
      height:"auto",
      background:"rgba(3,255,3,.1)",
    }


    return (
      <div style={paperBack}>
        <div style={spacer}>We Need You</div>
          <div style={weNeedYouBox}></div>

        <div style={contentBox1}>
          <div style={imgText}>
            Donate
          </div>
        </div>
      </div>
    );
  }
}

export default Mt2Mobile;
