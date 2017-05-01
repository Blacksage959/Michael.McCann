/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import BckgGallery from 'components/BckgGallery';
import OurPeopleGallery from 'components/OurPeopleGallery';
import DeforestationGallery from 'components/DeforestationGallery';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';
import Responsive from 'react-responsive';
import DonateAside from 'components/DonateAside';

export default class About extends React.PureComponent {
  render() {
    const pushTop={
      marginTop:"125px",
    }

    const fixedPaper={
      width:"500px",
      height:"auto",
      background:"radial-gradient(rgba(150,255,150,1),rgba(100,255,100,1))",
      position:"fixed",
      top:"0",
      left:"0",
      right:"0",
      margin:"0 auto",
      marginTop:"225px",
      textAlign:"center",
      padding:"40px",
      boxShadow:"0 0 15px 10px rgba(0,0,0,0.4)",
      borderRadius:"2px",
      lineHeight:"3em"

    }

    const fixedPaper2={

      width:"295px",
      height:"auto",
      maxHeight:"500px",
      background:"radial-gradient(rgba(150,255,150,1),rgba(100,255,100,1))",
      position:"fixed",
      top:"0",
      left:"0",
      right:"0",
      margin:"0 auto",
      marginTop:"150px",
      textAlign:"center",
      padding:"1px",
      boxShadow:"0 0 7px 5px rgba(0,0,0,0.4)",
      borderRadius:"2px",
      lineHeight:"1em",
      padding:"3%",


    }


    const pushTop2={
      marginTop:"90px",
    }

    const mainTitle={
      fontSize:"3em",
      fontWeight:"strong",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      borderRight:"10px solid green",
      borderLeft:"10px solid green",
      letterSpacing:".4em",
      paddingLeft:"5%"

    }
    const majPoints={
      textDecoration:"underline",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(200,255,200,1)",
      textShadow:"2px 2px 5px green",
    }

    const aboutPoints={
      color:"rgba(0,150,0,1)",
    }

    const mainTitle2={
      fontSize:"1em",
      fontWeight:"strong",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      borderRight:"3px solid green",
      borderLeft:"3px solid green",
      letterSpacing:"1em",
      paddingLeft:"5%"

    }
    const majPoints2={
      textDecoration:"underline",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(200,255,200,1)",
      textShadow:"2px 2px 5px green",
      fontSize:".9em",
      letterSpacing:".3em",
    }

    const aboutPoints2={
      color:"rgba(0,150,0,1)",
      fontSize:".8em",
    }


    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

          <Responsive minDeviceWidth={500}>
            <Header/>
            <DonateAside/>
            <div style={pushTop}>
              <DeforestationGallery/>
                <div style={fixedPaper}>
                  <h1 style={mainTitle} >ABOUT</h1>
                  <h2 style={majPoints}>Mission</h2>
                  <p style={aboutPoints}>We strive to end pollution globally thru volunteer efforts and policy reformation.</p>

                    <h2 style={majPoints}>Impact</h2>
                    <p style={aboutPoints}>It's our goal to reach every person and every foot of land that is effected by the negligence of our corporate world.</p>

                      <h2 style={majPoints}>Unity</h2>
                      <p style={aboutPoints}>It's everyone's world and we can only take care of it as a team. Lets unite and make a difference today.</p>
                </div>
            </div>
            <Footer/>
          </Responsive>

          <Responsive maxDeviceWidth={499}>
            <Header/>
            <DonateAside/>
            <div style={pushTop2}>
              <DeforestationGallery/>
                <div style={fixedPaper2}>
                  <h1 style={mainTitle2} >ABOUT</h1>
                  <h2 style={majPoints2}>Mission</h2>
                  <p style={aboutPoints2}>We strive to end pollution globally thru volunteer efforts and policy reformation.</p>

                    <h2 style={majPoints2}>Impact</h2>
                    <p style={aboutPoints2}>It's our goal to reach every person and every foot of land that is effected by the negligence of our corporate world.</p>

                      <h2 style={majPoints2}>Unity</h2>
                      <p style={aboutPoints2}>It's everyone's world and we can only take care of it as a team. Lets unite and make a difference today.</p>

                </div>
            </div>
            <Footer/>
          </Responsive>

      </div>
    );
  }
}
