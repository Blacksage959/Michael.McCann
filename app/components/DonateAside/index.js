/**
*
* DonateAside
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import {Link} from "react-router";

class DonateAside extends React.PureComponent {

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {



    const donateAshape={
      width:"10%",
      height:"5%",
      backgroundColor:"rgba(150,255,150,.4)",
      position:"fixed",
      bottom:"50%",
      right:"0",
      borderRadius:"35px 0 0 35px",
      border:".5px dotted red",
      padding:"auto",




    }

    return (
      <FlatButton style={donateAshape} onTouchTap={()=> this.handleNav("/donate")}>
        <FavoriteBorderIcon color="red"/>
        Donate
      </FlatButton>
    );
  }

}
DonateAside.contextTypes = {
  router: React.PropTypes.object
}

export default DonateAside;
