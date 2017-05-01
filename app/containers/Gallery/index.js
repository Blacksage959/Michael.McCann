/*
 *
 * Gallery
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {GridList, GridTile} from 'material-ui/GridList';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';
import Responsive from 'react-responsive';

import OurPeopleGallery from 'components/OurPeopleGallery';
import DeforestationGallery from 'components/DeforestationGallery';
import BckgGallery from 'components/BckgGallery';
import DonateAside from 'components/DonateAside';

export default class Gallery extends React.PureComponent {
  render() {

    const galleryBox={
      height:"auto",
      width:"600px",
      display:"flex",
      flexWrap:"wrap",
      flexDirection:"row",

    }

    const pushTop={
      marginTop:"150px",
    }

    const pushTop2={
      marginTop:"125px",
    }

    const flexImg={
      height:"100%",
      width:"100%",

    }

    return (
      <div>

        <Helmet title="Gallery" meta={[ { name: 'description', content: 'Description of Gallery' }]}/>


                  <Responsive minDeviceWidth={900}>
                    <Header/>
                    <DonateAside/>
                    <div style={pushTop}>
                      <DeforestationGallery/>
                    </div>
                    <Footer/>
                  </Responsive>

                  <Responsive maxDeviceWidth={899}>
                    <Header/>
                    <DonateAside/>
                    <div style={pushTop2}>
                      <DeforestationGallery/>
                    </div>
                    <Footer/>
                  </Responsive>


  </div>
    );
  }
}
