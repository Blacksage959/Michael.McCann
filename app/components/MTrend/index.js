/**
*
* MTrend
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class MTrend extends React.PureComponent {

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

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {



    const mTrendCont={
      height:"1200px",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      background:"radial-gradient(rgba(200,255,200,1),rgba(245,255,245,1))",
      borderTop:"solid green 1px"

    }

    const mTrendMaxW={
      display:"flex",
      flexDirection:"column",
      height:"100%",
      width:"100%",
      background:"rgba(255,255,255,0)!important",
      justifyContent:"center"

    }
    const titleBlock={
      height:"20%",
      width:"100%",
      textAlign:"center",
      background:"rgba(3,255,3,.2)!important",
      fontSize:"5em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(220,255,220,1)",
      textShadow:"1px 1px 5px green",

    }
    const titleBlockBttm={
      height:"5%",
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      background:"rgba(3,255,3,.4)",
      borderBottom:"solid green 1px",

    }
    const titleBlockBttmSeg={
      height:"100%",
      width:"35%",
      fontSize:"2em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"rgba(220,255,220,1)",
      textShadow:"1px 1px 5px green",
      textAlign:"center",


    }
    const multiImgCont={
      height:"75%",
      width:"100%",
      background:"rgba(3,255,3,.05)",
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
      paddingLeft:"1%",
      paddingRight:"1%",

    }

    const imgBlock={
      height:"35%",
      width:"30%",
      background:"rgba(255,255,255,1)",
      margin:"auto",

    }
    const img={
      width:"100%",
      height:"100%",
      borderRadius:"20px",
      background:"rgba(3,255,3,0)",
      boxShadow:"0 0 10px 1px rgba(0,0,0,0.4)",

    }

    const articleTitle={

      marginBottom:"20px",
      fontSize:"1.2em",
      textAlign:"center",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Lato",
      color:"darkgreen",

      textAlign:"center",
    }
    return (
      <div style={mTrendCont}>
        <div style={mTrendMaxW}>
          <FlatButton style={titleBlock} backgroundColor="rgba(3,255,3,.2)" hoverColor="rgba(3,255,3,.05)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/ourworx")}>
            Our Worx
          </FlatButton>

          <div style={titleBlockBttm}>
            <div style={titleBlockBttmSeg}>People</div>
            <div style={titleBlockBttmSeg}>Ocean</div>
            <div style={titleBlockBttmSeg}>Forest</div>
          </div>

          <div style={multiImgCont}>
            {this.state.articles.map((article, index) => (
              <div style={imgBlock}>
                <img style={img} src={article.image}/>
                <h2 style={articleTitle}>{article.title}</h2>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }
}
MTrend.contextTypes = {
  router: React.PropTypes.object
}

export default MTrend;
