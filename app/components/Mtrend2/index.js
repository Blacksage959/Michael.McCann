/**
*
* Mtrend2
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Responsive from 'react-responsive';

class Mtrend2 extends React.PureComponent {

  handleNav = (location) => {
    this.context.router.push(location);
  }
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
      background:"rgba(3,255,3,.2)!important",
      textAlign:"center",
      fontSize:"5em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(220,255,220,1)",
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
      color:"rgba(220,255,220,1)",
      textShadow:"1px 1px 5px green",
      borderBottom:"solid green 1px",

    }
    const  mAfTrendContContentTitleB={
      height:"100%",
      width:"50%",
      background:"rgba(3,255,3,.3)",
      color:"rgba(220,255,220,1)",
      textShadow:"1px 1px 5px green",
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
      height:"auto",
      backgroundImage:"url:http://www.pitara.com/wordpress/wp-content/uploads/2001/10/clef-vine.jpg",
      padding:"auto",
      position:"relative",
      bottom:"800px"
    }

    const img2={
      width:"100%",
      height:"auto",
      backgroundImage:"url:http://www.pitara.com/wordpress/wp-content/uploads/2001/10/clef-vine.jpg",
      padding:"auto",
      position:"relative",
      bottom:"500px"
    }

    const imgBlock2={
      height:"auto",
      width:"100%",
      background:"rgba(3,255,3,0)",
      zIndex:"90000",
      overflow:"hidden",

    }

    const imgText={

      width:"100%",
      height:"30%",
      backgroundColor:"rgba(0,0,0,0)",
      textAlign:"left",
      fontSize:"5em",
      fontWeight:"none",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(210,255,210,1)",
      textShadow:"1px 1px 5px black",
      padding:"7%",
      textAlign:"center",
      position:"relative",
      zIndex:"99998"

    }


    return (

      <div>
      <Responsive minDeviceWidth={1400}>
      <div style={mAfTrendCont}>
        <div style={mAfTrendContMax}>
          <FlatButton style={mAfTrendContTitle} backgroundColor="rgba(3,255,3,.2)" hoverColor="rgba(3,255,3,.05)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/donate")}>We Need You</FlatButton>
          <div style={mAfTrendContContentTitle}>
            <FlatButton style={mAfTrendContContentTitleB} backgroundColor="rgba(3,255,3,.4)" hoverColor="rgba(150,225,150,.2)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/donate")}>Donate</FlatButton>
            <FlatButton style={mAfTrendContContentTitleB} backgroundColor="rgba(3,255,3,.4)" hoverColor="rgba(150,225,150,.2)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/signup")}>Lend A Hand</FlatButton>
          </div>
          <div style={mAfTrendContContent}>
            <div style={imgBlock2}>
              <img style={img} src="http://www.pitara.com/wordpress/wp-content/uploads/2001/10/clef-vine.jpg"/>
              <p style={imgText}>Donate</p>
            </div>

          </div>
        </div>
      </div>
      </Responsive>


      <Responsive maxDeviceWidth={1399}>
        <div style={mAfTrendCont}>
          <div style={mAfTrendContMax}>
            <FlatButton style={mAfTrendContTitle} backgroundColor="rgba(3,255,3,.2)" hoverColor="rgba(3,255,3,.05)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/donate")}>We Need You</FlatButton>
            <div style={mAfTrendContContentTitle}>
              <FlatButton style={mAfTrendContContentTitleB} backgroundColor="rgba(3,255,3,.4)" hoverColor="rgba(150,225,150,.2)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/donate")}>Donate</FlatButton>
              <FlatButton style={mAfTrendContContentTitleB} backgroundColor="rgba(3,255,3,.4)" hoverColor="rgba(150,225,150,.2)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/signup")}>Lend A Hand</FlatButton>
            </div>
            <div style={mAfTrendContContent}>
              <div style={imgBlock2}>
                <img style={img2} src="http://www.pitara.com/wordpress/wp-content/uploads/2001/10/clef-vine.jpg"/>
                <p style={imgText}>Donate</p>
              </div>

            </div>
          </div>
        </div>
      </Responsive>
      </div>


    );
  }
}
Mtrend2.contextTypes = {
  router: React.PropTypes.object
}

export default Mtrend2;
