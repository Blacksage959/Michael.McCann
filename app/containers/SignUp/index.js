/*
 *
 * SignUp
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

export default class SignUp extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    username:"",
    password:"",
    email:"",
   }
  }

  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })

  }

  handleUsername = (event) => {
    this.setState({
      username:event.target.value
    })

  }

  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })

  }

  signup = () => {
    var data = new FormData();
    data.append("username",this.state.username);
    data.append("password",this.state.password);
    data.append("email",this.state.email);



    fetch("http://localhost:8000/api/signup",{
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
    const signupENV={
      height:"auto",
      width:"100%",
      backgroundColor:"rgba(3,150,3,.3)",
      padding:"10%",
      justifyContent:"center"

    }

    const signupForm={
      backgroundColor:"rgba(160,255,160,1)",
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


    }
    const title3={
      fontSize:"1.5em",
      textAlign:"center",
      fontWeight:"bold",

      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",

      textShadow:"2px 2px 5px green",
      marginTop:"-2px",


    }
    const formTitle4={
      fontSize:"1.2em",
      textAlign:"center",
      fontWeight:"bold",

      fontFamily:"Lato",
      color:"darkgreen",



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
    const pushTop={
      marginTop:"150px",
    }
    const pushTop2={
      marginTop:"125px",
    }
    return (
      <div>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>

        <Responsive minDeviceWidth={500}>
          <Header/>
          <DonateAside/>
          <div style={pushTop2}>
            <DeforestationGallery/>
              <div style={fixedPaper}>
                  <h1 style={formTitle}>SIGN UP</h1>
                  <h2 style={formTitle2}>The Earth will thank you.</h2>

                  <input style={formBoxColor}onChange={this.handleUsername}  type="text" placeholder="Username"/>
                  <input style={formBoxColor} onChange={this.handlePassword}  type="text" placeholder="Password"/>
                  <input style={formBoxColor} onChange={this.handleEmail}  type="text" placeholder="Email"/>
                  <input style={formBoxColor} onTouchTap={this.signup} type="submit"/>

                  <h4 style={formTitle3}>Mother Earth needs us more then ever.</h4>

              </div>
          </div>
          <Footer/>
        </Responsive>

        <Responsive maxDeviceWidth={499}>
          <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>
          <Header/>
          <DonateAside/>
            <div style={pushTop2}>
              <DeforestationGallery/>
                <div style={fixedPaper2}>
              <h1 style={formTitleM}>SIGN UP</h1>
              <h2 style={formTitle2}>The Earth will thank you.</h2>

                <input style={formBoxColor}onChange={this.handleUsername}  type="text" placeholder="Username"/>
                <input style={formBoxColor} onChange={this.handlePassword}  type="text" placeholder="Password"/>
                <input style={formBoxColor} onChange={this.handleEmail}  type="text" placeholder="Email"/>
                <input style={formBoxColor} onTouchTap={this.signup} type="submit"/>


                <h6 style={title3}>Mother Earth needs us more then ever.</h6>

            </div>
          </div>
          <Footer/>
        </Responsive>



    </div>




    );
  }
}
