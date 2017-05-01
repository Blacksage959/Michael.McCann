/**
*
* BottomHeader
*
*/

import React from 'react';
import {Link} from "react-router";
import FlatButton from 'material-ui/FlatButton';

class BottomHeader extends React.PureComponent {

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {

    const bottomHeader={
      height:"50px",
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",



    }
    const bttmHeaderBlock={
      width:"20% !important",
      height:"45px",
      background:"none",
      textAlign:"center",
      marginTop:"2px",
      marginBottom:"2px",
      fontSize:"2em",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"1px 1px 5px green",
      textDecoration:"none",
    }

  return (


      <nav style={bottomHeader}>
        <FlatButton  style={bttmHeaderBlock} rippleColor="rgba(0,225,0,.7)"  onTouchTap={()=> this.handleNav("/About")}>About</FlatButton>

        <FlatButton  style={bttmHeaderBlock} rippleColor="rgba(0,225,0,.7)"  onTouchTap={()=> this.handleNav("/ourworx")}>Our Worx</FlatButton>

        <FlatButton  style={bttmHeaderBlock} rippleColor="rgba(0,225,0,.7)"  onTouchTap={()=> this.handleNav("/yourworx")}>Your Worx</FlatButton>

        <FlatButton  style={bttmHeaderBlock} rippleColor="rgba(0,225,0,.7)"  onTouchTap={()=> this.handleNav("/gallery")}>Gallery</FlatButton>

        <FlatButton  style={bttmHeaderBlock} rippleColor="rgba(0,225,0,.7)"  onTouchTap={()=> this.handleNav("/donate")}>Donate</FlatButton>

      </nav>
    );
  }

  }
  BottomHeader.contextTypes = {
    router: React.PropTypes.object
}




export default BottomHeader;
