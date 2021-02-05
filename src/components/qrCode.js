
import React,{Component} from 'react';
import  classes from'./qrCode.css';
import QrCode from 'react.qrcode.generator';
//npm install react.qrcode.generator
import classesBtn from '../button.css';


class QRcode extends Component{ 





    returnValue = (value) =>{

    return <QrCode 
    size={290}
    level={"H"}
    includeMargin={true}
    value={value}/>
    }

    



 downloadQR = () => {
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
            <table className={classes.table}>
                <tr>
                    <td>
                        <h2 className={classes.QrCode}>Scan For WiFi Information </h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 className={classes.Print}>SSID:{this.props.data.ssid}</h4>
                        <br></br>
                        <div className={classes.QrCode}>{this.returnValue(value)}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div  className={classes.noPrint}>
                        <button onClick={this.downloadQR} className={classesBtn.button}>Download</button>
                        <br></br>
                        <button onClick={() => setTimeout(window.print, 1)} className={classesBtn.button}>Print</button>
                    </div>
                    </td>
                </tr>
            </table>   
            
           
        
            {/* { this.props.data.downloadPNG ? (

                <div>
                    aa{this.downloadQR}
                </div>
            ) : null } */}
        </div>

        

        )     
    }
}





export default QRcode; 
