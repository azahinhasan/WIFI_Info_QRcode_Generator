
import React,{Component} from 'react';
import  classes from'./qrCode.css';
import QrCode from 'react.qrcode.generator';
//npm install react.qrcode.generator



class QRcode extends Component{ 



    handleChange() {
        // Update component state whenever the data source changes
    }



    returnValue = (value) =>{

    return <QrCode 
    size={290}
    level={"H"}
    includeMargin={true}
    value={value}/>
    }

    



 downloadQR = (value) => {
    var can = document.getElementsByTagName("canvas");

    const pngUrl = can[0].toDataURL("image/png");

    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrCODE.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


    render(){
        const value = "WIFI:S:"+this.props.data.ssid+";T:"+this.props.data.encryption
        +";P:"+this.props.data.password+";H:"+String(this.props.data.hidden)+";" ;

        {console.log(value)}

        return(
    
        <div>      
            <h2 className={classes.QrCode}>Scan For WiFi Information </h2>
            <br></br>
            <div className={classes.QrCode}>{this.returnValue(value)}</div>
           <button onClick={this.downloadQR}>Download</button>
        </div>

        

        )     
    }
}





export default QRcode; 
