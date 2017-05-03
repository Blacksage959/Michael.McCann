/*
 *
 * DonateContainer
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';
import Responsive from 'react-responsive';
import DeforestationGallery from 'components/DeforestationGallery';

export default class DonateContainer extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    donate:"",
    body:"",
   }
  }

  handleDonate = (event) => {
    this.setState({
      donate:event.target.value
    })

  }

  handleBody = (event) => {
    this.setState({
      body:event.target.value
    })
  }


  donate = () => {
    var data = new FormData();
    data.append("donate",this.state.donate);
    data.append("body",this.state.body);



    fetch("http://owlversee.com/api/donate",{
      method:"post",
      body:data

    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.success) {
        alert(json.success);

      }
    else if(json.error) {
      alert(json.error);
     }
    })
  }


  render() {
    const donateENV={
      height:"auto ",
      width:"100%",
      backgroundColor:"rgba(3,150,3,.3)",
      padding:"10%",
      justifyContent:"center"

    }

    const donateForm={
      background:"radial-gradient(rgba(150,255,150,1),rgba(100,255,100,1))",
      display:"flex",
      flexDirection:"column",
      padding:"5%",
      boxShadow:"0 0 20px 5px rgba(0,0,0,0.4)",
      borderRadius:"2px",
      marginTop:"6%",




    }
    const formBoxColor={

      height:"auto",
      width:"100%",
      backgroundColor:"rgba(220,255,220,1)",
      marginBottom:"1%",
      border:"1px solid green",
      maxHeight:"500px",
      overflow:"hidden",
      padding:"10px"
    }
    const formTitle={
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

    const formTitleM={
      fontSize:"2em",
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

    const formTitle2={
      fontSize:"2em",
      textAlign:"center",
      fontWeight:"bold",

      fontFamily:"Lato",
      color:"green",
      textShadow:"1px 1px 5px green",


    }

    const formTitle3={
      fontSize:"1.5em",
      textAlign:"center",
      fontWeight:"bold",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      marginTop:"-1px",

    }
    const formTitle4={
      fontSize:"1.2em",
      textAlign:"center",
      fontWeight:"bold",

      fontFamily:"Lato",
      color:"darkgreen",



    }

    const title3={
      fontSize:"1.5em",
      textAlign:"center",
      fontWeight:"bold",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      marginTop:"-30px",


    }
    const title4={
      fontSize:"1.2em",
      textAlign:"center",
      fontWeight:"bold",

      fontFamily:"Lato",
      color:"darkgreen",
      marginTop:"-7px",


    }

    const pushTop={
      marginTop:"150px",
    }
    const pushTop2={
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
      lineHeight:"2em"

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

return (
      <div>
        <Helmet title="DonateContainer" meta={[ { name: 'description', content: 'Description of DonateContainer' }]}/>

        <Responsive minDeviceWidth={500}>
          <Header/>
          <div style={pushTop2}>
            <DeforestationGallery/>
            <div style={fixedPaper}>

              <h1 style={formTitle}>DONATE</h1>
              <h2 style={formTitle2}>Every little bit helps.</h2>

              <input style={formBoxColor} onChange={this.handleDonate}  type="text" placeholder="35 usd"/>
              <input style={formBoxColor} onChange={this.handleBody}  type="text" placeholder="Why are you giving today?"/>
              <input style={formBoxColor} onTouchTap={this.donate} type="submit"/>

              <h6 style={title4}>At GreenWorx, we spend every dollar raised torwards the benefit of humankind globally. Make a difference today.</h6>
              <h4 style={title3}>For detailed finance report, just email us. Well be happy to disclose.</h4>



            </div>
          </div>
          <Footer/>
        </Responsive>

        <Responsive maxDeviceWidth={499}>
          <Header/>
              <div style={pushTop2}>
                <DeforestationGallery/>
                  <div style={fixedPaper2}>
                    <h1 style={formTitleM}>DONATE</h1>
                    <h2 style={formTitle2}>Every little bit helps.</h2>


                    <input style={formBoxColor} onChange={this.handleDonate}  type="text" placeholder="35 usd"/>
                    <input style={formBoxColor} onChange={this.handleBody}  type="text" placeholder="Why are you giving today?"/>
                    <input style={formBoxColor} onTouchTap={this.donate} type="submit"/>

                    <h4 style={formTitle3}>For detailed finance report, just email us. Well be happy to disclose.</h4>


              </div>
            </div>
          <Footer/>
        </Responsive>






      </div>
    );
  }
}
