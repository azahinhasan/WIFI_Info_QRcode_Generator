import React, { Component } from 'react';
import classes from './App.css';
import Input from './input';
import QrCode from './components/qrCode';

class App extends Component {



  state={
    //ssid:5,

    ssid:'0',
    password:'',
    encryption:'WPA',
    hidden: true,
    makeQR:false

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






  render() {
    return (

      
      <div className={classes.App}>

       

      <div className={classes.noPrint}>
        <Input
        onSSIDchange={this.onSSIDchange} 
        onPASSWORDchange={this.onPASSWORDchange} 
        onENCRYPTIONchange={this.onENCRYPTIONchange} 
        onHIDDENchange={this.onHIDDENchange}  
        />

        <button onClick={this.makeQRcode}>Click Here</button>


        
        <p>Hello</p>
        <p > className={classes.noPrint}hi {this.state.ssid}</p>
        <p >hi {this.state.password}</p>
        <p >hi {this.state.encryption}</p>
        <p > hi {this.state.hidden}</p>
        <p>hi {this.state.makeQR}</p>
      </div>


      
      



      { this.state.makeQR ? (

        <div>
          <QrCode data={this.state}/>
          <button onClick={() => setTimeout(window.print, 1)} className={classes.noPrint}>Print</button>
        </div>
          ) : null }


      </div>
      
    );
  }
}

export default App;
