/**
*
* Mtrend2
*
*/

import React from 'react';

class Mtrend2 extends React.PureComponent {
  render() {
    const mAfTrendCont={
      width:"100%",
      height:"600px",
      display:"flex",
      justifyContent:"center",
      background:"rgba(3,255,3,.05)",

    }
    const mAfTrendContMax={
      width:"100%",
      height:"100%",
      background:"rgba(3,255,3,0)",
      display:"flex",
      flexDirection:"column",

    }
    const mAfTrendContTitle={
      height:"30%",
      width:"100%",
      background:"rgba(3,255,3,.2)",
      textAlign:"center",
      fontSize:"5em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"white",
      textShadow:"1px 1px 5px green",
      borderTop:"solid green 1px",

    }
    const  mAfTrendContContentTitle={
      height:"10%",
      width:"100%",
      display:"flex",
      flexDirection:"row",
      textAlign:"center",
      fontSize:"2em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"white",
      textShadow:"1px 1px 5px green",
      borderBottom:"solid green 1px",

    }
    const  mAfTrendContContentTitleB={
      height:"100%",
      width:"50%",
      background:"rgba(3,255,3,.3)",
    }
    const  mAfTrendContContent={
      height:"70%",
      width:"100%",
      background:"rgba(3,255,3,.05)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
    }
    const img={
      width:"100%",
      height:"100%",
      borderRadius:"20px",
      background:"rgba(3,255,3,0)",
      boxShadow:"0 0 10px 1px rgba(0,0,0,0.4)",
    }
    const imgBlock2={
      height:"300px",
      width:"550px",
      background:"rgba(3,255,3,0)",
      marginTop:"40px",
    }
    return (
      <div style={mAfTrendCont}>
        <div style={mAfTrendContMax}>
          <div style={mAfTrendContTitle}>We Need You</div>
          <div style={mAfTrendContContentTitle}>
            <div style={mAfTrendContContentTitleB}>Donate</div>
            <div style={mAfTrendContContentTitleB}>Lend A Hand</div>
          </div>
          <div style={mAfTrendContContent}>
            <div style={imgBlock2}>
              <img style={img} src="http://www.greenworldgroupptyltd.com/go-green.jpg"/>
            </div>
            <div style={imgBlock2}>
              <img style={img} src="https://www.usnews.com/dims4/USNEWS/71bde69/2147483647/thumbnail/640x420/quality/85/?url=%2Fcmsmedia%2Fad%2F094c812bf54b822620888c5da08473%2F37849FE_DA_Heart_020413.jpg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mtrend2;
