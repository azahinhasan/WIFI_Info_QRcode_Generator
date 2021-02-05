import React, { Component } from 'react';
import classes from './App.css';
import Input from './input';
import QrCode from './components/qrCode';
import classesBtn from './button.css';
class App extends Component {



  state={
    //ssid:5,

    ssid:'0',
    password:'',
    encryption:'WPA',
    hidden: true,
    makeQR:false,
    downloadPNG:true

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





  render() {
    return (

      
      <div className={classes.App}>

       

      <div className={classes.noPrint}>
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
            <button onClick={this.makeQRcode} className={classesBtn.button}>Click Here</button>

            </td>
          </tr>
        </table>
    

        

        
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
        </div>
          ) : null }


      </div>
      
    );
  }
}

export default App;
