/*
 *
 * Yourworxyourworx
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Responsive from 'react-responsive';
import HeaderMobile from 'components/HeaderMobile';
import Footer from 'components/Footer';
import FooterMobile from 'components/FooterMobile';
import DonateAside from 'components/DonateAside';

export default class Yourworxyourworx extends React.PureComponent {



  constructor(props){
  super(props);
  this.state ={
    title:"",
    body:"",
    image:"",
    preview:"",
    posts:[],
    token:sessionStorage.getItem("token")
   }
  }

  componentWillMount(){
    fetch("http://localhost:8000/api/getPost")
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        posts:json
      })
    }.bind(this))

  }


    handleTitle = (event) => {
      this.setState({
        title:event.target.value
      })
      console.log(this.state.title);
    }

    handleBody = (event) => {
      this.setState({
        body:event.target.value
      })
      console.log(this.state.body);
    }

    handleImage = (event) => {
      event.preventDefault();

      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend= () => {
        this.setState({
          image:file,
          preview: reader.result
        })
      }

      reader.readAsDataURL(file);
    }

    storePost = () => {
      var data = new FormData();
      data.append("title",this.state.title);
      data.append("body",this.state.body);
      data.append("image",this.state.image);

      fetch("http://localhost:8000/api/storePost?token="+this.state.token,{
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

    const mainStyle={
      maxHeight:"800px",
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

      minHeight:"275px",
      overflow:"hidden",


    }
    const mainImg={
      width:"100%",
      height:"auto"

    }

    const mainImg2={
      width:"100%",
      height:"auto",
      minHeight:"275px",

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

    const dashForm2={
      background:"radial-gradient(rgba(150,255,150,1),rgba(100,255,100,1))",
      display:"flex",
      flexDirection:"column",
      padding:"2%",
      boxShadow:"0 0 20px 5px rgba(0,0,0,0.4)",
      borderRadius:"2px",
      position:"absolute",
      top:"0",
      right:"0",
      left:"0",
      marginLeft:"auto",
      marginRight:"auto",
      width:"50%",
      marginTop:"50px",
      maxWidth:"600px",
      maxHeight:"600px",



    }
    const dashForm3={
      background:"radial-gradient(rgba(150,255,150,1),rgba(100,255,100,1))",
      display:"flex",
      flexDirection:"column",
      padding:"2%",
      boxShadow:"0 0 20px 5px rgba(0,0,0,0.4)",
      borderRadius:"2px",
      position:"absolute",
      top:"0",
      right:"0",
      left:"0",
      marginLeft:"auto",
      marginRight:"auto",
      width:"80%",
      marginTop:"10px",
      marginBottom:"20px",
      maxWidth:"600px",
      maxHeight:"600px",





    }
    const imgText2={


      height:"300px",
      backgroundColor:"rgba(0,0,0,0)",

      textAlign:"center",
      fontSize:"4em",
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

      display:"flex",
      justifyContent:"center",
      padding:"2%",
      background:"radial-gradient(rgba(220,255,220,1), rgba(150,255,150,1))",



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
      borderRadius:"15px",



    }
    const articleConstraint2={
      width:"100%",
      background:"radial-gradient(rgba(220,255,220,1), rgba(150,255,150,1))",
      display:"flex",
      display:"flex",
      flexWrap:"wrap",
      padding:"2%",
      textAlign:"center",



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
      background:"radial-gradient(rgba(150,255,150,1),rgba(100,255,100,1))",
      margin:"auto",
      padding:"10px",
      borderRadius:"5px",
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

    const dashEnv={
      height:"auto",
      width:"100%",
      backgroundColor:"rgba(3,150,3,.3)",
      padding:"20%",
      justifyContent:"center",


    }

    const dashForm={
      backgroundColor:"rgba(160,255,160,1)",
      display:"flex",
      flexDirection:"column",
      padding:"10%",
      boxShadow:"0 0 20px 5px rgba(0,0,0,0.4)",
      borderRadius:"2px",


    }

    const dashBoxColor={

      height:"auto",
      width:"auto",
      backgroundColor:"rgba(220,255,220,1)",
      marginBottom:"3%",
      border:"1px solid green",
      maxHeight:"500px",
      overflow:"hidden",
      padding:"10"

    }

    const dashBoxColor2={

      height:"auto",
      width:"auto",
      backgroundColor:"rgba(220,255,220,1)",
      marginBottom:".5%",
      border:"1px solid green",
      maxHeight:"500px",
      overflow:"hidden",
      padding:"10"

    }

    const dashTitle={
      fontSize:"3em",
      textAlign:"center",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"green",


    }
    const dashTitle2={
      fontSize:"2em",
      textAlign:"center",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"green",


    }

    const imgConstraint={
      maxHeight:"200px",
      margin:"10",
      border:"4px solid white"
    }

    const imgConstraint2={
      maxHeight:"100px",
      margin:"5",
      border:"2px solid white"
    }

    const mainTitle={
      fontSize:"2.5em",
      fontWeight:"strong",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      borderRight:"10px solid green",
      borderLeft:"10px solid green",
      letterSpacing:".4em",
      textAlign:"center",
      marginBottom:"10px"
    }

    const mainTitle2={
      fontSize:"1.5em",
      fontWeight:"strong",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      borderRight:"7px solid green",
      borderLeft:"7px solid green",
      letterSpacing:".8em",
      textAlign:"center",
      marginBottom:"10px",
      lineHeight:"15px",
      padding:"auto"

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
        <Helmet title="Yourworxyourworx" meta={[ { name: 'description', content: 'Description of Yourworxyourworx' }]}/>



          <Responsive minDeviceWidth={900}>
            <Header/>
            <DonateAside/>
              <main style={mainStyle}>
                <img style={mainImg} src="https://www.startersquad.com/wp-content/uploads/2016/04/Hand-in-hand.jpg"/>
                <div style={dashForm2}>

                    <div style={mainTitle}>YOUR WORX</div>
                    <input style={dashBoxColor} onChange={this.handleTitle}  type="text" placeholder="New Title"/>
                    <textarea style={dashBoxColor} onChange={this.handleBody} placeholder="Write Body"> </textarea>
                    <input style={dashBoxColor} onChange={this.handleImage} type="file"/>
                    <img style={imgConstraint} src={this.state.preview}/>
                    <input style={dashBoxColor} onTouchTap={this.storePost} type="submit"/>
                  </div>

              </main>

              <div style={articlePageStyle}>
                <div style={articleConstraint}>
                    {this.state.posts.map((post, index) => (
                      <div style={articleBlock}>
                        <img style={articleImg} src={post.image}/>
                        <div style={articleWords}><h3 style={aboutPoints}>{post.title}</h3><p style={aboutPoints1}>{post.body}</p></div>
                      </div>
                    ))}
                </div>
              </div>

            <Footer/>
          </Responsive>

            <Responsive maxDeviceWidth={899}>
              <Header/>
              <DonateAside/>
                <main style={mainStyle2}>
                  <img style={mainImg2} src="https://www.startersquad.com/wp-content/uploads/2016/04/Hand-in-hand.jpg"/>
                    <div style={dashForm3}>

                        <div style={mainTitle2}>YOUR WORX</div>
                        <input style={dashBoxColor2} onChange={this.handleTitle}  type="text" placeholder="New Title"/>
                        <textarea style={dashBoxColor2} onChange={this.handleBody} type="text" placeholder="Write Body"> </textarea>
                        <input style={dashBoxColor2} onChange={this.handleImage} type="file"/>
                        <img style={imgConstraint2} src={this.state.preview}/>
                        <input style={dashBoxColor} onTouchTap={this.storePost} type="submit"/>
                      </div>
                </main>


                <div style={articleConstraint2}>
                  {this.state.posts.map((post, index) => (
                    <div style={articleBlock2}>
                      <img style={articleImg2} src={post.image}/>
                      <h2 style={aboutPoints2}>{post.title}</h2>
                    </div>
                  ))}
                </div>

              <Footer/>
            </Responsive>
          </div>
    );
  }
}
