/*
 *
 * ContactContainer
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';
import Responsive from 'react-responsive';
import DeforestationGallery from 'components/DeforestationGallery';
import DonateAside from 'components/DonateAside';

export default class ContactContainer extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    email:"",
    name:"",
    number:"",
    body:"",
   }
  }

  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })

  }


  storeContact = () => {
    var data = new FormData();
    data.append("Name",this.state.name);
    data.append("Email",this.state.email);
    data.append("Number",this.state.number);
    data.append("Body",this.state.body);




    fetch("http://localhost:8000/api/storeContact",{
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

    const contactENV={
      height:"auto",
      width:"100%",
      backgroundColor:"rgba(3,150,3,.3)",
      padding:"10%",
      justifyContent:"center"

    }

    const contactForm={
      background:"radial-gradient(rgba(150,255,150,1),rgba(100,255,100,1))",
      display:"flex",
      flexDirection:"column",
      padding:"5%",
      boxShadow:"0 0 20px 5px rgba(0,0,0,0.4)",
      borderRadius:"2px",
      marginTop:"6%"


    }
    const formBoxColor={

      height:"auto",
      width:"100%",
      backgroundColor:"rgba(220,255,220,1)",
      marginBottom:"3%",
      border:"1px solid green",
      maxHeight:"500px",
      overflow:"hidden",
      padding:"10"
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
      marginTop:"-10px",


    }
    const formTitle4={
      fontSize:"1.2em",
      textAlign:"center",
      fontWeight:"bold",

      fontFamily:"Lato",
      color:"darkgreen",
      marginTop:"-10px",



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
      padding:"20px",
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
        <Helmet title="ContactContainer" meta={[ { name: 'description', content: 'Description of ContactContainer' }]}/>

        <Responsive minDeviceWidth={500}>
          <Header/>
          <DonateAside/>
          <div style={pushTop2}>
            <DeforestationGallery/>
            <div style={fixedPaper}>
              <h1 style={formTitle}>CONTACT</h1>
              <h2 style={formTitle2}>How are we doing?</h2>
          <input style={formBoxColor} onChange={this.handleEmail}  type="text" placeholder="Email"/>
          <input style={formBoxColor} onChange={this.handleName}  type="text" placeholder="Name"/>
          <input style={formBoxColor} onChange={this.handleNumber}  type="text" placeholder="Number"/>
          <input style={formBoxColor} onChange={this.handleBody}  rows="5" placeholder="What would you like us to know?"/>
          <input style={formBoxColor} onTouchTap={this.storeArticle} type="submit" label="Send"/>
              <h6 style={formTitle3}>WANT TO CHAT?<br/>call us at 1.999.765.9876</h6>
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
                <h1 style={formTitleM}>CONTACT</h1>
                <h2 style={formTitle2}>How are we doing?</h2>

                <input style={formBoxColor} onChange={this.handleEmail}  type="text" placeholder="Email"/>
                <input style={formBoxColor} onChange={this.handleName}  type="text" placeholder="Name"/>
                <input style={formBoxColor} onChange={this.handleNumber}  type="text" placeholder="Number"/>
                <input style={formBoxColor} onChange={this.handleBody}  rows="5" placeholder="What would you like us to know?"/>
                <input style={formBoxColor} onTouchTap={this.storeArticle} type="submit" label="Send"/>

              <p style={formTitle4}>WANT TO CHAT?<br/>Call Us at 1.999.765.9876</p>


            </div>
          </div>
          <Footer/>
        </Responsive>




    </div>


    );
  }
}
