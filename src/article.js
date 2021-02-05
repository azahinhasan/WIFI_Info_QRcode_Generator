
import React,{Component} from 'react';
import classes from './App.css';



class Article extends Component{ 



    render(){

        return(
            <div>
                <ul>
                    <li>
                        <span>SSID : </span>Its stands for Service Set IDentifier and is your network’s name. 
                        If you open the list of Wi-Fi networks on your laptop or phone, you’ll see a list of SSIDs. Wireless router or access points broadcast SSIDs so nearby devices can find and display any available networks. 
                        Learn how they work and how to find yours below.
                    </li>
                    <li>
                        <span>ENCRYPTION : </span>Wireless encryption secures your wireless network with an authentication protocol. 
                        It requires a password or network key when a user or device tries to connect.
                        Using some encryption is always better than using none.<br></br>
                        Thare are TWO encryption tools used to secure wireless connection :
                        <ul>
                            <li>
                                <span>WPA/WPA2 :</span> WPA stands for Wireless Protected Access. 
                                WPA2 is the second version of the WPA standard. WPA2 is the most secure of the three. If your wireless card and router support WPA2,
                                that is what you should use when setting up your wireless network.
                            </li>
                            <li>
                                <span>WEP :</span> WEP stands for Wired Equivalent Privacy.
                                WEP is the least secure of these standards, and you should not use it if you can avoid it.
                            </li>
                
                        </ul>
                    </li>
                    <li>
                        <span>Hidden : </span> Optional. Tick if you want to hide the SSID. 
                        Note this was mistakenly also used to specify phase 2 method in releases up to 4.7.8 / Barcode Scanner 3.4.0. 
                    </li>
                </ul>
            </div>
        )
        

           
    }
}





export default Article; 
