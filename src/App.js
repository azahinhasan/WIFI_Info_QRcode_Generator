import React, { Component } from 'react';
import classes from './App.css';
import Input from './input';
import QrCode from './components/qrCode';
import classesBtn from './button.css';
import Aritcle from './article';
class App extends Component {



  state={
    //ssid:5,

    ssid:'0',
    password:'',
    encryption:'WPA',
    hidden: true,
    makeQR:false,
    downloadPNG:true,
    disabledButton:false

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
  
}

downloadPNG =()=>{
  this.setState({ downloadPNG: true});
}


tryAgain=()=>{
  window.location.reload(false);
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

        />
            </td>
          </tr>
          <tr>
            <td>
            { this.state.makeQR ? (

                <div>
                  <button onClick={this.tryAgain} className={classesBtn.button}>Try Again</button>

                </div>
                
              ) :  
              <button onClick={this.makeQRcode} className={classesBtn.button}>Click Here</button> }
           
            

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
