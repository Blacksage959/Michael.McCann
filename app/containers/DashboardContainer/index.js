/*
 *
 * DashboardContainer
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class DashboardContainer extends React.PureComponent {
  constructor(props){
  super(props);
  this.state ={
    title:"",
    body:"",
    image:"",
    preview:"",
   }
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

  storeArticle = () => {
    var data = new FormData();
    data.append("title",this.state.title);
    data.append("body",this.state.body);
    data.append("image",this.state.image);

    fetch("http://owlversee.com/api/storeArticle",{
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

    const dashEnv={
      height:"100vh",
      width:"100%",
      backgroundColor:"rgba(3,150,3,.3)",
      padding:"10%",
      justifyContent:"center",


    }

    const dashForm={
      backgroundColor:"rgba(160,255,160,1)",
      display:"flex",
      flexDirection:"column",
      padding:"5%",
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

    const dashTitle={
      fontSize:"3em",
      textAlign:"center",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"green",


    }

    const imgConstraint={
      maxHeight:"600px",
      margin:"10",
    }

    return (

    <div style={dashEnv}>
      <div style={dashForm}>
        <Helmet title="DashboardContainer" meta={[ { name: 'description', content: 'Description of DashboardContainer' }]}/>

        <div style={dashTitle}>
        GreenWorx Article Dash
        </div>


        <div style={dashBoxColor}>
          <input onChange={this.handleTitle}  type="text" placeholder="New Title"/>
        </div>

        <div style={dashBoxColor}>
          <textarea onChange={this.handleBody} rows="5" placeholder="Write Body"> </textarea>
        </div>

        <div style={dashBoxColor}>
          <input onChange={this.handleImage} type="file"/>
          <img style={imgConstraint} src={this.state.preview}/>
        </div>

        <div style={dashBoxColor}>
          <input onTouchTap={this.storeArticle} type="submit"/>
        </div>


      </div>
    </div>
    );
  }
}
