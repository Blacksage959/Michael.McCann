/*
 *
 * OurWorxContainer
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Responsive from 'react-responsive';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';

import DonateAside from 'components/DonateAside';

export default class OurWorxContainer extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      articles:[]
    }
  }

  componentWillMount(){
    fetch("http://owlversee.com/api/getArticles")
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        articles:json
      })
    }.bind(this))

  }


  render() {
    const mainStyle={
      maxHeight:"700px",
      width:"100%",
      marginTop:"150px",
      position:"relative",
      overflow:"hidden",

    }
    const mainStyle2={
      maxHeight:"700px",
      width:"100%",
      marginTop:"125px",
      position:"relative",
      overflow:"hidden",

    }
    const mainImg={
      width:"100%",
      height:"auto"

    }
    const imgText={


      height:"300px",
      backgroundColor:"rgba(0,0,0,0)",
      marginTop:"150px",
      marginBottom:"150px",
      textAlign:"center",
      fontSize:"9em",
      fontWeight:"none",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      position:"absolute",
      top:"0",
      right:"0",
      left:"0"
    }
    const imgText2={


      height:"300px",
      backgroundColor:"rgba(0,0,0,0)",

      textAlign:"center",
      fontSize:"5em",
      fontWeight:"none",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      position:"absolute",
      top:"0",
      right:"0",
      left:"0",

    }

    const articlePageStyle={
      minHeight:"50vh",
      background:"linear-gradient(rgba(160,255,160,1), rgba(220,255,220,1))",
      display:"flex",
      justifyContent:"center",
      padding:"2%",


    }

    const articleConstraint={
      width:"80%",
      backgroundColor:"rgba(200,255,200,1)",
      display:"flex",
      margin:"auto",
      maxWidth:"2500px",
      display:"flex",
      flexWrap:"wrap",
      padding:"2%",


    }
    const articleConstraint2={
      width:"100%",
      background:"radial-gradient(rgba(220,255,220,1), rgba(150,255,150,1))",
      display:"flex",
      display:"flex",
      flexWrap:"wrap",
      padding:"2%",
      textAlign:"center"


    }

    const articleImg={
      width:"45%",
      height:"90%",
      backgroundColor:"rgba(170,255,170,1)",
      margin:"auto",
      boxShadow:"0 0 10px 1px rgba(0,0,0,0.4)"
    }

    const articleWords={
      width:"45%",
      minHeight:"280px",
      backgroundColor:"rgba(125,255,125,1)",
      margin:"auto",
      padding:"10px",

      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"darkgreen",

      textAlign:"center",
      border:"1px green"
    }

    const articleImg2={
      width:"85%",
      height:"85%",
      background:"red",
      marginLeft:"7%",
      marginTop:"35px",
      maxHeight:"600px",
      boxShadow:"5px 5px 10px 2px rgba(0,0,0,0.4)"
    }
    const articleBlock={
      display:"flex",
      flexDirection:"row",
      width:"50%",
      minHeight:"300px",
    }
    const articleBlock2={
      display:"flex",
      flexDirection:"column",
      width:"100%",

    }

    const aboutPoints={
      color:"rgba(40,175,40,1)",
      fontSize:"1.7em",
      fontFamily:"Lato",
    }

    const aboutPoints1={
      color:"rgba(40,175,40,1)",
      fontSize:"1.1em",
      fontFamily:"Lato",
      fontVariant:"none"
    }

    const aboutPoints2={
      color:"rgba(0,150,0,1)",
      fontSize:"1.4em",
    }


    return (
      <div>
        <Helmet title="OurWorxContainer" meta={[ { name: 'description', content: 'Description of OurWorxContainer' }]}/>

        <Responsive minDeviceWidth={1021}>
          <Header/>
          <DonateAside/>
            <main style={mainStyle}>
              <img style={mainImg} src="http://www.usaconservation.org/wordpress/wp-content/uploads/2015/09/IMG_8718.jpg"/>
              <div style={imgText}>
                Our Worx
              </div>
            </main>

            <div style={articlePageStyle}>
              <div style={articleConstraint}>
                  {this.state.articles.map((article, index) => (
                    <div style={articleBlock}>
                      <img style={articleImg} src={article.image}/>
                      <div style={articleWords}><h3 style={aboutPoints}>{article.title}</h3><h4 style={aboutPoints1}>{article.body}</h4></div>
                    </div>
                  ))}
              </div>
            </div>

          <Footer/>
        </Responsive>

          <Responsive maxDeviceWidth={1020}>
            <Header/>
            <DonateAside/>
              <main style={mainStyle2}>
                <img style={mainImg} src="http://www.usaconservation.org/wordpress/wp-content/uploads/2015/09/IMG_8718.jpg"/>
                <div style={imgText2}>
                  Our Worx
                </div>
              </main>

              <div style={articleConstraint2}>
                {this.state.articles.map((article, index) => (
                  <div style={articleBlock2}>
                    <img style={articleImg2} src={article.image}/>
                    <h2 style={aboutPoints2}>{article.title}</h2>
                  </div>
                ))}
              </div>

            <Footer/>
          </Responsive>

      </div>
    );
  }
}
