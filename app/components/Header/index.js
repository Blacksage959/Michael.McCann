 /**
*
* Header
*
*/

import React from 'react';
import TopHeader from 'components/Header/TopHeader';
import BottomHeader from 'components/Header/BottomHeader';
import HeaderMobile from 'components/HeaderMobile';
import Responsive from 'react-responsive';

class Header extends React.PureComponent {
  render() {
    const headerStyle={
      height:"150px",
      display:"flex",
      width:"100%",
      background:"linear-gradient(rgba(100,255,100,1),rgba(150,255,150,1))",
      justifyContent:"center",
      borderBottom:"solid green 1px",
      position:"fixed",
      top:"0",
      zIndex:"99999",


    }
    const headerMaxWidth={
      display:"flex",
      flexDirection:"column",
      maxWidth:"1200px",
      background:"rgba(3,255,3,0)",
      height:"150px",
      width:"100%",
    }
    return (

      <div>

      <Responsive minDeviceWidth={660}>
      <div style={headerStyle}>
        <div style={headerMaxWidth}>
          <TopHeader/>
          <BottomHeader/>
        </div>
      </div>
      </Responsive>

      <Responsive maxDeviceWidth={659}>
        <HeaderMobile/>
      </Responsive>

      </div>


    );
  }
}

export default Header;
