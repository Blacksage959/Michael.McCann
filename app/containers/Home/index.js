/*
 *
 * Hope
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';

import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';

import DonateAside from 'components/DonateAside';

import MainSearch from 'components/MainSearch';
import MainSearchMobile from 'components/MainSearchMobile';

import MTrend from 'components/MTrend';
import Mtrend2 from 'components/Mtrend2';

import MtrendMobile from 'components/MtrendMobile';
import MTMFillMobile2 from 'components/MTMFillMobile/MTMFillMobile2';
import Mt2Mobile from 'components/Mt2Mobile';

import Footer from 'components/Footer';
import FooterMobile from 'components/FooterMobile';
import TextField from 'material-ui/TextField';



export default class Home extends React.PureComponent {
  render() {

    const finalFootCopy={
      width:"100%",
      height:"80px",
      textAlign:"center",
      background:"rgba(3,255,3,.4)",
      fontSize:"1.25em",
      fontWeight:"none",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"white",
      textShadow:"1px 1px 5px green",
  }




    return (

      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

          <Responsive minDeviceWidth={1021}>
              <Header/>
              <MainSearch/>
              <DonateAside/>
              <MTrend/>
              <Mtrend2/>
              <Footer/>

          </Responsive>

          <Responsive maxDeviceWidth={1020}>
              <Header/>
              <DonateAside/>
              <MainSearchMobile/>
              <MTMFillMobile2/>
              <MtrendMobile/>
              <Mt2Mobile/>
              <Footer/>
          </Responsive>

      </div>
    );
  }
}
