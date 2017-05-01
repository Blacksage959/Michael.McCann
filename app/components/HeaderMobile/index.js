/**
*
* HeaderMobile
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import CallIcon from 'material-ui/svg-icons/communication/call';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router";
import FlatButton from 'material-ui/FlatButton';


class HeaderMobile extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {
    const headerBackground={
      width:"100%",
      height:"125px",
      display:"flex",
      flexDirection:"row",
      background:"linear-gradient( rgba(150,255,150,1),rgba(100,255,100,1))",
      position:"fixed",
      top:"0",
      zIndex:"99999",
      borderBottom:"solid green 1px",
    }
    const burger={
      height:"100%",
      width:"20%",
      border:"none",
      justifyContent:"center",
      backgroundColor:"none",


    }
    const burgerBox={
      height:"40px",
      width:"40px",
      border:"none",
      marginLeft:"40%",
      marginTop:"45px",
      backgroundColor:"lightgreen",
      padding:"8px",
      borderRadius:"20px",
      boxShadow:"0 0 10px 1px rgba(0,0,0,0.4)"


    }
    const name={
      height:"100%",
      width:"60%",
      justifyContent:"center"

    }
    const nameBox={
      height:"95%",
      width:"95%",
      border:"none",
      textAlign:"center",
      fontSize:"4em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(220,255,220,1)",
      textShadow:"3px 3px 5px green",
      margin:"auto",
      marginTop:"3px",

    }
    const nameBox2={
      height:"95%",
      width:"100%",
      border:"none",
      textAlign:"center",
      fontSize:"2.7em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(220,255,220,1)",
      textShadow:"3px 3px 5px green",

      paddingTop:"10px",


    }

    const icons={
      height:"100%",
      width:"15%",
      border:"none",
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"space-around",
      padding:"2%",
      backgroundColor:"none"


    }
    const iconsCont={
      height:"30px",
      width:"30px",
      border:"none",
      margin:"auto",
      borderRadius:"15px",
      backgroundColor:"lightgreen",
      padding:"3px",
      boxShadow:"0 0 10px 1px rgba(0,0,0,0.4)"

    }
  return (
    <div>

    <Responsive minDeviceWidth={501}>
      <div style={headerBackground}>
        <div style={burger}>
          <div style={burgerBox}>

            <FilterListIcon color="white" hoverColor="rgba(20,192,11,1)"
            onTouchTap={this.handleToggle}/>

            <Drawer
              docked={false}
              width={200}
              containerStyle={{background:"linear-gradient( rgba(220,255,220,1),rgba(200,255,200,.1))"}}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}>

              <MenuItem onTouchTap={this.handleClose} primaryText="Sign In" containerElement={<Link to="/signin"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Sign Up" containerElement={<Link to="/signup"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="About Us" containerElement={<Link to="/About"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Our Worx" containerElement={<Link to="/ourworx"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Your Worx" containerElement={<Link to="/yourworx"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Gallery" containerElement={<Link to="/gallery"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Contact" containerElement={<Link to="/contact"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Donate" containerElement={<Link to="/donate"></Link>}/>
            </Drawer>
          </div>
        </div>

        <div style={name}>
          <FlatButton style={nameBox}  rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/")}>GreenWorx</FlatButton>
        </div>
        <div style={icons}>
          <div style={iconsCont}>
            <CallIcon color="rgba(220,255,220,1)" hoverColor="rgba(20,192,11,1)" onTouchTap={()=> this.handleNav("/contact")} />
          </div>
          <div style={iconsCont}>
            <FavoriteBorderIcon color="rgba(220,255,220,1)" hoverColor="red" onTouchTap={()=> this.handleNav("/donate")}/>
          </div>
          <div style={iconsCont}>
            <HomeIcon color="rgba(220,255,220,1)" hoverColor="rgba(20,192,11,1)" onTouchTap={()=> this.handleNav("/")}/>
          </div>
        </div>
      </div>
    </Responsive>

    <Responsive maxDeviceWidth={500}>
      <div style={headerBackground}>
        <div style={burger}>
          <div style={burgerBox}>

            <FilterListIcon color="white" hoverColor="rgba(20,192,11,1)"
            onTouchTap={this.handleToggle}/>

            <Drawer
              docked={false}
              width={200}
              containerStyle={{background:"linear-gradient( rgba(220,255,220,1),rgba(200,255,200,.5))"}}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}>

              <MenuItem onTouchTap={this.handleClose} primaryText="Sign In" containerElement={<Link to="/signin"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Sign Up" containerElement={<Link to="/signup"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="About Us" containerElement={<Link to="/About"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Our Worx" containerElement={<Link to="/ourworx"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Your Worx" containerElement={<Link to="/yourworx"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Gallery" containerElement={<Link to="/gallery"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Contact" containerElement={<Link to="/contact"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Donate" containerElement={<Link to="/donate"></Link>}/>

            </Drawer>
          </div>
        </div>

        <div style={name}>
          <FlatButton style={nameBox2} rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/")}>GreenWorx</FlatButton>
        </div>
        <div style={icons}>
          <div style={iconsCont}>
            <CallIcon color="rgba(220,255,220,1)" hoverColor="rgba(20,192,11,1)" onTouchTap={()=> this.handleNav("/contact")} />
          </div>
          <div style={iconsCont}>
            <FavoriteBorderIcon color="rgba(220,255,220,1)" hoverColor="red" onTouchTap={()=> this.handleNav("/donate")}/>
          </div>
          <div style={iconsCont}>
            <HomeIcon color="rgba(220,255,220,1)" hoverColor="rgba(20,192,11,1)" onTouchTap={()=> this.handleNav("/")}/>
          </div>
        </div>
      </div>
    </Responsive>

    </div>

    );
  }
}
HeaderMobile.contextTypes = {
  router: React.PropTypes.object
}
export default HeaderMobile;
