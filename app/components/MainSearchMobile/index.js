/**
*
* MainSearchMobile
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';


class MainSearchMobile extends React.PureComponent {
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
        _this.setState({
          active:0
        })

      }else{
        _this.setState({
          active:_this.state.active+1
        })
      }

    }, 4000)
  }

  showSlider = () => {
  var activeImage = "";
    for(var i = 0; i < this.state.slides.length;i++)
    {
      if(this.state.active === this.state.slides[i].id)
      {
        activeImage = this.state.slides[i].image
      }
    }


    const MSMobBackgr={
      height:"550px",
      width:"100%",
      backgroundImage:"url("+activeImage+")",
      display:"flex",
      justifyContent:"center",
      backgroundSize:"cover",
      backgroundPosition:"center center",
    }
    const imgText={

      width:"900px",
      height:"300px",
      backgroundColor:"rgba(0,0,0,0)",
      margin:"auto",

      textAlign:"center",
      fontSize:"5em",
      fontWeight:"none",
      fontVariant:"small-caps",
      fontFamily:"Lobster",
      color:"rgba(220,255,220,1)",
      textShadow:"2px 2px 5px green",
      paddingTop:"100px",
      lineHeight:"75%"
    }

    return(
      <div style={MSMobBackgr}>
        <div style={imgText}>Divided We Fall</div>
      </div>
    )

  }

  render() {

    const MSMSearchBox={
      height:"60px",
      width:"100%",
      backgroundColor:"rgba(3,255,3,.1)",
    }
    const MSMSearchCenter={
      height:"100%",
      width:"70%",
      backgroundColor:"rgba(3,255,3,.3)",
      marginLeft:"15%",
      border:"none",
      display:"flex",
      flexDirection:"row",
      borderRadius:"0 0 5px 5px",

    }
    const MSMSearchIconP={
      height:"100%",
      width:"60px",
      border:"none",
      paddingTop:"15px",
      paddingLeft:"15px",

    }
    return (
      <div>
        {this.showSlider()}
        <div style={MSMSearchBox}>
          <div style={MSMSearchCenter}>

            <div style={MSMSearchIconP}>
              <SearchIcon color="#ffffff" hoverColor="rgba(20,192,11,1)" />
            </div>
            <TextField hintText="Search" fullWidth={true}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSearchMobile;
