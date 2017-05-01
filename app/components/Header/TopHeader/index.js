/**
*
* TopHeader
*
*/

import React from 'react';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import {Link} from "react-router";
import FlatButton from 'material-ui/FlatButton';


class TopHeader extends React.PureComponent {

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {


    const topHeader={
      height:"100px",
      width:"100%",
      background:"rgba(3,255,3,0)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",


    }

    const headerBlock1={
      width:"20%",
      height:"100px",
      background:"rgba(3,255,3,0)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      fontSize:"2em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",

      textShadow:"1px 1px 5px green",

    }
    const hBlock1bttns={
      height:"70px",
      width:"45%",
      background:"none",
      marginTop:"15px",
      textAlign:"center",
      textDecoration:"none",
      color:"rgba(220,255,220,1)",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      textShadow:"2px 2px 5px green",

    }
    const headerBlock2={
      width:"30% !important",
      height:"100px",
      background:"rgba(3,255,3,0)",
      textAlign:"center",
      fontSize:"5em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(220,255,220,1)",
      textShadow:"3px 3px 5px green",
      textDecoration:"none",

    }
    const headerBlock3={
      width:"20%",
      height:"100px",
      background:"rgba(3,255,3,0)",
      display:"flex",
      flexDirection:"column",
      align:"center",
      justifyContent:"space-between",
      textDecoration:"none",


    }
    const hBlock3call={
      textAlign:"center",
      width:"100%",
      height:"45%",
      background:"rgba(255,255,255,0)",
      fontSize:"1.2em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"white",
      textShadow:"1px 1px 5px green",
      textDecoration:"none",

    }
    const hBlock3Icons={
      textAlign:"center",
      width:"100%",
      height:"45%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      background:"rgba(255,255,255,0)",

    }
    const hBlock3IconsLR={
      height:"100%",
      width:"20%",
      background:"lightgreen",
      paddingTop:"10px",
      borderRadius:"30px",
      boxShadow:"0 0 10px 1px rgba(0,0,0,0.4)"


    }

    return (

      <div style={topHeader}>
        <nav style={headerBlock1}>
        <FlatButton  style={hBlock1bttns} backgroundColor="rgba(0,0,0,.1)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/signup")}>JOIN</FlatButton>
        <FlatButton  style={hBlock1bttns} rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/signin")}>sign in</FlatButton>
        </nav>

        <nav>
        <FlatButton style={headerBlock2} rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/")}>GreenWorx</FlatButton>

        </nav>

        <nav style={headerBlock3}>
          <FlatButton style={hBlock3call} rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/contact")}>Contact Us</FlatButton>
          <div style={hBlock3Icons}>

            <div style={hBlock3IconsLR}>
              <HomeIcon color="#ffffff" hoverColor="rgba(20,192,11,1) " onTouchTap={()=> this.handleNav("/")}/>
            </div>

            <div style={hBlock3IconsLR}>
              <FavoriteBorderIcon color="#ffffff" hoverColor="rgba(20,192,11,1)" onTouchTap={()=> this.handleNav("/donate")}/>
            </div>

          </div>
        </nav>
      </div>

    );
  }
}

TopHeader.contextTypes = {
  router: React.PropTypes.object
}

export default TopHeader;
