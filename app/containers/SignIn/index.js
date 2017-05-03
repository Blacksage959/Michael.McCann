/*
 *
 * SignIn
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

export default class SignIn extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    email:"",
    pass:"",
   }
  }

  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })

  }

  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })

  }

  signin = () => {
    var data = new FormData();
    data.append("email",this.state.email);
    data.append("password",this.state.password);



    fetch("http://owlversee.com/api/signin",{
      method:"post",
      body:data

    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.token !== false) {
        sessionStorage.setItem('token',json.token);
        alert("Welcome back.");
      }
    else if(json.token === false){
      alert("Invalid Credentials");
    }
    else if(json.error) {
      alert(json.error);
     }

    })
  }

  render() {
    const signinENV={
      height:"auto",
      width:"100%",
      backgroundColor:"rgba(3,150,3,.3)",
      padding:"10%",
      justifyContent:"center"
    }

    const signinForm={
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



    return (

      <div>
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

        <Responsive minDeviceWidth={500}>
          <Header/>
          <DonateAside/>
          <div style={pushTop2}>
            <DeforestationGallery/>
              <div style={fixedPaper}>

                <h1 style={formTitle}>SIGN IN</h1>
                <h2 style={formTitle2}>Great to see you again.</h2>

                <input style={formBoxColor} onChange={this.handleEmail}  type="text" placeholder="Email"/>
                <input style={formBoxColor} onChange={this.handlePassword}  type="text" placeholder="Password"/>
                <input style={formBoxColor} onTouchTap={this.signin} type="submit"/>

                <h6 style={formTitle3}>Read our most recent articles and share your experiences. We want to hear from you.</h6>
              </div>
          </div>
          <Footer/>
        </Responsive>


        <Responsive maxDeviceWidth={499}>
          <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>
            <Header/>
            <DonateAside/>

              <div style={pushTop2}>
                <DeforestationGallery/>
                  <div style={fixedPaper2}>
                    <h1 style={formTitleM}>SIGN IN</h1>
                    <h2 style={formTitle2}>Great to see you again.</h2>



                    <input style={formBoxColor} onChange={this.handleEmail}  type="text" placeholder="Email"/>
                    <input style={formBoxColor} onChange={this.handlePassword}  type="text" placeholder="Password"/>
                    <input style={formBoxColor} onTouchTap={this.signin} type="submit"/>

                    <h6 style={title3}>Read our most recent articles and share your experiences. We want to hear from you.</h6>
                  </div>
                 </div>
                <Footer/>
        </Responsive>




  </div>

    );
  }
}
