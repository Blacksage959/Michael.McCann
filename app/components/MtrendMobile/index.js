/**
*
* MtrendMobile
*
*/

import React from 'react';

class MtrendMobile extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      articles:[]
    }
  }

  componentWillMount(){
    fetch("http://localhost:8000/api/getArticles")
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
    const spacer={
      height:"100px",
      width:"100%",
      background:"rgba(3,255,3,0)",
      textAlign:"center",
      fontSize:"4em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(210,255,210,1)",
      textShadow:"2px 2px 5px green",
      borderBottom:"1px solid green",
      borderTop:"1px solid green",

    }
    const paperBack={
      width:"100%",
      height:"auto",
      background:"radial-gradient(rgba(130,255,130,1),rgba(230,255,230,1))",
      padding:"10px"



    }
    const OurWorkBlox1={
      width:"auto",
      height:"400px",
      margin:"20px",
      backgroundImage:"url(https://www.rainforest-rescue.org/uploads/photos/base/kind-baum-kennedy-paiter-surui.jpg)",
      display:"flex",
      justifyContent:"center",
      backgroundSize:"cover",
      backgroundPosition:"center center"

    }
    const OurWorkBlox2={
      width:"auto",
      height:"400px",
      margin:"20px",
      backgroundImage:"url(http://blog.bird-rescue.org/wp-content/uploads/2011/11/Wildlife-penguin-clean2.jpg)",
      display:"flex",
      justifyContent:"center",
      backgroundSize:"cover",
      backgroundPosition:"center center"

    }
    const OurWorkBlox3={
      width:"auto",
      height:"400px",
      margin:"20px",
      backgroundImage:"url(https://tribkswb.files.wordpress.com/2017/02/gettyimages-627859562.jpg?quality=85&strip=all&w=1200)",
      display:"flex",
      justifyContent:"center",
      backgroundSize:"cover",
      backgroundPosition:"center center",

    }
    const img={
      width:"100%",
      height:"auto",
      backgroundPosition:"center",
      zIndex:"-1",
    }
    const ImgTBox={

      width:"80%",
      height:"auto",
      background:"rgba(3,255,3,0)",
      margin:"10",


    }
    const ImgCBox={

      background:"rgba(255,255,255,.5)",
      width:"80%",
      height:"auto",
      margin:"10",
      visibility:"hidden",
    }

    const pTL={
      textAlign:"left",
      fontSize:"3.5em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(210,255,210,1)",
      lineHeight:".8em"
}

    const pTR={
      textAlign:"right",
      fontSize:"4em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(210,255,210,1)",
}

    return (
      <div style={paperBack}>
        <div style={spacer}>Our Worx</div>
          {this.state.articles.map((article,index) => (
            <div style={{
              width:"auto",
              height:"400px",
              margin:"20px",
              boxShadow:"0 0 10px 2px rgba(0,0,0,0.4)",
              backgroundImage:`url(${article.image})`,
              display:"flex",
              justifyContent:"center",
              backgroundSize:"cover",
              backgroundPosition:"center center"
            }}>
              <div style={ImgTBox}><p style={pTL}>{article.title}</p></div>
              <div style={ImgCBox}></div>
            </div>
          ))}

      </div>
//<img style={img} src="https://www.rainforest-rescue.org/uploads/photos/base/kind-baum-kennedy-paiter-surui.jpg"/>
//<img style={img} src="http://blog.bird-rescue.org/wp-content/uploads/2011/11/Wildlife-penguin-clean2.jpg"/>
//<img style={img} src="https://tribkswb.files.wordpress.com/2017/02/gettyimages-627859562.jpg?quality=85&strip=all&w=1200"/>
    );
  }
}

export default MtrendMobile;
