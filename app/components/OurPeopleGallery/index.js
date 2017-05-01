/**
*
* OurPeopleGallery
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import {GridList, GridTile} from 'material-ui/GridList';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';
import Responsive from 'react-responsive';

class OurPeopleGallery extends React.PureComponent {
  render() {

    const flexImg={
      height:"100%",
      width:"100%",

    }

    return (
      <div>

        <Responsive minDeviceWidth={800}>
        <GridList cols={10} padding={1}>

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="https://carrperspectives.files.wordpress.com/2010/07/thick_oil_reaches_shore_line_hr.jpg"/>
          </GridTile>

          <GridTile cols={2} rows={2}>
            <img style={flexImg} src="http://d2fbmjy3x0sdua.cloudfront.net/sites/default/files/styles/wysiwyg_slide/public/zduck1969.jpg?itok=7pLEb0PH"/>
          </GridTile>

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="http://nnimgt-a.akamaihd.net/transform/v1/crop/frm/storypad-36mDshx2U2dAuMR3XyjpW6R/54bc9780-4b94-47a2-8ade-2154398764e9.jpg/r0_3_1200_678_w1200_h678_fmax.jpg"/>
          </GridTile>

          <GridTile cols={3} rows={2}>
            <img style={flexImg} src="https://i2.wp.com/blog.cifor.org/wp-content/uploads/2016/06/22164936719_f52c2fa0c6_k.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="http://www.iccaconsortium.org/wp-content/uploads/Palawan-planting-upland-rice.jpg.jpg"/>
          </GridTile>

          <GridTile cols={3} rows={2}>
            <img style={flexImg} src="https://pbs.twimg.com/media/CqK5WFoWAAAgFFM.jpg"/>
          </GridTile>

          <GridTile cols={6} rows={3}>
            <img style={flexImg} src="https://thumbs-media.smithsonianmag.com/filer/ec/f8/ecf8a007-688b-4249-8dcf-f3c17724ee9d/soldiers-oil-spill-mythology.jpg__800x450_q85_crop_upscale.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={3}>
            <img style={flexImg} src="https://cdn.theatlantic.com/assets/media/img/photo/2014/03/the-exxon-valdez-oil-spill-25-years-ago-today/v03_90411025/main_1200.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={3}>
            <img style={flexImg} src="http://d2ouvy59p0dg6k.cloudfront.net/img/original/wwf_rougier_collaboration_update.jpg"/>
          </GridTile>

          <GridTile cols={6} rows={3}>
            <img style={flexImg} src="https://www.rainforest-rescue.org/uploads/photos/base/kind-baum-kennedy-paiter-surui.jpg"/>
          </GridTile>

          <GridTile cols={10} rows={4}>
            <img style={flexImg} src="http://www.usaconservation.org/wordpress/wp-content/uploads/2015/09/IMG_8718.jpg	"/>
          </GridTile>

        </GridList>
        </Responsive>

      <Responsive maxDeviceWidth={799}>
        <GridList cols={10} padding={1}>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="https://carrperspectives.files.wordpress.com/2010/07/thick_oil_reaches_shore_line_hr.jpg"/>
          </GridTile>

        <GridTile cols={5} rows={3}>
            <img style={flexImg} src="http://d2fbmjy3x0sdua.cloudfront.net/sites/default/files/styles/wysiwyg_slide/public/zduck1969.jpg?itok=7pLEb0PH"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="http://nnimgt-a.akamaihd.net/transform/v1/crop/frm/storypad-36mDshx2U2dAuMR3XyjpW6R/54bc9780-4b94-47a2-8ade-2154398764e9.jpg/r0_3_1200_678_w1200_h678_fmax.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="https://i2.wp.com/blog.cifor.org/wp-content/uploads/2016/06/22164936719_f52c2fa0c6_k.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="http://www.iccaconsortium.org/wp-content/uploads/Palawan-planting-upland-rice.jpg.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="https://pbs.twimg.com/media/CqK5WFoWAAAgFFM.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="https://thumbs-media.smithsonianmag.com/filer/ec/f8/ecf8a007-688b-4249-8dcf-f3c17724ee9d/soldiers-oil-spill-mythology.jpg__800x450_q85_crop_upscale.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="https://cdn.theatlantic.com/assets/media/img/photo/2014/03/the-exxon-valdez-oil-spill-25-years-ago-today/v03_90411025/main_1200.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="http://d2ouvy59p0dg6k.cloudfront.net/img/original/wwf_rougier_collaboration_update.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="https://www.rainforest-rescue.org/uploads/photos/base/kind-baum-kennedy-paiter-surui.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={3}>
            <img style={flexImg} src="http://www.usaconservation.org/wordpress/wp-content/uploads/2015/09/IMG_8718.jpg	"/>
          </GridTile>

        </GridList>

      </Responsive>
    </div>
    );
  }
}

export default OurPeopleGallery;
