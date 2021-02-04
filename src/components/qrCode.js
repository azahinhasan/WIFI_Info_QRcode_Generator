
import React,{Component} from 'react';
import  './qrCode.css';
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

    


    render(){
        const value = "WIFI:S:"+this.props.data.ssid+";T:"+this.props.data.encryption
        +";P:"+this.props.data.password+";H:"+String(this.props.data.hidden)+";" ;

        {console.log(value)}

        return(
    
        <div> 

        <p>hh {this.props.data.ssid}</p>

        <p >aa{this.returnValue(value)}</p>

        </div>

        )     
    }
}





export default QRcode; 
