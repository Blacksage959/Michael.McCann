/**
*
* BckgGallery
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import {GridList, GridTile} from 'material-ui/GridList';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';

import OurPeopleGallery from 'components/OurPeopleGallery';
import DeforestationGallery from 'components/DeforestationGallery';

class BckgGallery extends React.PureComponent {
  render() {

    const pushTop={
      marginTop:"150px",
    }

    return (
      <div>
        <Header/>
        <div style={pushTop}>
        <OurPeopleGallery/>
        <DeforestationGallery/>

        <GridList cols={10} padding={1}>

          <GridTile cols={4} rows={2}>
            <img src="https://d.ibtimes.co.uk/en/full/1429656/smog-paris.jpg"/>
          </GridTile>

          <GridTile cols={2} rows={2}>
            <img src="https://s-media-cache-ak0.pinimg.com/originals/e2/2d/f1/e22df1b176158029fc7ae842c288a885.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={2}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Kuwait_burn_oilfield.png"/>
          </GridTile>

          <GridTile cols={3} rows={2}>
            <img src="https://static01.nyt.com/images/2016/11/20/magazine/20mag-mosul-ss-slide-08XS/20mag-mosul-ss-slide-08XS-superJumbo.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={2}>
            <img src="http://images2.onionstatic.com/onion/5034/6/16x9/1200.jpg"/>
          </GridTile>

          <GridTile cols={3} rows={2}>
            <img src="http://www.trbimg.com/img-53759751/turbine/la-me-0516-oil-spill-20140516"/>
          </GridTile>

          <GridTile cols={6} rows={3}>
            <img src="http://static.guim.co.uk/sys-images/Guardian/About/General/2010/6/14/1276501809253/Delicate-patterns-in-the--004.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={3}>
            <img src="https://s-media-cache-ak0.pinimg.com/originals/37/70/8c/37708c5deb7237272d1cb018c58e07ae.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={3}>
            <img src="https://serbiananimalsvoice.files.wordpress.com/2016/10/burger-king2.jpg"/>
          </GridTile>

          <GridTile cols={6} rows={3}>
            <img src="http://images.medicaldaily.com/sites/medicaldaily.com/files/2013/08/04/0/68/6810.jpg"/>
          </GridTile>

          <GridTile cols={10} rows={4}>
            <img src="http://d3i6fh83elv35t.cloudfront.net/newshour/wp-content/uploads/2014/03/Exxon_bird.jpg"/>
          </GridTile>

        </GridList>

        <Footer/>
       </div>
      </div>
    );
  }
}

export default BckgGallery;
