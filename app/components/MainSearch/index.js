/**
*
* MainSearch
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

class MainSearch extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      active:0,
      slides:[
        {
          id:0,
          image:"https://media.npr.org/assets/img/2012/08/03/_mg_7413_wide-8b8d3d66d8ff961eba74621561a7dec1f7125eb8.jpg?s=1400"
        },
        {
          id:1,
          image:"http://static.guim.co.uk/sys-images/Guardian/About/General/2010/6/14/1276501809253/Delicate-patterns-in-the--004.jpg"
        },
        {
          id:2,
          image:"https://static01.nyt.com/images/2016/11/20/magazine/20mag-mosul-ss-slide-08XS/20mag-mosul-ss-slide-08XS-superJumbo.jpg"
        },
        {
          id:3,
          image:"https://d.ibtimes.co.uk/en/full/1429656/smog-paris.jpg"
        },
        {
          id:4,
          image:"https://s-media-cache-ak0.pinimg.com/originals/37/70/8c/37708c5deb7237272d1cb018c58e07ae.jpg"
        },
        {
          id:5,
          image:"https://media.npr.org/assets/img/2012/08/03/_mg_7413_wide-8b8d3d66d8ff961eba74621561a7dec1f7125eb8.jpg?s=1400"
        },
        {
          id:6,
          image:"https://s-media-cache-ak0.pinimg.com/originals/e2/2d/f1/e22df1b176158029fc7ae842c288a885.jpg"
        },
        {
          id:7,
          image:"http://1qa2mv1tvhvk1t1uyv1mvwyx1dmd.wpengine.netdna-cdn.com/files/2016/03/Carbon-pollution.jpg"
        },

      ]
    }
  }


  componentWillMount(){
    this.handleTimer();
  }
  handleTimer = () => {
    var _this = this;
    setInterval(function(){
      if(_this.state.active == _this.state.slides.length-1){

      }
    })
  }



  render() {
    const mainStyle={
      maxHeight:"700px",
      width:"100%",
      marginTop:"150px",
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
      fontFamily:"Lobster",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      position:"absolute",
      top:"0",
      right:"0",
      left:"0"
    }
    const mainSearch={
      width:"100%",
      height:"300px",
      display:"flex",
      justifyContent:"center",
      background:"linear-gradient(rgba(220,255,220,1), rgba(155,255,155,1))",
      borderBottom:"solid green 1px"
    }
    const msMinContainer={
      display:"flex",
      flexDirection:"column",
      maxWidth:"1200px",

      height:"250px",
      width:"100%",

    }
    const searchBar={
      width:"100%",
      height:"40%",
      background:"rgba(220,255,220,1)",
      display:"flex",
      flexDirection:"row",
      border:"1px solid green",
      borderRadius:"0 0 10px 10px"
    }

    const searchBarType={
      width:"90%",
      height:"100%",
    }
    const searchBarGo={
      width:"10%",
      height:"100%",

      paddingTop:"35px",
      paddingLeft:"47px"
    }

    const filler={
      width:"100%",
      height:"60%",

      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      fontSize:"2em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Montserrat",
      color:"white",
      textShadow:"1px 1px 5px green",

    }

    const fillerBlock={
      height:"100%",
      width:"30%",
      textAlign:"center",
      background:"rgba(255,255,255,0)",

    }
    const spaceFiller={
      height:"150px",
      width:"100%",
      background:"rgba(3,255,3,.1)",
    }

    const searchIcon={
      color:"#999999",
      hoverColor:"rgba(20,192,11,1)", // Why wont this work as SearchIcon style instead of inline override, How to INCREASE SIZE
    }
    const pFill={
      lineHeigt:".1em",
      fontSize:"1em",
      fontWeight:"bold",
      fontVariant:"small-caps",
      fontFamily:"Montserrat",
      color:"white",
      textShadow:"1px 1px 5px green",
      color:"rgba(220,255,220,1)",
    }
    const fillHeader={
      fontSize:"1.7em",
      color:"rgba(150,255,150,1)",
    }
    return (
      <div>
          <main style={mainStyle}>
              <img style={mainImg} src="https://media.npr.org/assets/img/2012/08/03/_mg_7413_wide-8b8d3d66d8ff961eba74621561a7dec1f7125eb8.jpg?s=1400"/>
              <div style={imgText}>
                Divided We Fall
              </div>
          </main>

          <div style={mainSearch}>
            <div style={msMinContainer}>
              <div style={searchBar}>
                <div style={searchBarGo}>
                  <SearchIcon color="#999999" hoverColor="rgba(20,192,11,1)" />
                </div>
                <div style={searchBarType}><br/><TextField hintText="Search" fullWidth={true} /></div>

              </div>

              <div style={filler}>
                <div style={fillerBlock}>
                <p style={pFill}><span style={fillHeader}>IMPACT</span><br/>ENDING POLLUTION around the World</p>
                </div>
                <div style={fillerBlock}>
                <p style={pFill}><span style={fillHeader}>MISSION</span><br/>Making our PLANET a CLEANER Place</p>
                </div>
                <div style={fillerBlock}>
                <p style={pFill}><span style={fillHeader}>UNITY</span><br/>Bringing the PEOPLE TOGETHER</p>
                </div>
              </div>
            </div>



          </div>
          <div style={spaceFiller}>
          </div>
      </div>


    );
  }
}

export default MainSearch;
