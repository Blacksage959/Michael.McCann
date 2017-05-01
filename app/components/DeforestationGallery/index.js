/**
*
* DeforestationGallery
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import {GridList, GridTile} from 'material-ui/GridList';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';
import Responsive from 'react-responsive';

class DeforestationGallery extends React.PureComponent {
  render() {
    const flexImg={
      height:"100%",
      width:"100%",

    }

    return (
      <div>

        <Responsive minDeviceWidth={1000 }>
        <GridList cols={10} padding={1}>

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="http://nnimgt-a.akamaihd.net/transform/v1/crop/frm/storypad-36mDshx2U2dAuMR3XyjpW6R/54bc9780-4b94-47a2-8ade-2154398764e9.jpg/r0_3_1200_678_w1200_h678_fmax.jpg"/>
          </GridTile>

          <GridTile cols={2} rows={2}>
            <img style={flexImg} src="https://www.albertaoilmagazine.com/wp-content/uploads/2010/12/pipeline.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="http://celdf.org/wp-content/uploads/2015/08/pipeline-2.jpg"/>
          </GridTile>

          <GridTile cols={3} rows={2}>
            <img style={flexImg} src="http://images.dailykos.com/images/296351/story_image/Water_Protectors_marched_to_location_where_the_DAPL_bulldozed_burial_site_with_included_grave_markers.jpg?1473136999"/>
          </GridTile>

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="https://img.apmcdn.org/b3bae850b465cb85cf17c51bf09117ae05fdf9e9/widescreen/810a9d-20160913-pipelineprotest15.jpg"/>
          </GridTile>

          <GridTile cols={3} rows={2}>
            <img style={flexImg} src="http://ocularusa.com/uploads/posts/2017-02/148787648811600.jpeg"/>
          </GridTile>

          <GridTile cols={6} rows={3}>
            <img style={flexImg} src="http://dy00k1db5oznd.cloudfront.net/wp-content/uploads/2016/09/on-the-march_cc.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={3}>
            <img style={flexImg} src="https://tribkswb.files.wordpress.com/2017/02/gettyimages-627859562.jpg?quality=85&strip=all&w=1200"/>
          </GridTile>

          <GridTile cols={4} rows={3}>
            <img style={flexImg} src="http://www.mintpressnews.com/wp-content/uploads/2017/02/Oil-Pipeline_Muha-1.jpg"/>
          </GridTile>

          <GridTile cols={6} rows={3}>
            <img style={flexImg} src="http://media.spokesman.com/photos/2017/03/06/Oil_Pipeline.JPG_1B8PLPm_t1200.jpg?298603a24e8d51915fce203907ff2746e482a5a6"/>
          </GridTile>

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

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="https://d.ibtimes.co.uk/en/full/1429656/smog-paris.jpg"/>
          </GridTile>

          <GridTile cols={2} rows={2}>
            <img style={flexImg} src="https://s-media-cache-ak0.pinimg.com/originals/e2/2d/f1/e22df1b176158029fc7ae842c288a885.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="https://upload.wikimedia.org/wikipedia/commons/7/78/Kuwait_burn_oilfield.png"/>
          </GridTile>

          <GridTile cols={3} rows={2}>
            <img style={flexImg} src="https://static01.nyt.com/images/2016/11/20/magazine/20mag-mosul-ss-slide-08XS/20mag-mosul-ss-slide-08XS-superJumbo.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={2}>
            <img style={flexImg} src="http://images2.onionstatic.com/onion/5034/6/16x9/1200.jpg"/>
          </GridTile>

          <GridTile cols={3} rows={2}>
            <img style={flexImg} src="http://www.trbimg.com/img-53759751/turbine/la-me-0516-oil-spill-20140516"/>
          </GridTile>

          <GridTile cols={6} rows={3}>
            <img style={flexImg} src="http://static.guim.co.uk/sys-images/Guardian/About/General/2010/6/14/1276501809253/Delicate-patterns-in-the--004.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={3}>
            <img style={flexImg} src="https://s-media-cache-ak0.pinimg.com/originals/37/70/8c/37708c5deb7237272d1cb018c58e07ae.jpg"/>
          </GridTile>

          <GridTile cols={4} rows={3}>
            <img style={flexImg} src="https://serbiananimalsvoice.files.wordpress.com/2016/10/burger-king2.jpg"/>
          </GridTile>

          <GridTile cols={6} rows={3}>
            <img style={flexImg} src="http://images.medicaldaily.com/sites/medicaldaily.com/files/2013/08/04/0/68/6810.jpg"/>
          </GridTile>

          <GridTile cols={10} rows={4}>
            <img style={flexImg} src="http://d3i6fh83elv35t.cloudfront.net/newshour/wp-content/uploads/2014/03/Exxon_bird.jpg"/>
          </GridTile>

        </GridList>
        </Responsive>

        <Responsive maxDeviceWidth={999}>
        <GridList cols={10} padding={1}>
          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://nnimgt-a.akamaihd.net/transform/v1/crop/frm/storypad-36mDshx2U2dAuMR3XyjpW6R/54bc9780-4b94-47a2-8ade-2154398764e9.jpg/r0_3_1200_678_w1200_h678_fmax.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://www.albertaoilmagazine.com/wp-content/uploads/2010/12/pipeline.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://celdf.org/wp-content/uploads/2015/08/pipeline-2.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://images.dailykos.com/images/296351/story_image/Water_Protectors_marched_to_location_where_the_DAPL_bulldozed_burial_site_with_included_grave_markers.jpg?1473136999"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://img.apmcdn.org/b3bae850b465cb85cf17c51bf09117ae05fdf9e9/widescreen/810a9d-20160913-pipelineprotest15.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://ocularusa.com/uploads/posts/2017-02/148787648811600.jpeg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://dy00k1db5oznd.cloudfront.net/wp-content/uploads/2016/09/on-the-march_cc.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://tribkswb.files.wordpress.com/2017/02/gettyimages-627859562.jpg?quality=85&strip=all&w=1200"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://www.mintpressnews.com/wp-content/uploads/2017/02/Oil-Pipeline_Muha-1.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://media.spokesman.com/photos/2017/03/06/Oil_Pipeline.JPG_1B8PLPm_t1200.jpg?298603a24e8d51915fce203907ff2746e482a5a6"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://carrperspectives.files.wordpress.com/2010/07/thick_oil_reaches_shore_line_hr.jpg"/>
          </GridTile>

        <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://d2fbmjy3x0sdua.cloudfront.net/sites/default/files/styles/wysiwyg_slide/public/zduck1969.jpg?itok=7pLEb0PH"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://nnimgt-a.akamaihd.net/transform/v1/crop/frm/storypad-36mDshx2U2dAuMR3XyjpW6R/54bc9780-4b94-47a2-8ade-2154398764e9.jpg/r0_3_1200_678_w1200_h678_fmax.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://i2.wp.com/blog.cifor.org/wp-content/uploads/2016/06/22164936719_f52c2fa0c6_k.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://www.iccaconsortium.org/wp-content/uploads/Palawan-planting-upland-rice.jpg.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://pbs.twimg.com/media/CqK5WFoWAAAgFFM.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://thumbs-media.smithsonianmag.com/filer/ec/f8/ecf8a007-688b-4249-8dcf-f3c17724ee9d/soldiers-oil-spill-mythology.jpg__800x450_q85_crop_upscale.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://cdn.theatlantic.com/assets/media/img/photo/2014/03/the-exxon-valdez-oil-spill-25-years-ago-today/v03_90411025/main_1200.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://d2ouvy59p0dg6k.cloudfront.net/img/original/wwf_rougier_collaboration_update.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://www.rainforest-rescue.org/uploads/photos/base/kind-baum-kennedy-paiter-surui.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://www.usaconservation.org/wordpress/wp-content/uploads/2015/09/IMG_8718.jpg	"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://d.ibtimes.co.uk/en/full/1429656/smog-paris.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://s-media-cache-ak0.pinimg.com/originals/e2/2d/f1/e22df1b176158029fc7ae842c288a885.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://upload.wikimedia.org/wikipedia/commons/7/78/Kuwait_burn_oilfield.png"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://static01.nyt.com/images/2016/11/20/magazine/20mag-mosul-ss-slide-08XS/20mag-mosul-ss-slide-08XS-superJumbo.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://images2.onionstatic.com/onion/5034/6/16x9/1200.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://www.trbimg.com/img-53759751/turbine/la-me-0516-oil-spill-20140516"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://static.guim.co.uk/sys-images/Guardian/About/General/2010/6/14/1276501809253/Delicate-patterns-in-the--004.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://s-media-cache-ak0.pinimg.com/originals/37/70/8c/37708c5deb7237272d1cb018c58e07ae.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="https://serbiananimalsvoice.files.wordpress.com/2016/10/burger-king2.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://images.medicaldaily.com/sites/medicaldaily.com/files/2013/08/04/0/68/6810.jpg"/>
          </GridTile>

          <GridTile cols={5} rows={2}>
            <img style={flexImg} src="http://d3i6fh83elv35t.cloudfront.net/newshour/wp-content/uploads/2014/03/Exxon_bird.jpg"/>
          </GridTile>


        </GridList>

        </Responsive>
      </div>
    );
  }
}

export default DeforestationGallery;
