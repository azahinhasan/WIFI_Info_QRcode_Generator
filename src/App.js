import React, { Component } from 'react';
import classes from './App.css';
import Input from './input';
import QrCode from './components/qrCode';
import classesBtn from './button.css';
import Aritcle from './article';
class App extends Component {



  state={
    //ssid:5,

    ssid:'',
    password:'',
    encryption:'WPA',
    hidden: true,
    makeQR:false,
    downloadPNG:true,
    disabledButton:false,
    textEditable:false,
    seeQRbtn:true,
    errorMsg:''
  };



onSSIDchange = event => {
    this.setState({ ssid: event.target.value });

};

onPASSWORDchange = event => {
  this.setState({ password: event.target.value });

};

onENCRYPTIONchange = event => {
  this.setState({ encryption: event.target.value });

};

onHIDDENchange = () => {
  this.setState({ hidden: !this.state.hidden });

};

makeQRcode=()=>{

  this.setState({ makeQR: true});
  this.setState({ textEditable: true});
  
}

downloadPNG =()=>{
  this.setState({ downloadPNG: true});
}


tryAgain=()=>{
  window.location.reload(false);
}

seeQRbtn(){
   this.setState({ seeQRbtn: false});
}


getSnapshotBeforeUpdate(nextProps, nextState){

  // if(this.state.ssid.length > 1){
  //   this.setState({ seeQRbtn: false});
  //   console.log(this.state.ssid.length+"MOunt")
  // }
  console.log("shouldComponentUpdate")
  return this.state.value != nextState.value;

}

  render() {
    return (

      
      <div className={classes.App}>

       

      <div className={classes.noPrint}>
        <h1>WiFi QR Code Genarator</h1>

        <table className={classes.table}>
          <tr>
            <td>
            <Input
            onSSIDchange={this.onSSIDchange} 
            onPASSWORDchange={this.onPASSWORDchange} 
            onENCRYPTIONchange={this.onENCRYPTIONchange} 
            onHIDDENchange={this.onHIDDENchange} 
            state={this.state} 

        />
        <br></br>
            </td>
          </tr>
          <tr>
            <td>

            { this.state.makeQR ? (

                <div>
                  <button onClick={this.tryAgain} className={classesBtn.button}>Try Again</button>

                </div>
                
              ) : 
              
              (<div>
              
                <span  hidden={this.state.ssid.length>0 & this.state.password.length>0? true : false}>
                  [P.S.Please Enter SSID and PASSWORD to Continue]
                </span>
                <br></br>
                <br></br>
                <button onClick={this.makeQRcode}
                className={classesBtn.button}
                disabled={this.state.ssid.length>0 & this.state.password.length>0? false : true}  
                >Click Here</button>
              </div>
               )
            }

            </td>
          </tr>
        </table>
    
        </div>
        

        { this.state.makeQR ? (

                <div><QrCode data={this.state}/> </div>
        ) :  null }


          <br></br>
          <br></br>
          <div className={classes.noPrint}><Aritcle/></div>
          
      </div>
      
    );
  }
}

export default App;
